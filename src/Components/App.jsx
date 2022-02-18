import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./Nav"
import Login from "./Login"
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav/>}></Route>*
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
