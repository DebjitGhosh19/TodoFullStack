import jwt from 'jsonwebtoken'
import { User } from '../model/userModel.js'

export const generateToken=async (userId,res) => {
  const token=jwt.sign({userId},process.env.jwt_sectert,{expiresIn:"10d"})
  res.cookie("jwt",token,{
httpOnly:true,
secure:false,
sameSite:"lax",
path:"/"
  })
  await User.findByIdAndUpdate({userId},token)
return token;
}