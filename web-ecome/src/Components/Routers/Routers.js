import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import Navbar from "../common/Navbar";
import React from 'react'
import SignUp from "../signUp/SignUp";
import Login from "../login/Login";
import Hotitem from "../HotProduct/Hotitem";
export default function Routers() {
  return (
    <>

      <BrowserRouter>
        <Navbar/>
        {/* <LandingPages /> */}
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/HotProduct" element={<Hotitem />} />
        </Routes>
        <Footer/>
      </BrowserRouter>







      {/* <Navbar />
      <Home />
      <Firebase />

      <Footer /> */}
    </>
  )
}
