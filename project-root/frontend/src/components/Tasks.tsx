import React, { useState, useEffect } from 'react';
import api from '../services/api';

interface Task {
  id: number;
  title: string;
  description?: string;
  isComplete: boolean;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // State for editing a task
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const response = await api.get('/tasks');
      setTasks(response.data);
    } catch (err) {
      console.error('Error fetching tasks', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add a new task
  const handleAddTask = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/tasks', { title, description });
      setTitle('');
      setDescription('');
      fetchTasks();
    } catch (err) {
      console.error('Error adding task', err);
    }
  };

  // Toggle task completion
  const handleToggleComplete = async (task: Task) => {
    try {
      await api.put(`/tasks/${task.id}`, {
        title: task.title,
        description: task.description,
        isComplete: !task.isComplete,
      });
      fetchTasks();
    } catch (err) {
      console.error('Error updating task', err);
    }
  };

  // Delete a task
  const handleDeleteTask = async (taskId: number) => {
    try {
      await api.delete(`/tasks/${taskId}`);
      fetchTasks();
    } catch (err) {
      console.error('Error deleting task', err);
    }
  };

  // Enter editing mode for a task
  const handleEditTask = (task: Task) => {
    setEditingTaskId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description || '');
  };

  // Cancel editing mode
  const handleCancelEdit = () => {
    setEditingTaskId(null);
    setEditTitle('');
    setEditDescription('');
  };

  // Update the task with new values
  const handleUpdateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingTaskId === null) return;
    try {
      await api.put(`/tasks/${editingTaskId}`, {
        title: editTitle,
        description: editDescription,
        // Retain the current completion status:
        isComplete: tasks.find((t) => t.id === editingTaskId)?.isComplete || false,
      });
      setEditingTaskId(null);
      setEditTitle('');
      setEditDescription('');
      fetchTasks();
    } catch (err) {
      console.error('Error updating task', err);
    }
  };

  return (
    <div>
      <h2>Your Tasks</h2>
      {/* Form to add a new task */}
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: '1rem' }}>
            {editingTaskId === task.id ? (
              // Show edit form for the task being edited
              <form onSubmit={handleUpdateTask}>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  required
                />
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <button type="submit">Update</button>
                <button type="button" onClick={handleCancelEdit}>
                  Cancel
                </button>
              </form>
            ) : (
              // Display task info with action buttons
              <>
                <span
                  style={{
                    textDecoration: task.isComplete ? 'line-through' : 'none',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleToggleComplete(task)}
                >
                  {task.title} {task.description && `- ${task.description}`}
                </span>
                <button onClick={() => handleEditTask(task)}>Edit</button>
                <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
