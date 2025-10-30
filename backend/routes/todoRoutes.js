import expess from 'express'
import { createToDo, deleteTodo, editTodo, getTodo } from '../controllers/todoController.js';
import { authenticate } from '../middleware/authorize.js';

const TodoRouter=expess.Router();

TodoRouter.post('/create',authenticate,createToDo)
TodoRouter.get('/getTodo',authenticate,getTodo)
TodoRouter.put('/updateTodo/:id',authenticate,editTodo)
TodoRouter.delete('/delete/:id',authenticate,deleteTodo)
export default TodoRouter;