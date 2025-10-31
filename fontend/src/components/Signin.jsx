import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { backendUrl } from '../App';
const Signin = () => {
    const [email, setemail] = useState("")
       const [password, setpassword] = useState("")
       const navigate=useNavigate()
       const onSubmitHandelar=async(e)=>{
        e.preventDefault()
        try {
          const response=await axios.post(backendUrl+"/user/api/signin",{email,password},{
            withCredentials:"true",
          })
        } catch (error) {
          
        }
       }
  return (
     <div className="flex justify-center  items-center h-screen w-full bg-gray-100">
    <div className=' flex-col bg-white shadow-2xl rounded-md p-10  w-[400px]   '>
      <h1 className='text-center text-2xl font-bold mb-4'>Signin</h1>
      
      <div className='flex flex-col mb-4'>
        <label  className='text-xl font-bold mb-1' htmlFor="email">Email</label>
        <input className='focus:bg-blue-100 bg-white p-2 rounded-sm border border-gray-400'  type="email" placeholder='Enter your email' value={email} onChange={(e)=>setemail(e.target.value)}/>
      </div>
      <div className='flex flex-col mb-4'>
        <label  className='text-xl font-bold mb-1 ' htmlFor="password">Password</label>
        <input className='focus:bg-blue-100 bg-white p-2 rounded-sm border border-gray-400'  type="password" placeholder='Enter your password' value={password} onChange={(e)=>setpassword(e.target.value)}  />
      </div>
      <button onClick={()=>onSubmitHandelar} className='mb-4 bg-blue-500 w-full p-2 rounded-2xl text-white text-xl font-semibold cursor-pointer hover:bg-blue-800'>Signin</button>
      <p className='text-center font-semibold'>New user? <span className='text-blue-600 cursor-pointer font-semibold ' onClick={()=>navigate("/signup")}>sign</span></p>
    </div>
    </div>
  )
}

export default Signin