import React,{useEffect,useState} from 'react'
import {Link} from "react-router-dom"
import $ from "jquery"
import "../scss/nav.scss"
const Nav = () => {
    /*handle change burger with classes*/ 
    const [lastScroll, setLastScroll] = useState(null)
    const burgerClick=()=>{
        var idBurger=document.getElementById("burger");
        var liste=document.querySelector(".leftNav");
        if(idBurger.getAttribute("class")!=="active z-40")
        {
            idBurger.setAttribute("class", "active z-40");
            liste.style.width="100%";
        }
        else{
             idBurger.setAttribute("class", "Notactive z-40");
             liste.style.width="0";
        }
    }
    /*handle nav state after scrolling*/
    const changeStateNav=()=>{
        const navBar=document.querySelector(".navBar")
        if(window.innerWidth>=1024)
        {
            if(lastScroll>=window.scrollY && window.scrollY>80)
            {
                navBar.style.height=""
                setTimeout(()=>{
                    if(window.scrollY > 80) navBar.style.height="0"
                },2000)
            }
            else 
            {
                if(window.scrollY>80)
                {
                    navBar.style.height="0"
                }
                else 
                {
                    navBar.style.height=""
                }
            }
            setLastScroll(window.scrollY)
        }
    }
    useEffect(() => {
        changeStateNav();/* for changing page or refresh */
    },[])
    useEffect(() => {
        $(window).scroll(changeStateNav)
        return () => {
            $(window).off("scroll")
        }
    })
    return (
        <div className="navBar overflow-hidden transition-all delay-200 duration-300  w-full fixed top-0 left-0 flex items-center justify-between shadow-md h-20 2xl:h-28 2xl:shadow-lg lg:h-16 bg-white">
            <div className="flex items-center lg:justify-center justify-between lg:w-3/12 w-full xl:w-3/12">
                <div className="lg:hidden z-40" onClick={burgerClick} id="burger"><div className="burger h-20 w-20 flex flex-col justify-center items-center"></div></div>
                <h1 className="text-3xl w-full lg:w-auto text-center lg:text-left 2xl:text-6xl text-indigo-600 self-center font-title tracking-wider cursor-pointer">Yenjah?<span className="text-md text-red-500">.tn</span></h1>
            </div>
            <div id="leftNav" className="leftNav transition-all delay-75 duration-300 whitespace-nowrap lg:w-6/12 z-30 bg-white xl:w-5/12 flex flex-col lg:flex-row fixed left-0 top-0 w-0 overflow-hidden lg:static h-full items-center justify-center lg:justify-around font-body 2xl:text-3xl font-semibold text-neutral-600">
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
            <div className="flex xl:w-4/12 lg:w-3/12 w-20 items-center justify-center space-x-14 2xl:space-x-32 xl:space-x-20 2xl:text-3xl font-body font-semibold text-neutral-700 tracking-wider">
                <Link to="/Login" className="hover:text-blue-700 hover:underline underline-offset-2 delay-100 duration-200 decoration-blue-600 text-blue-600">Login</Link>
                <Link to="/Sign" className="hover:text-blue-600 hidden lg:flex hover:bg-white delay-100 duration-200 border-2 text-white bg-blue-600 border-blue-600 py-1.5 px-6 2xl:py-3 2xl:px-8 rounded-sm">Sign</Link>
            </div>
        </div>
    )
}

export default Nav
