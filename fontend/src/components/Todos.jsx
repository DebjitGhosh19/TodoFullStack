import React from 'react'

const Todos = () => {
  return (
       <div>
      <div className='bg-gray-200 mx-auto w-1/3 my-10 p-10 text-center '>
        <h1 className='text-center font-bold text-2xl mb-4'>Todo App</h1>
        <div className='flex justify-between'>
          <input type="text" placeholder='Add a new todo' className='w-full border p-2'/>
          <button className='bg-blue-600 text-white px-2 py-1 cursor-pointer hover:bg-blue-800 '>Add</button>
        </div>
        <p className='mt-6'>0 todos remaining</p>
        <button className='bg-red-500 text-white py-2 px-4 rounded-md text-center mt-4 cursor-pointer'>Logout</button>
      </div>
    </div>
    
  )
}

export default Todos