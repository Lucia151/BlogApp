import React from 'react'

function ProfilePost() {
  return (
  //   <div className="hover:shadow-2xl gap-4 w-full flex mt-8 space-x-2 ">
  //     <img className='h-40 w-60 object-cover rounded-md shadow-xl shadow-blue-gray-900/10 mt-4'
  //   src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  //   alt="card-image"
  // />

  //       <div className="flex flex-col w-[65%]">
  //         <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
  //           Medicine is important
  //         </h1>
  //         <div className="flex mb-2 text-sm font-semibold text-gray-400 items-center justify-between md:mb-4">
  //           <p>Zizi</p>
  //           <div className="flex space-x-2">
  //           <p>1/18/2024</p> 
  //           <p>14:35</p>

  //           </div>
  //         </div>
  //         <p className="text">Plants are the eukaryotes that form the kingdom Plantae; they are predominantly photosynthetic. This means that they obtain their energy from sunlight,</p>
  //     </div >
  //   </div>
  <div className="gap-2 w-full flex flex-col md:flex-row mt-8 space-x-2">
  <img
    className='h-40 w-60 object-cover rounded-md shadow-xl shadow-blue-gray-900/10 mt-4'
    src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
    alt="card-image"
  />

  <div className="flex flex-col w-full md:w-[65%]">
    <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      Medicine is important
    </h1>
    <div className="flex mb-2 text-sm font-semibold text-gray-400 items-center justify-between md:mb-4">
      <p>Zizi</p>
      <div className="flex px-12 space-x-2">
        <p>1/18/2024</p>
        <p>14:35</p>
      </div>
    </div>
    <p className="text">Plants are the eukaryotes that form the kingdom Plantae; they are predominantly photosynthetic. This means that they obtain their energy from sunlight,</p>
  </div>
</div>

  )
}

export default ProfilePost