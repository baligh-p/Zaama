import React from 'react'

const Alert = ({message}) => {
    return (
        <div className="w-full select-none h-screen fixed top-0 left-0 bg-neutral-50/70 flex flex-col items-center justify-center">
            <div className="pb-5 box-content lg:w-5/12 lg:h-4/6 2xl:h-3/5 md:h-auto h-4/6 xl:w-1/3 md:w-8/12 w-full flex flex-col items-center lg:rounded-md border-0 border-transparent shadow-lg bg-white font-body shadow-neutral-300">
                <div className="w-full 2xl:py-24 flex items-center justify-center bg-blue-500 lg:rounded-t-md mb-4 py-5">
                    <img src="./icons/notillu.png" className="w-56 h-56 2xl:w-80 2xl:h-96" alt="images for notification pop up"/>
                </div>
                <p className="my-auto text-lg 2xl:text-3xl w-11/12 break-words text-center">{message}</p>
                <button className="mt-8 border-2 border-blue-600 bg-blue-600 text-white 2xl:text-2xl w-24 h-8 2xl:w-40 2xl:h-14 hover:bg-white hover:text-blue-600 delay-75 duration-150 rounded-sm text-md">Hide</button>
            </div>
        </div>
    )
}

export default Alert
