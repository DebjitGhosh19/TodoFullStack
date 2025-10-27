import express from 'express';
import { signin, signout, signup } from '../controllers/userController.js';
const UserRouter=express.Router();

UserRouter.post("/signup",signup)

UserRouter.post("/signin",signin)
UserRouter.post("/signout",signout)

export default UserRouter