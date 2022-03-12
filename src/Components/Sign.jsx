import React,{useRef,useContext,useState} from 'react'
import {Advertise} from "./Login"
import {Link} from "react-router-dom"
import {contextApi} from "../index"
import axios from "axios"
import {UseTrueString,UseTrueLength,UseTrueEmail,UseTrueOneWord,UsePerfectPassword} from "./custom/stringComponent"
const Sign = () => {
    return (
        <div className="min-h-screen w-full flex">
            <Advertise/>
            <FormSign/>
        </div>
    )
}


const FormSign=()=>{
    /*useState*/ 
    const [errorMessage, setErrorMessage] = useState([])
    /*useRef*/
    const keepMeLoggedInput=useRef(null)
    const inputUserName=useRef(null) 
    const inputPassword=useRef(null)
    const inputConfirme=useRef(null)
    const inputEmail=useRef(null)
    const inputImage=useRef(null)
    /* handle input state */

    const {url} = useContext(contextApi)

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

    /*handle submit of form */ 
    const handleSubmit=(e)=>{
        e.preventDefault()
        let submit = true;
        setErrorMessage([])
        var errorTable=[]
        if(!UseTrueOneWord(inputUserName.current.value))
        {
           submit=false
           errorTable.push("Username should contains one word")
        }
        if(UseTrueLength(inputUserName.current.value)<3)
        {
            submit=false 
            errorTable.push("Username should contains at least 3 caracteres")
        }
        if(!UseTrueEmail(inputEmail.current.value))
        {
            submit=false 
            errorTable.push("Invalide Email")
        }
        if(UsePerfectPassword(inputPassword.current.value).length>0)
        {
            submit=false 
            errorTable=[...errorTable,...UsePerfectPassword(inputPassword.current.value)]
        }
        setErrorMessage(errorTable)
    }

    return(
        <form className=" ml-auto flex flex-col justify-center 2xl:space-y-20 lg:space-y-10 space-y-14 items-center lg:w-7/12 w-full font-body my-10">
            <h4 className="text-3xl font-bold 2xl:text-6xl">Sign In</h4>
            <p className="text-sm w-8/12 lg:w-full 2xl:text-2xl text-center text-stone-400 relative bottom-5">Create an account and join advices world</p>
            {/*username */}
            <div className="flex flex-col lg:w-7/12 w-10/12 md:w-8/12">
                <label className="text-stone-600 h-0 cursor-text translate-y-4 relative left-1 transition-all duration-200" onClick={()=>{inputUserName.current.focus()}}>Username</label>
                <input type="text" ref={inputUserName} 
                className="border-2 indent-1 outline-none py-3 border-stone-400 text-lg rounded-sm"
                onFocus={handleFocusInput} onBlur={handleBlurInput}/>
            </div>
            {/*email*/}
            <div className="flex flex-col lg:w-7/12 w-10/12 md:w-8/12">
                <label className="text-stone-600 h-0 cursor-text translate-y-4 relative left-1 transition-all duration-200" onClick={()=>{inputEmail.current.focus()}}>Email</label>
                <input type="text" ref={inputEmail} 
                className="border-2 indent-1 outline-none py-3  border-stone-400 text-lg rounded-sm"
                onFocus={handleFocusInput} onBlur={handleBlurInput}/>
            </div>
            {/*password*/}
            <div className="flex flex-col lg:w-7/12 w-10/12 md:w-8/12">
                <label className="text-stone-600 h-0 cursor-text translate-y-4 relative left-1 transition-all duration-200" onClick={()=>{inputPassword.current.focus()}}>Password</label>
                <input type="password" ref={inputPassword} 
                className="border-2 indent-1 outline-none py-3  border-stone-400 text-lg rounded-sm"
                onFocus={handleFocusInput} onBlur={handleBlurInput}/>
                <p className="text-xs tracking-wide text-stone-500 mt-3">Password should contains at least 6 caracters:
                    <span className="text-red-500"> letter</span> , <span className="text-red-500">Number</span> , <span className="text-red-500 whitespace-nowrap">special character</span></p>
            </div>
            {/*confirm password */}
            <div className="flex flex-col lg:w-7/12 w-10/12 md:w-8/12">
                <label className="text-stone-600 h-0 cursor-text translate-y-4 relative left-1 transition-all duration-200" onClick={()=>{inputConfirme.current.focus()}}>Confirm Password</label>
                <input type="password" ref={inputConfirme} 
                className="border-2 indent-1 outline-none py-3  border-stone-400 text-lg rounded-sm"
                onFocus={handleFocusInput} onBlur={handleBlurInput}/>
            </div>
            {/*photo de profil*/}
            <input type="file" ref={inputImage} className="hidden"/>
            <div className="lg:w-6/12 xl:w-4/12 w-10/12 md:w-4/12 cursor-pointer" onClick={()=>{inputImage.current.click()}}>
               <h5 className="w-full text-sm 2xl:text-lg">Add profile photo (<span className="text-green-500">Not required</span>)</h5>
               <div className="border-2 border-stone-400 w-full h-60 2xl:h-80 flex flex-col justify-center items-center">
                    <img className="h-20 w-20" src="./icons/addPhoto.png" alt="add photo of profile"/>
               </div>
            </div>
            {/*keep me logged*/}
            <div className="lg:w-7/12 md:w-8/12 w-10/12 flex items-center space-x-3">
                <input type="checkbox" ref={keepMeLoggedInput} className="cursor-pointer"/>
                <label onClick={()=>{keepMeLoggedInput.current.click()}} className="text-sm 2xl:text-xl text-stone-500 cursor-pointer">Keep me Logged</label>
            </div>
            {/*btn submit*/}
            
            {errorMessage.map((message)=>{
                return (
                    <div className="lg:w-7/12 md:w-8/12 w-10/12 flex items-center" key={message}>
                        <img src="./icons/cross.png" className="w-4 h-4 mr-3" alt="exception message"/>
                        <p className="text-xs 2xl:text-lg text-red-500 font-semibold tracking-widest w-full">{message}</p>
                    </div>
                )
            })}
            <button onClick={handleSubmit} className="border-2 border-blue-600 rounded-sm bg-blue-600 2xl:py-3 py-2 px-7 text-white text-lg 2xl:text-2xl lg:w-7/12 md:w-8/12 w-10/12 hover:bg-white hover:text-blue-600 transition-all duration-200 delay-100">Create</button>
            <div className="w-full flex justify-center items-center bg-stone-200" >
                <p className="text-md border-0 py-3 text-center 2xl:text-3xl w-full z-0">Already have an Account ? <Link to="/login" className="text-blue-600 cursor hover:underline underline-offset-1 underline-blue-600">Log in</Link></p>
            </div>
        </form>
    )
}
export default Sign
