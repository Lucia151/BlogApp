// import Footer from "./components/Footer"
// import Navbar from "./components/Navbar"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetails from './pages/PostDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import ProfilePost from './components/ProfilePost'
import Profile from './pages/Profile'


function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/write" element={<CreatePost/>}/>
        <Route exact path="/posts/post/:id" element={<PostDetails/>}/>
        <Route exact path="/edit/:id" element={<EditPost/>}/>
        <Route exact path="/profile/:id" element={<Profile/>}/>
        <Route exact path="/profilepost/:id" element={<ProfilePost/>}/>

      </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App