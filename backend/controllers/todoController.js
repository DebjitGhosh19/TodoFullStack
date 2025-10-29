import { ToDo } from "../model/todoModel.js";

export const createToDo=async(req,res)=>{
  const todo=new ToDo({
    text:req.body.text,
    completed:req.body.completed,
    user:req.user._id
  })
try {
  const newTodo=await todo.save()
  res.status(201).json({message:"Todo create successfully",newTodo})
  
} catch (error) {
  res.status(400).json({message:"Error occuring create todo",error})
  console.log(error);
}
}


export const getTodo=async (req,res)=>{
  try {
    const todos=await ToDo.find({user:req.user._id})
    res.status(201).json({message:"Todo fetch successfully",todos})
  } catch (error) {
    res.status(401).json({message:"Error occuring in todo fetching"},error)
  }
}

export const deleteTodo=async (req,res) => {
  try {
    const todo=await ToDo.findByIdAndDelete(req.params.id);
    if (!todo) {
      res.status(404).json({message:"Todo not found"})
    }
    res.status(201).json({message:"Todo delete successfully",todo});
  } catch (error) {
    res.status(401).json({message:"Error occuring delete todo"},error);

  }
}
export const editTodo=async (req,res) => {
  try {
    const todo=await ToDo.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(201).json({message:"Todo updated successfully",todo});
  } catch (error) {
    res.status(401).json({message:"Error occuring update todo"},error);
  }
}