import React from 'react'
import { LoginBg, Logo } from '../assets'

const Login = () => {
  return (
    <div className='w-screen h-screen relative overflow-hidden flex'>
      {/* background Image */}
      <img
        src={LoginBg}
        className='w-full h-full object-cover absolute top-0 left-0'
        alt=""
      />
      {/* content box */}
      <div className='flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-sm'>
        {/* Top logo section */}
        <div className="flex items-center justify-start gap-4 px-6 py-8 w-full">
          <img src={Logo} className="w-8" alt="" />
          <p className="text-headingColor font-semibold text-2xl">Indian Oven</p>
        </div>
      </div>
    </div>
  )
}

export default Login