import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Frontend from './Frontend'

function index() {
    return (
        <>
            <BrowserRouter>
            <Routes>
                <Route index="/*" element={<Frontend />} />
            </Routes>

            </BrowserRouter>

        </>
    )
}

export default index