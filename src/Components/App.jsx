import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./Nav"
import Login from "./Login"
import Sign from "./Sign"
import Alert from './Alert' 
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                <React.Fragment>
                    <Nav/>
                    <p>qsqsd</p>
                    <p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p><p>qsqsd</p>
                </React.Fragment>
            }></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/sign" element={<Sign/>}></Route>
                <Route path="/alert" element={<Alert message="Action"/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
