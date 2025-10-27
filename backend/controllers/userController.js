import { User } from "../model/userModel.js";
import { userValidationSchema } from "../validation/validation.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
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
  res.status(200).json({message:"user successfully Created",newUser})
};
export const signin = async (req, res) => {
  
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
  res.status(201).json({
    message:"User successfully login"
  })
};
export const signout=async (req,res) => {
  
}