import expess from 'express'
import { createToDo } from '../controllers/todoController.js';

const TodoRouter=expess.Router();

TodoRouter.post('/create',createToDo)