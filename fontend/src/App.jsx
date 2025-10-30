import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todos from './components/todos'
import Signup from './components/Signup'
import Signin from './components/Signin'

const App = () => {
  return (
   <>
   <Routes>
      <Route path='/' element={<Todos/>}/>
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin></Signin>}/>
   </Routes>
   </>
  )
}

export default App