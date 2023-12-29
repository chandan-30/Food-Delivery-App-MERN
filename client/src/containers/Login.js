import React, { useState } from 'react'
import { LoginBg, Logo } from '../assets'
import { LoginInput } from '../components'
import { FaEnvelope,FaLock,FcGoogle } from '../assets/icons';
import { motion } from 'framer-motion';
import { buttonClick } from '../animations';
const Login = () => {

  const [userEmail, setUserEmail] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <div className='w-screen h-screen relative overflow-hidden flex'>
      {/* background Image */}
      <img
        src={LoginBg}
        className='w-full h-full object-cover absolute top-0 left-0'
        alt=""
      />
      {/* content box */}
      <div className='flex flex-col items-center bg-lightOverlay w-[80%] md:w-508 h-full z-10 backdrop-blur-lg p-4 px-4 py-12 gap-6'>
        {/* Top logo section */}
        <div className="flex items-center justify-start gap-4 px-6 py-8 w-full">
          <img src={Logo} className="w-8" alt="" />
          <p className="text-headingColor font-semibold text-2xl">Indian Oven</p>
        </div>

        {/* welcome text */}
        <p className="text-3xl font-semibold text-headingColor">Welcome Back</p>
        <p className="text-xl text-textColor -mt-6">
          { isSignUp ? 'Sign Up' : 'Sign In' } in with following
        </p>

        {/* input section */}
        <div className=" w-full flex flex-col items-center justify-center gap-6 px-4 md:px-12 py-4">
          <LoginInput
            placeHolder={"Email Here"}
            icon={<FaEnvelope className="text-xl text-textColor" />}
            inputState={userEmail}
            inputStateFunc={setUserEmail}
            type="email"
            isSignUp={isSignUp}
          />

          <LoginInput
            placeHolder={"Password Here"}
            icon={<FaLock className="text-xl text-textColor" />}
            inputState={password}
            inputStateFunc={setPassword}
            type="password"
            isSignUp={isSignUp}
          />

          { isSignUp && (
            <LoginInput
              placeHolder={"Confirm Password Here"}
              icon={<FaLock className="text-xl text-textColor" />}
              inputState={confirmPass}
              inputStateFunc={setConfirmPass}
              type="password"
              isSignUp={isSignUp}
            />
          )}

          { !isSignUp ? 
            (
              <p>
                Doesn't have an account:{" "}
                <motion.button {...buttonClick} 
                  className='text-red-600 font-semibold cursor-pointer bg-transparent underline underline-offset-2' 
                  onClick={() => setIsSignUp(true)}
                >
                  Create One
                </motion.button>
              </p>
            ) : (
              <p>
                Already have an account:{" "}
                <motion.button
                  {...buttonClick}
                  className='text-red-600 font-semibold cursor-pointer bg-transparent underline underline-offset-2'
                  onClick={() => setIsSignUp(false)}
                >
                  Sign-in here
                </motion.button>
              </p>
            )
          }

          {/* button section */}
          {isSignUp ? (
            <motion.button
              {...buttonClick}
              className="w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150"
              // onClick={signUpWithEmailPass}
            >
              Sign Up
            </motion.button>
          ) : (
            <motion.button
              {...buttonClick}
              // onClick={signInWithEmailPass}
              className="w-full px-4 py-2 rounded-md bg-red-400 cursor-pointer text-white text-xl capitalize hover:bg-red-500 transition-all duration-150"
            >
              Sign in
            </motion.button>
          )}
        </div>

        <div className="flex items-center justify-between gap-16">
          <div className="w-24 h-[1px] rounded-md bg-white"></div>
          <p className="text-white">or</p>
          <div className="w-24 h-[1px] rounded-md bg-white"></div>
        </div>

        <motion.div
          {...buttonClick}
          className="flex items-center justify-center px-20 py-2 bg-lightOverlay backdrop-blur-md cursor-pointer rounded-3xl gap-4"
          // onClick={loginWithGoogle}
        >
          <FcGoogle className="text-3xl" />
          <p className="capitalize text-base text-headingColor">
            Sign in with Google
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Login