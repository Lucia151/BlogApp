import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png';
import Footer from '../components/Footer';

function Register() {
  return (
    <>
   
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-[200px] py-4 shadow-md shadow-blue-gray-900/200">
      <Link to="/"><img className='h-20 w-30' src={logo} /></Link>
        <h3><Link to="/login">Login</Link></h3>
        </div>
        <div className="bg-gray-100 mt-5 ">
    <form className="w-full flex justify-center items-center h-[70vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
            <h1 className="text-xl font-bold text-left">Create an account</h1>
            <input className="w-full px-4 py-2 border-2 border-inputOutlineGray outline-0" type="password" placeholder="Enter your username"/>
            <input className="w-full px-4 py-2 border-2 border-inputOutlineGray outline-0" type="text" placeholder="Enter your email"/> 
            <input className="w-full px-4 py-2 border-2 border-inputOutlineGray outline-0" type="password" placeholder="Enter your password"/>  
            <button className="w-full px-4 py-4 text-lg font-bold text-white bg-buttonsBlue rounded-lg hover:bg-gray-500 hover:text-black">Register</button>
            <div className="flex justify-center items-center space-x-4">
             <p>Already have an account?</p>
             <p className="text-buttonsBlue hover:text-black"><Link to="/login">Login</Link></p>

            </div>

        </div>

    </form>
    
    </div>
    <p className="py-2 pb-2 text-center text-white bg-black"></p>
    <p className="py-2 pb-2 text-center text-white bg-black">All rights reserved @My blog 2024</p>
    </>

  )
}

export default Register