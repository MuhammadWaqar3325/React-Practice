import { Routes, Route } from "react-router-dom";
import React from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer";
import Home from "./Home";
import About from './About'
import Contact from "./Contact/Contact";

function index() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact/>} />
                    </Route>
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default index