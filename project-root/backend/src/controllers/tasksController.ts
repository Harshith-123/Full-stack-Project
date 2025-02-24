import { Request, Response } from 'express';
import pool from '../config/db';
import { AuthenticatedRequest } from '../middleware/authMiddleware';

export const getTasks = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const result = await pool.query('SELECT * FROM tasks WHERE "userId" = $1', [userId]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching tasks' });
  }
};

export const createTask = async (req: AuthenticatedRequest, res: Response) => {
  const { title, description } = req.body;
  try {
    const userId = req.user?.id;
    const result = await pool.query(
      'INSERT INTO tasks (title, description, "userId") VALUES ($1, $2, $3) RETURNING *',
      [title, description, userId]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating task' });
  }
};

export const updateTask = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  const { title, description, isComplete } = req.body;
  try {
    const userId = req.user?.id;
    // Verify that the task belongs to the user
    const taskResult = await pool.query('SELECT * FROM tasks WHERE id = $1 AND "userId" = $2', [id, userId]);
    if (taskResult.rowCount === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    const result = await pool.query(
      'UPDATE tasks SET title = $1, description = $2, "isComplete" = $3 WHERE id = $4 RETURNING *',
      [title, description, isComplete, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error updating task' });
  }
};

export const deleteTask = async (req: AuthenticatedRequest, res: Response) => {
  const { id } = req.params;
  try {
    const userId = req.user?.id;
    // Verify that the task belongs to the user
    const taskResult = await pool.query('SELECT * FROM tasks WHERE id = $1 AND "userId" = $2', [id, userId]);
    if (taskResult.rowCount === 0) {
      return res.status(404).json({ message: 'Task not found' });
    }
    await pool.query('DELETE FROM tasks WHERE id = $1', [id]);
    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting task' });
  }
};
