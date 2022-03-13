import React from 'react'

const Loader = ({size,height,border,className}) => {
    return (
        <div className={`loadingio-spinner-rolling-daoiuzlm498 ${className}`} style={{height:height}}>
            <div className="ldio-gcsicpsikdq">
                <div style={{height:size,width:size,borderWidth:border}} ></div> 
            </div> 
        </div>
    )
}

export default Loader
