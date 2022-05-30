import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Footer from '../commen/Footer';
import Navebar from '../commen/Navebar';
import Home from '../Pages/Home';
import Product from '../Pages/Product';
import Shop from '../Pages/Shop';
function Routers() {
    return (
        <>
            <BrowserRouter>
        <Navebar /> 
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/shop' element={<Shop />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Routers;