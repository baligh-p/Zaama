import React from 'react'
import {Link} from "react-router-dom"

const CreatePostIcon = ({showAddPost}) => {
    if(showAddPost)
     return (
        <Link to="/create-Post"><div className="lg:hidden fixed bottom-7 z-0 right-5 flex items-center space-x-3 cursor-pointer">
            <div className="rounded-full border-0 border-transparent w-8 h-8 bg-red-400 p-3 shadow-md shadow-neutral-300 box-content">
                <img src="/icons/plus.png" alt="options menu"/>
            </div>
        </div></Link>
    )
    else return ""
}

export default CreatePostIcon