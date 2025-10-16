import { ToDo } from "../model/todoModel.js";

export const createToDo=async(req,res)=>{
  const todo=new ToDo({
    text:req.body.text,
    completed:req.body.completed
  })
try {
  const newTodo=await todo.save()
  res.status(201).json({message:"Todo create successfully",newTodo})
  
} catch (error) {
  res.status(400).json({message:"Error occuring create todo",error})
  console.log(error);
}
}
