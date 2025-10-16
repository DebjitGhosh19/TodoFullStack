import express from "express"
import cors from 'cors';
import dotenv from 'dotenv'
import { DbConnect } from "./config/db.js";
const app=express();
//middlewares
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dotenv.config();
 DbConnect();
 
 app.get("/",(req,res)=>{
  res.send("Wlcome")
 })


 const port=process.env.PORT||5000
 app.listen(port,()=>{
  console.log(`server is running at http://localhost:${port}`);
 })