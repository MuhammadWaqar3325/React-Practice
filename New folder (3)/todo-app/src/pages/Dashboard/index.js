import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Todo from './Todo'

function index() {
    return (
        <>
            <Routes>
                <Route path='/'>
                    <Route index  element={<Home/>} />
                    <Route path='todo' element={<Todo/>} />
                </Route>
            </Routes>
        </>
    )
}

export default index