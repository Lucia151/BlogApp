import Comments from "../components/Comments"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'


function PostDetails() {
  return (
    <div>
        <Navbar/>
        <div className="px-8-[200px] mt-8 px-2 md:mx-3">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-black md:text-3xl">Medicine is important</h1>
            <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>
            </div>
            </div>
            <img className='h-48 w-full object-cover rounded-md shadow-xl shadow-blue-gray-900/10 mt-4'
    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    alt="card-image"
  />
        <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>Zizi</p>
            <div className="flex space-x-2">
            <p>1/18/2024</p> 
            <p>14:37</p>
        </div>
        </div>
        
       
        <p className="mx-auto mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
         <p> Categories:</p>
         <div className="flex justify-center items-center space-x-2">
         <div className="bg-blue-400 rounded-lg px-3 py-1 text-white hover:bg-blue-800 transition duration-300 ease-in-out">Technology</div>
         <div className="bg-blue-400 rounded-lg px-3 py-1 text-white hover:bg-blue-800 transition duration-300 ease-in-out">Plants</div>
         <div className="bg-blue-400 rounded-lg px-3 py-1 text-white hover:bg-blue-800 transition duration-300 ease-in-out">Medicine</div>
       </div>

        </div>

         {/* Write a comment */}
         <div className="w-full flex flex-col mt-4 md:flex-row gap-3">
            <input type="text" placeholder="Write a comment " className="md:w-[90%] border-2 outline-none px-4  mt-4 md:mt-0"/>
            <button className="bg-buttonsBlue hover:bg-gray-400 text-sm text-white px-2 rounded-md py-2 md:w-[10%] mt-4 md:mt-0">Add comment</button>
        </div>
        <div className="flex flex-col mt-4">
            <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
            
           <Comments/>
           <Comments/>
        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default PostDetails