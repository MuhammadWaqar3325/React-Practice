import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ForgotPassword from './ForgotPassword'
import Login from './Login'
import Register from './Register'

function index() {
  return (
    <>
    <Routes>
        <Route path='/'>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='forgotpassword' element={<ForgotPassword />} />
             
        </Route>
    </Routes>
    </>
  )
}

export default index