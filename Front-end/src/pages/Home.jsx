import Footer from "../components/Footer"
import HomePost from "../components/HomePost"
import Navbar from "../components/Navbar"


function Home() {
  return (
    <>
      <Navbar/>
     <div className="px-8 md:px-[200px]">
      <HomePost/>
      {/* <HomePost/>
      <HomePost/> */}
    </div>
  <Footer /> 
  </> 
  )
}

export default Home

