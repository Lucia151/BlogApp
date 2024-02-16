import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Login() {
  return (
    <>
      {/* <div className="flex items-center justify-between px-6 md:px-[200px] py-1 shadow-md shadow-blue-gray-900/200">
  <Link to="/"><img className='h-20 w-30' src={logo} /></Link>
  <h3 className="hidden md:block"><Link to="/register">Register</Link></h3>
</div> */}
<Navbar/>
<div className="flex flex-col md:flex-row justify-evenly md:flex-wrap items-center h-[70vh] border-2 border-inputOutlineGray m-10">

  <div className="md:w-1/2 p-3">
    <p className='font-bold text-xl mb-5 text-center'>Step into the blogging landscape of tomorrow!</p>
    
    <p>Enter a world where pcreativity has no limits, and ideas soar beyond horizons, where innovation, passion, and endless possibilities converge.</p>
    
  </div>

  <form className="flex flex-col justify-center items-center space-y-4 w-full md:w-[50%] p-4">
    <h1 className="text-xl font-bold text-left">Log in to your account</h1>
    <input className="w-full px-4 py-2 border-2 border-inputOutlineGray outline-0" type="text" placeholder="Enter your email" />
    <input className="w-full px-4 py-2 border-2 border-inputOutlineGray outline-0" type="password" placeholder="Enter your password" />
    <button className="w-full px-3 py-2 text-lg font-bold text-white bg-buttonsBlue rounded-lg hover:bg-gray-500 hover:text-black">Log in</button>

    <div className="flex justify-center items-center space-x-4">
      <p>New here?</p>
      <p className="text-buttonsBlue underline hover:text-black"><Link to="/register">Register</Link></p>
    </div>
  </form>
</div>

      <Footer/>
    </>

  )
}

export default Login