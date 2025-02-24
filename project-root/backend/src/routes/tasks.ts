import { Router } from 'express';
import { getTasks, createTask, updateTask, deleteTask } from '../controllers/tasksController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();

// All task routes are protected by JWT authentication.
router.use(authenticateToken);

router.get('/', getTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
