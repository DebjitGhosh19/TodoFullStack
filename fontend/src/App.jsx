import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todos from './components/Todos'
import Signup from './components/Signup'
import Signin from './components/Signin'
import PageNotFound from './components/PageNotFound'
export const backendUrl="http://localhost:4000"
const App = () => {
  return (
   <>
   <Routes>
      <Route path='/' element={<Todos/>}/>
      <Route path='/Signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin></Signin>}/>
      <Route path='*' element={<PageNotFound/>}/>
   </Routes>
   </>
  )
}

export default App