import React,{useRef,useContext,useState} from 'react'
import {Link,useNavigate} from "react-router-dom"
import {contextApi} from "../index"
import Loader from "./Loader"
import axios from "axios"
import {useCookies} from "react-cookie"
import {UseTrueString} from "./custom/stringComponent"
const Login = () => {
    return (
        <div className="min-h-screen lg:h-screen  w-full flex">
            <Advertise/>
            <LoginForm/>
        </div>
    )
}

export const Advertise=()=>{
    return (
        <div className="z-10 lg:flex flex-col justify-around items-center hidden w-5/12 shadow-lg shadow-neutral-800 rounded-tr-lg rounded-br-lg h-screen fixed top-0 left-0 bg-neutral-900">
            <h1 className="text-white font-bold text-5xl 2xl:text-7xl font-title tracking-widest">Yenjah?<span className=" text-blue-500">.tn</span></h1>
            <p className="text-white font-body text-left text-xl 2xl:text-3xl w-11/12  leading-loose">Need help on product or you can help others choose good products,<br/>
            do not hesitate to create your account and navigate the commercial world ,<br/>
            and become a pro in your field.</p>
        </div>
    )
}

const LoginForm=()=>{
    const {url}=useContext(contextApi)
    /*navigate*/ 
    const navigate=useNavigate()
    /*cookies*/ 
    const [cookie,setCookie]=useCookies()
    /*useState*/ 
    const [loading,setLoading]=useState(false)
    const [errorMessage,setErrorMessage]=useState(false)
    /*useRef*/
    const keepMeLoggedInput=useRef(null)
    const inputUserName=useRef(null) 
    const inputPassword=useRef(null)
    /* handle input state */
    const handleFocusInput=(e)=>{
        if(e.target.value=="")
        {
            const label=e.target.parentNode.childNodes[0]
            label.style.left="" 
            label.style.transform="translateY(0)"
            label.style.fontSize="12px"
            e.target.style.borderColor="#2563eb"
            label.style.color="#2563eb"
        }
    }
    const handleBlurInput=(e)=>{
        const label=e.target.parentNode.childNodes[0]
        if(e.target.value=="")
        {
            label.style.left="" 
            label.style.transform="translateY(16px)"
            label.style.fontSize=""
            e.target.style.borderColor=""
            label.style.color=""
        }
    }
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true)
        await axios.get(`${url}login.php?un=${encodeURIComponent(UseTrueString(inputUserName.current.value))}&pwd=${encodeURIComponent(inputPassword.current.value)}`).then((res)=>{
            setLoading(false)
            if(res.data!=null)
            {
                setCookie("clid",res.data.idProfil,{maxAge:60*60*24*3})
                navigate("/")
            }
            else 
            {
                setErrorMessage(true)
            }
        })
    }
    return (
        <form className="ml-auto flex flex-col justify-center 2xl:space-y-20 lg:space-y-10 space-y-14 items-center lg:w-7/12 w-full font-body my-10">
            <h4 className="text-3xl font-bold 2xl:text-6xl">Log in</h4>
            <p className="text-sm w-8/12 lg:w-full 2xl:text-2xl text-center text-stone-400 relative bottom-5">Enter your Username and Password to join advices world</p>
            <div className="flex flex-col lg:w-7/12 w-10/12 md:w-8/12">
                <label className="text-stone-600 h-0 cursor-text translate-y-4 relative left-1 transition-all duration-200" onClick={()=>{inputUserName.current.focus()}}>Username</label>
                <input type="text" ref={inputUserName} 
                className="border-2 indent-1 outline-none py-3 border-stone-400 text-lg rounded-sm"
                onFocus={handleFocusInput} onBlur={handleBlurInput}/>
            </div>
            <div className="flex flex-col lg:w-7/12 w-10/12 md:w-8/12">
                <label className="text-stone-600 h-0 cursor-text translate-y-4 relative left-1 transition-all duration-200" onClick={()=>{inputPassword.current.focus()}}>Password</label>
                <input type="password" ref={inputPassword} 
                className="border-2 indent-1 outline-none py-3  border-stone-400 text-lg rounded-sm"
                onFocus={handleFocusInput} onBlur={handleBlurInput}/>
            </div>
            <div className="lg:w-7/12 md:w-8/12 w-10/12 flex items-center space-x-3">
                <input type="checkbox" ref={keepMeLoggedInput} className="cursor-pointer"/>
                <label onClick={()=>{keepMeLoggedInput.current.click()}} className="text-sm 2xl:text-xl text-stone-500 cursor-pointer">Keep me Logged</label>
            </div>
            {errorMessage&&
            <div className="flex items-center lg:w-7/12 md:w-8/12 w-10/12">
                <img src="./icons/cross.png" className="w-4 h-4 mr-3" alt="exception message"/>
                <p className="text-xs 2xl:text-lg text-red-500 font-semibold tracking-widest w-full">invalid address and password conbining</p>
            </div>}
            {loading&&(<Loader size="50px" border="7px"/>)||(<button onClick={handleSubmit} className="border-2 border-blue-600 rounded-sm bg-blue-600 2xl:py-3 py-2 px-7 text-white text-lg 2xl:text-2xl lg:w-7/12 md:w-8/12 w-10/12 hover:bg-white hover:text-blue-600 transition-all duration-200 delay-100">Log in</button>)}
            <div className="lg:w-7/12 w-full flex justify-center items-center lg:absolute bottom-0 bg-stone-200" >
                <p className="text-md border-0 py-3 text-center 2xl:text-3xl w-full z-0">Don't have an Account ? <Link to="/sign" className="text-blue-600 cursor hover:underline underline-offset-1 underline-blue-600">Sign</Link></p>
            </div>
        </form>
    )
}
export default Login