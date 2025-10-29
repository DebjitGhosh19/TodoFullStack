import { generateToken } from "../jwt/token.js";
import { User } from "../model/userModel.js";
import { userValidationSchema } from "../validation/validation.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
 try {
   // Validate incoming data
   const { userName, email, password } = req.body;
   const { error } = userValidationSchema.validate(
     { userName, email, password },
     { abortEarly: false }
   );
 
   if (error) {
     return res.status(400).json({
       success: false,
       message: "Validation Failed",
       errors: error.details.map((err) => err.message),
     });
   }
   const existingUser = await User.findOne({ email });
   if (existingUser) {
     return res.status(400).json({ message: "User already exist" });
   }
   const hashPassword = bcrypt.hashSync(password, 10);
   const newUser = await new User({
     userName,
     email,
     password: hashPassword,
   });
   await newUser.save();
   if (newUser) {
    const token= await generateToken(newUser._id,res)
     res.status(200).json({message:"user successfully Created",newUser,token})
   }
 
 } catch (error) {
    res.status(400).json({message:"Error while signup",error})
 }
};
export const signin = async (req, res) => {
  
    try {
      const {email, password } = req.body;
      if(!email||!password){
        return res.status(400).json({message:"Give the required filed"})
      }
    const user=await User.findOne({email})
     if (!user) {
      return res.status(400).json({message:"User not exist"})
    }
    const hashpassword=user.password
    const ismatch=bcrypt.compareSync(password, hashpassword); 
    if (!ismatch) {
      return res.status(400).json({message:"Invalid credentials"})
    }
  const token =await generateToken(user._id,res);
    res.status(200).json({message:"user login successfully",token})
    } catch (error) {
        res.status(400).json({message:"Error while login",error})
    }
};
export const signout=async (req,res) => {
 try {
  res.clearCookie("jwt",{
    path:'/'
  })
  res.status(200).json({message:"user  logout successfully"})
 } catch (error) {
  res.status(400).json({message:"Error while logout",error})
 }
}