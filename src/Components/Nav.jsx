import React from 'react'
import {Link} from "react-router-dom"
const Nav = () => {
    return (
        <div className="flex items-center justify-between shadow-md h-14 2xl:h-28 2xl:shadow-lg lg:h-16">
            <div className="flex items-center justify-around relative xl:right-24 w-3/12 xl:w-4/12">
                <h1 className="text-3xl 2xl:text-6xl text-indigo-600 font-title tracking-wider">Zaama<span className="text-md text-red-500">.tn</span></h1>
            </div>
            <div className="w-6/12 xl:w-4/12 flex items-center justify-around font-body 2xl:text-3xl font-semibold text-neutral-700">
                <div>
                    <Link to="/" className="hover:text-blue-700 transition-colors delay-100 duration-200">Home</Link>
                </div>
                <div>
                    <Link to="/AddPosts" className="hover:text-blue-700 transition-colors delay-100 duration-200">Add Posts</Link>
                </div>
                <div>
                    <Link to="/Myposts" className="hover:text-blue-700 delay-100 duration-200">My Posts</Link>
                </div>
                <div>
                    <Link to="/Contact" className="hover:text-blue-700 delay-100 duration-200">Contact us</Link>
                </div>
            </div>
            <div className="flex xl:w-4/12 w-3/12 items-center justify-center space-x-14 2xl:space-x-32 xl:space-x-20 2xl:text-3xl font-body font-semibold text-neutral-700 tracking-wider">
                <Link to="/Login" className="hover:text-blue-700 hover:underline underline-offset-2 delay-100 duration-200 decoration-blue-600 text-blue-600">Login</Link>
                <Link to="/Sign" className="hover:text-blue-600 hover:bg-white delay-100 duration-200 border-2 text-white bg-blue-600 border-blue-600 py-1 px-4 rounded-sm">Sign</Link>
            </div>
        </div>
    )
}

export default Nav
