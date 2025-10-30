import jwt from 'jsonwebtoken'
import User from '../model/userModel.js'
export const authenticate=async (req,res,next) => {
  const token=req.cookies.jwt;
  if(!token){
    return res.status(404).json({message:"Unothorised"});
  }
  try {
    const decoded=jwt.verify(token,process.env.jwt_sectert);
    res.user=await User.findById(decoded.userId)
  } catch (error) {
    return res.status(404).json({message:""+error.message})
  }
  next()
}