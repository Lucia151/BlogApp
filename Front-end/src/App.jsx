// import Footer from "./components/Footer"
// import Navbar from "./components/Navbar"
import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetails from './pages/PostDetails'


function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/posts/post/:id" element={<PostDetails/>}/>

      </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App