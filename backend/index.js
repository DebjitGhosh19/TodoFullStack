import express from "express"
import cors from 'cors';
import dotenv from 'dotenv'
import { DbConnect } from "./config/db.js";
import TodoRouter from "./routes/todoRoutes.js";
import UserRouter from "./routes/userRoutes.js";
const app=express();
//middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dotenv.config();
 DbConnect();
 
 app.use('/todo/api',TodoRouter)
 app.use('/user/api',UserRouter)

 const port=process.env.PORT||5000
 app.listen(port,()=>{
  console.log(`server is running at http://localhost:${port}`);
 })