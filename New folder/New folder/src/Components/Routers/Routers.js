import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Navbar from '../Common/Navbar';
import Footer from "../Common/Footer"
import LandingPage from '../landingPage/LandingPage';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Header from '../Common/Header';
import Login from '../Pages/Login';
import SignUp from "../Pages/SignUp"
import Admin from '../Pages/Admin';
export default function Routers() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Header/>
                <Routes>

                    <Route path='/' element={<LandingPage />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/signup' element={<SignUp/>} />
                    <Route path='/admin' element={<Admin/>} />
                    <Route path='/about' element={<About/>} />
                    
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
