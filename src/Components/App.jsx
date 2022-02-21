import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./Nav"
import Login from "./Login"
import Sign from "./Sign"
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/sign" element={<Sign/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
