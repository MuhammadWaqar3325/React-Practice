import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
function index() {
  return (
    <>
    <Routes>
        <Route path='/'>
            <Route index element={<Home />}  />
        </Route>
    </Routes>
    </>
  )
}

export default index