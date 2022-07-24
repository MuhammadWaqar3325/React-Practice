import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import Frontend from "./Frontend"
import Authentiction from './Authentication'
import Dashboard from './Dashboard'

function index() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/*" element={<Frontend />} />
      <Route path="authentication/*" element={<Authentiction />} />
      <Route path="dashboard/*" element={<Dashboard/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default index