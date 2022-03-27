import React ,{useEffect} from 'react'
import "../scss/createPost.scss"
const CreatePostStep1 = () => {
  return (
    <div className="font-body min-h-screen h-full w-full flex flex-col justify-center items-center absolute top-0 left-0">
      <div className="lg:w-7/12 xl:w-1/2 relative bg-white shadow-lg shadow-neutral-200 rounded-md ">
        <h3 className='text-center text-3xl font-title py-16 px-10 text-red font-bolder tracking-widest'>Create Post</h3>
      </div>
    </div>
  )
}

export default CreatePostStep1