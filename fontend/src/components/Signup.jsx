import React, { useState } from 'react'

const Signup = () => {
   const [userName, setuserName] = useState("")
    const [email, setemail] = useState("")
     const [password, setpassword] = useState("")
  return (
    <duv className="flex justify-center  items-center h-screen w-full bg-gray-100">
    <div className=' flex-col bg-white shadow-2xl rounded-md p-10  w-[400px]   '>
      <h1 className='text-center text-2xl font-bold mb-4'>Signup</h1>
      <div className='flex flex-col mb-4'>
        <label className='text-xl font-bold mb-1' htmlFor="username">Username</label>
        <input className='bg-white p-2 rounded-sm border border-gray-400 focus:bg-blue-100' type="text" placeholder='Enter your name'  />
      </div>
      <div className='flex flex-col mb-4'>
        <label  className='text-xl font-bold mb-1' htmlFor="email">Email</label>
        <input className='focus:bg-blue-100 bg-white p-2 rounded-sm border border-gray-400'  type="email" placeholder='Enter your email'  />
      </div>
      <div className='flex flex-col mb-4'>
        <label  className='text-xl font-bold mb-1 ' htmlFor="password">Password</label>
        <input className='focus:bg-blue-100 bg-white p-2 rounded-sm border border-gray-400'  type="password" placeholder='Enter your password'  />
      </div>
      <button className='mb-4 bg-blue-500 w-full p-2 rounded-2xl text-white text-xl font-semibold cursor-pointer hover:bg-blue-800'>Signup</button>
      <p className='text-center font-semibold'>Already have an account? <span className='text-blue-600 cursor-pointer font-semibold '>Login</span></p>
    </div>
    </duv>
  )
}

export default Signup