import mongoose from "mongoose";
export const DbConnect=()=>{
    try {
      mongoose.connect(process.env.DB_URL)
        console.log("Db connected ");
        
      
    } catch (error) {
      console.log("Db not connected",error);
      
    }
}