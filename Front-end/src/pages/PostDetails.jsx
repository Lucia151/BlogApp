import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import {BiEdit} from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'


function PostDetails() {
  return (
    <div>
        <Navbar/>
        <div className="px-8-[200px] mt-8">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold text-black md:text-3xl">Medicine is important</h1>
            <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>

            </div>
            </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
        <p>Zizi</p>
            <div className="flex space-x-2">
            <p>1/18/2024</p> 
            <p>14:37</p>

        </div>
        </div>
        <img src ="" className="" alt=""/>
        </div>
        <Footer/>
    </div>
  )
}

export default PostDetails