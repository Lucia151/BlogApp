import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import postImage from '../assets/images/HeroImage.jpg'
import { BsSearch } from "react-icons/bs";


function HomePost() {

  //   return (
  //     <div className="w-full flex mt-8 space-x-2 ">
  //       <div className="w-[35%] h-[-200px] flex justify-center items-center">
  //         <img src={postImage} alt="" className="h-full w-full object-cover"/>
  //         </div>

  //         <div className=" flex flex-col w-[65%]">
  //           <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
  //             Medicine is important
  //           </h1>
  //           <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
  //             <p>Zizi</p>
  //             <div className="flex space-x-2">
  //             <p>1/18/2024</p> 
  //             <p>14:35</p>

  //             </div>
  //           </div>
  //           <p className="text">Plants are the eukaryotes that form the kingdom Plantae; they are predominantly photosynthetic. This means that they obtain their energy from sunlight,</p>
  //       </div >
  //     </div>
  //   )
  // }

  return (
    <div className='flex flex-col py-10 justify-center'>
      <div className='flex justify-center'>
        <div className="flex justify-center bg-white p-1 items-center space-x-0 shadow-md shadow-blue-gray-900/200 w-200 outline-gray rounded-xl">
          <p><BsSearch /></p>
          <input className=" outline-none px-3 " placeholder="search a post" type="text"></input>
          <button className='bg-buttonsBlue text-white px-5 rounded-md'>Search</button>
        </div>
      </div>
      <div className="flex flex-wrap gap-10 justify-center">
        <Card className="mt-6 w-80  bg-cardsGray pl-10 pr-10 py-10 justify-center items-center rounded-md">
          <CardHeader color="blue-gray" className="relative h-30">
            <img className='h-25 w-60 rounded-md shadow-xl shadow-blue-gray-900/10 '
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody className="m-2 flex-col">
            <Typography variant="h5" className="m-2  text-headingsBlue font-bold w-full text-center">
              Medicine is important
            </Typography>
            <Typography className='text-sm'>
              {/* The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.  */}
              Plants are the eukaryotes that form the kingdom Plantae; they are predominantly photosynthetic. This means that they obtain their energy from sunlight <a href='#'><span className='text-buttonsBlue'>..read more</span></a>
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-between  gap-1 pt-2 w-full">
            <div className='font-semibold text-sm'>Zizile Ngcem</div>
            <div className='text-xs text-inputOutlineGray'>
              <p >24 may 23</p>
              <p>19:09</p>
            </div>


          </CardFooter>
        </Card>

        <Card className="mt-6 w-80  bg-cardsGray pl-10 pr-10 py-10 justify-center items-center rounded-md">
          <CardHeader color="blue-gray" className="relative h-30">
            <img className='h-25 w-60 rounded-md shadow-xl shadow-blue-gray-900/10 '
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody className="m-2 flex-col">
            <Typography variant="h5" className="m-2  text-headingsBlue font-bold w-full text-center">
              Medicine is important
            </Typography>
            <Typography className='text-sm'>
              {/* The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.  */}
              Plants are the eukaryotes that form the kingdom Plantae; they are predominantly photosynthetic. This means that they obtain their energy from sunlight <a href='#'><span className='text-buttonsBlue'>..read more</span></a>
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-between  gap-1 pt-2 w-full">
            <div className='font-semibold text-s'>Zizile Ngcem</div>
            <div className='text-xs text-inputOutlineGray'>
              <p >24 may 23</p>
              <p>19:09</p>
            </div>


          </CardFooter>
        </Card>
        <Card className="mt-6 w-80  bg-cardsGray pl-10 pr-10 py-10 justify-center items-center rounded-md">
          <CardHeader color="blue-gray" className="relative h-30">
            <img className='h-25 w-60 rounded-md shadow-xl shadow-blue-gray-900/10 '
              src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
              alt="card-image"
            />
          </CardHeader>
          <CardBody className="m-2 flex-col">
            <Typography variant="h5" className="m-2  text-headingsBlue font-bold w-full text-center">
              Medicine is important
            </Typography>
            <Typography className='text-sm'>

              Plants are the eukaryotes that form the kingdom Plantae; they are predominantly photosynthetic. This means that they obtain their energy from sunlight <a href='#'><span className='text-buttonsBlue'>..read more</span></a>
            </Typography>
          </CardBody>
          <CardFooter className="flex justify-between  gap-1 pt-2 w-full">
            <div className='font-semibold text-s'>Zizile Ngcem</div>
            <div className='text-xs text-inputOutlineGray'>
              <p >24 may 23</p>
              <p>19:09</p>
            </div>


          </CardFooter>
        </Card>

        <a href='#'><button className='bg-buttonsBlue text-white px-10  py-2 rounded-full mt-10'>More articles</button></a>

      </div>


    </div>
  );
}




export default HomePost