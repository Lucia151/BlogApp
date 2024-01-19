import React from 'react'
 
function Login() {
  return (
    <div className="w-full flex justify-center items-center h-[70vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
            <h1 className="text-xl font-bold text-left">Log in to your account</h1>
            <input className="w-full px-4 py-2 border-2 border-black outline-0" type="text" placeholder="Enter your email"/> 
            <input className="w-full px-4 py-2 border-2 border-black outline-0" type="password" placeholder="Enter your password"/> 
            <button className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black">Log in</button>

        </div>

    </div>
  )
}

export default Login