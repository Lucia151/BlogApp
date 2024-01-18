import React from 'react'

function HomePost() {
  return (
    <div className="w-full flex mt-8 space-x-2">
      <div className="w-[35%] h-[-200px] flex justify-center items-center">
        <img src="" alt="" className="h-full w-full object-cover"/>
        </div>

        <div className=" flex flex-col w-[65%]">
          <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
            Medicine is important
          </h1>
          <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
            <p>Zizi</p>
            <div className="flex space-x-2">
            <p>1/18/2024</p> 
            <p>14:35</p>

            </div>
          </div>
          <p className="text">Plants are the eukaryotes that form the kingdom Plantae; they are predominantly photosynthetic. This means that they obtain their energy from sunlight,</p>
      </div >
    </div>
  )
}

export default HomePost