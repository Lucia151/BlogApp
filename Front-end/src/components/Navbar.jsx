import { Link } from 'react-router-dom'
import logo  from '../assets/images/logo.png';

function Navbar() {
  const user=false
  return (
    <div className="z-10 sticky top-0 bg-gray-50 flex items-center justify-between px-6 md:px-[200px] py-1 shadow-md shadow-blue-gray-900/200">
        <Link to="/"><img className='h-20 w-30' src={logo}/></Link>
        
        <div className="flex items-center justify-center space-x-2 md:space-x-4">
            {user?<h3><Link to="/write">Write</Link></h3> :<h3><Link to="/login">Login</Link></h3>}
            {user?<h3>Profile</h3>:<h3><Link to="/register">Register</Link></h3>}

        </div>
    </div>
  )
}

export default Navbar