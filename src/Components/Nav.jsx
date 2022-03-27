import React, { useEffect, useState ,useContext} from 'react'
import { Link ,useLocation ,Outlet} from "react-router-dom"
import { useCookies } from "react-cookie"
import {contextApi} from "../index"
import $ from "jquery" 
import axios from "axios"
import "../scss/nav.scss"
import CreatePostIcon from './CreatePostIcon'
const Nav = () => {


    /*test if we are in page post */ 
    const location=useLocation()
    


    /*handle change burger with classes*/
    const [lastScroll, setLastScroll] = useState(null)
    const [userData,setUserData]=useState({})
    const [lastTimeOut,setLastTimeOut]=useState()
    const [showMenu,setShowMenu]=useState(false)
    const burgerClick = () => {
        var idBurger = document.getElementById("burger");
        var liste = document.querySelector("#leftNav");
        if (idBurger.getAttribute("class") !== "active z-40") {
            idBurger.setAttribute("class", "active z-40");
            liste.style.width = "100%";
        }
        else {
            idBurger.setAttribute("class", "Notactive z-40");
            liste.style.width = "0";
        }
    }
    const {url} = useContext(contextApi)

    const [cookie, setCookie] = useCookies()
    const logOut=()=>{
        setCookie("clid","",{maxAge:0})
        window.location.reload()
    }
    const fetchUserData=()=>{
        const id=encodeURIComponent(cookie.clid)
        axios.get(`${url}getUser.php?clid=${id}`).then((res)=>{
            setUserData(res.data)
        })
    }
    useEffect(() => {
        if (cookie.clid !== undefined){
            fetchUserData()
        }
    }, [])
    /*handle nav state after scrolling*/
    const showNavBar=()=>{
       const navBar = document.querySelector(".navBar")
       navBar.style.height = "" 
    }
    const hideNavBar=()=>{
       const navBar = document.querySelector(".navBar")
       navBar.style.height = "0" 
    }
    const changeStateNav = () => {
        clearTimeout(lastTimeOut)
        if (window.innerWidth >= 1024) {
            if (lastScroll >= window.scrollY && window.scrollY > 80) {
                showNavBar()
                const time=setTimeout(() => {
                    if (window.scrollY > 80&& !showMenu) 
                    {
                        hideNavBar()
                    }
                }, 4000)
                setLastTimeOut(time)
            }
            else {
                if (window.scrollY > 80&& !showMenu) {
                    hideNavBar()
                }
                else {
                    showNavBar()
                }
            }
            setLastScroll(window.scrollY)
        }
    }
    /*make navbar visible when we resize screen when navbar not visible in the lg screen*/
    useEffect(() => {
        const handleResizeScreen = () => {
            document.querySelector(".navBar").style.height = ""
        }
        window.addEventListener("resize", handleResizeScreen)
        return () => {
            window.removeEventListener("resize", handleResizeScreen)
        }
    }, [])
    /* for changing page or refresh */
    useEffect(() => {
        changeStateNav();
    }, [])
    useEffect(() => {
        $(window).scroll(changeStateNav)
        return () => {
            $(window).off("scroll",changeStateNav)
        }
    })
    const handleClientThinking=()=>{
        clearTimeout(lastTimeOut)
    }
    return (
        <React.Fragment>
        <div onMouseEnter={handleClientThinking} onMouseLeave={changeStateNav} className="navBar z-10 overflow-hidden transition-all delay-200 duration-300  w-full fixed top-0 left-0 flex items-center justify-between shadow-md h-20 2xl:h-28 2xl:shadow-lg lg:h-16 bg-white">
            <div className="flex items-center lg:justify-center justify-between lg:w-3/12 w-full xl:w-3/12">
                <div className="lg:hidden z-40" onClick={burgerClick} id="burger"><div className="burger h-20 w-20 flex flex-col justify-center lg:hidden items-center"></div></div>
                <h1 className={`text-3xl w-full ${cookie.clid!=undefined&&"mr-20 lg:mr-0"} lg:w-auto text-center lg:text-left 2xl:text-6xl text-indigo-600 self-center font-title tracking-wider cursor-pointer`}>Yenjah?<span className="text-md text-red-500">.tn</span></h1>
            </div>
            {/*for lg*/}
            <div className={`transition-all delay-75 duration-300 whitespace-nowrap ${cookie.clid==undefined?"lg:w-6/12":"lg:w-5/12"}  z-30 bg-white xl:w-5/12 hidden lg:flex flex-col lg:flex-row fixed left-0 top-0 w-0 overflow-hidden lg:static h-full items-center justify-center lg:justify-around font-body 2xl:text-2xl font-semibold text-neutral-600`}>
                <div>
                    <Link to="/" className="hover:text-blue-700 transition-colors delay-100 duration-200">Home</Link>
                </div>
                <div>
                    <Link to="/TopProducts" className="hover:text-blue-700 transition-colors delay-100 duration-200">Top product</Link>
                </div>
                <div>
                    <Link to="/Myposts" className="hover:text-blue-700 delay-100 duration-200">My Posts</Link>
                </div>
                <div>
                    <Link to="/Contact" className="hover:text-blue-700 delay-100 duration-200">Contact us</Link>
                </div>
            </div>
            {/* for small */}
            <div id="leftNav" className="scrollbar-hide min-h-screen overflow-y-scroll lg:hidden transition-all delay-75 duration-300 whitespace-nowrap 
            lg:w-6/12 z-30 bg-white xl:w-5/12 lg:flex-row left-0 top-0 w-0 fixed
            overflow-hidden lg:static h-full font-body 2xl:text-3xl font-semibold text-neutral-600 pb-20">
                <div className="leftNav flex h-5/6 flex-col justify-center items-center text-center w-full">
                    <div>
                        <Link to="/" className="hover:text-blue-700 transition-colors delay-100 duration-200">Home</Link>
                    </div>
                    <div>
                        <Link to="/TopProducts" className="hover:text-blue-700 transition-colors delay-100 duration-200">Top product</Link>
                    </div>
                    <div>
                        <Link to="/Myposts" className="hover:text-blue-700 delay-100 duration-200">My Posts</Link>
                    </div>
                    <div>
                        <Link to="/Contact" className="hover:text-blue-700 delay-100 duration-200">Contact us</Link>
                    </div>
                </div>
                <div className="h-px w-10/12 bg-stone-400 mx-auto my-5"></div>
                {cookie.clid!==undefined&&<div className="w-full flex flex-col justify-center px-12 space-y-7">
                    <div className="flex space-x-3 items-center justify-start">
                        <img src={`./${userData.photo}`} className="rounded-full h-16 w-16" alt="photo profile"/>
                        <h2 className="font-bolder text-neutral-900">{userData.username}</h2>
                    </div>
                    <Link className="w-1/2" to={`/profile/${cookie.clid}`}><h3 className="hover:text-blue-700 delay-100 duration-200 transition-colors">Profile</h3></Link>
                    <Link className="w-1/2" to="/reportBug"><h3 className="hover:text-blue-700 delay-100 duration-200 transition-colors">report a bug</h3></Link>
                    <div onClick={logOut} className="w-1/2 text-red-600 text-lg font-bold cursor-pointer hover:text-red-700">
                        <p>Log out</p>
                    </div>
                </div>}
                
            </div>
            {cookie.clid==undefined
            &&
            (<div className="flex xl:w-4/12 lg:w-3/12 w-20 items-center justify-center space-x-14 2xl:space-x-32 xl:space-x-20 2xl:text-3xl font-body font-semibold text-neutral-700 tracking-wider">
                <Link to="/Login" className="hover:text-blue-700 hover:underline underline-offset-2 delay-100 duration-200 decoration-blue-600 text-blue-600">Login</Link>
                <Link to="/Sign" className="hover:text-blue-600 hidden lg:flex hover:bg-white delay-100 duration-200 border-2 text-white bg-blue-600 border-blue-600 py-1.5 px-6 2xl:py-3 2xl:px-8 rounded-sm">Sign</Link>
            </div>)
            ||
            (<div className="xl:w-4/12 hidden font-body lg:flex lg:w-4/12 w-20 items-center justify-center space-x-8 2xl:space-x-20 tracking-wider">
                {(<Link to="create-Post"><button className="hover:text-red-400 hidden lg:flex hover:bg-white delay-100 duration-200 border-2 text-white bg-red-400 border-red-400 py-1.5 px-4 2xl:py-3 2xl:px-8 2xl:text-2xl rounded-sm">Create Post</button></Link>)}
                <img src="/icons/notification.png" className="w-8 h-8 2xl:w-12 2xl:h-12 lg:flex cursor-pointer box-content hover:rounded-full hover:border-0 hover:bg-stone-200 p-3" alt="notification"/>
                <div>
                    <img src="/icons/fleche.png" onClick={()=>{setShowMenu(!showMenu)}} className="w-10 h-10 2xl:w-14 2xl:h-14 cursor-pointer box-content rounded-full hover:border-0 hover:bg-stone-200 p-1" alt="options"/>
                    <NavDrop userData={userData} show={showMenu}/>
                </div>
            </div>)
            }
        </div>
        <CreatePostIcon></CreatePostIcon>
        <Outlet></Outlet>
        </React.Fragment>
    )
}


const NavDrop=({userData,show})=>{
    const style={
        minHeight:show?"280px":"0" , 
        height:show?"auto":"0" , 
        padding:show?"":0
    }
    const [cookie, setCookie] = useCookies()
    const logOut=()=>{
        setCookie("clid","",{maxAge:0})
        window.location.reload()
    }
    return(
            <div style={style} className="overflow-hidden space-y-2 font-body w-2/6 2xl:w-3/12 border-0 p-3 2xl:p-5 bg-white shadow-lg shadow-neutral-400 rounded-md fixed right-14 2xl:right-40 z-50">
                <Link to={`/profile/${cookie.clid}`}><div className="profile-item hover:bg-stone-200 rounded-md p-2">
                    <img src={`./${userData.photo!="null"&&(userData.photo)||("./icons/user.png")}`} className="image w-16 h-16 2xl:w-20 2xl:h-20 rounded-full flex-none" alt="photo Profile"/>
                    <h2 className="username 2xl:text-3xl text-lg font-bold">{userData.username}</h2>   
                    <p className="text 2xl:text-lg text-xs underline decoration-stone-600 font-semibold">Visit your Profile</p>
                </div></Link>
                <div className="h-px w-11/12 bg-neutral-200 mx-auto"></div>
                <div className="p-2 flex items-center hover:bg-stone-200 space-x-3 rounded-md cursor-pointer w-full">
                    <div className="rounded-full bg-stone-300 box-content p-3 2xl:p-5 flex-none">
                        <img src="./icons/bug.png" className="w-8 h-8 2xl:w-10 2xl:h-10" alt="logout"/>
                    </div>
                    <Link to="reportBug"><div>
                        <p className="text-md 2xl:text-2xl font-semibold leading-0">report a bug</p>
                        <p className="text-xs 2xl:text-lg leading-0">Help us to improve application performance and keep advicing people</p>
                    </div></Link>
                </div>
                <div className="h-px w-11/12 bg-neutral-300 mx-auto"></div>
                <div onClick={logOut} className="p-2 flex items-center hover:bg-stone-200 space-x-3 rounded-md cursor-pointer w-full">
                    <div className="rounded-full bg-stone-300 box-content p-3 2xl:p-5 flex-none">
                        <img src="./icons/logout.png" className="w-8 h-8 2xl:w-10 2xl:h-10" alt="logout"/>
                    </div>
                    <p className="text-md font-semibold 2xl:text-2xl">Log Out</p>
                </div>
            </div>
    )
}
export default Nav