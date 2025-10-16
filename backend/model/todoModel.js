import mongoose, { model } from 'mongoose'

const ToDoSchema=new mongoose.Schema(
 {
   text:{
    type:String,
    require:true
  }
 }
 ,{
  completed:{
    type:Boolean,
    require:true
  }
 }
)

export const ToDo=mongoose.model("Todo",ToDoSchema)