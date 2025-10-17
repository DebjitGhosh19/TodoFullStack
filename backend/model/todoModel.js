
import mongoose, { model } from 'mongoose'

const ToDoSchema=new mongoose.Schema(
 {
   text:{
    type:String,
    require:true
  }
 
 ,
  completed:{
    type:Boolean,
    require:true
  },
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
    require:true
  }
 }
)

export const ToDo=mongoose.model("Todo",ToDoSchema)