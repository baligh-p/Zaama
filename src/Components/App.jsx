import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./Nav"
import Login from "./Login"
import Sign from "./Sign"
import Alert from './Alert' 
import Page404 from "./Page404"
import CreatePostStep1 from './CreatePostStep1'
import CreatePostStep2 from './CreatePostStep2'
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
                    }>
                </Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/sign" element={<Sign/>}></Route>
                <Route path="/create-Post" element={<Nav/>}>
                    <Route index element={<CreatePostStep1/>}></Route>
                    <Route path="step1" element={<CreatePostStep1/>}/>
                    <Route path="step2" element={<CreatePostStep2/>}/>
                </Route>
                <Route path="alert" element={<Alert message="Action"/>}></Route>
                <Route path="*" element={<Page404/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
