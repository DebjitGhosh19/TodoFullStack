import expess from 'express'
import { createToDo, deleteTodo, editTodo, getTodo } from '../controllers/todoController.js';

const TodoRouter=expess.Router();

TodoRouter.post('/create',createToDo)
TodoRouter.get('/getTodo',getTodo)
TodoRouter.put('/updateTodo/:id',editTodo)
TodoRouter.delete('/delete/:id',deleteTodo)
export default TodoRouter;