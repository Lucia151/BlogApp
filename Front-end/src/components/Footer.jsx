import React from 'react'

function Footer() {
  return (
    <>
   <div className="relative mt-8 w-full bg-black px-8 md:px-[500px] flex md:flex-row flex-col space-y-4 md:space-y-0 items-start md:justify-between text-sm md:text-md py-8">
  <div className="flex flex-col text-white">
    <p>Featured Blogs</p>
    <p>Most viewed</p>
    <p>Readers choice</p>
  </div>
  <div className="flex flex-col text-white">
    <p>Forum</p>
    <p>Support</p>
    <p>Recent Posts</p>
  </div>
  <div className="flex flex-col text-white">
    <p>Privacy Policy</p>
    <p>About us</p>
    <p>Terms and conditions</p>
  </div>

  {/* Second code snippet added at the corner */}
  <div className="absolute top-10 right-0 mr-4 ">
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-z">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-200 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-200 rounded col-span-2"></div>
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-200 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    
    <p className="py-2 pb-2 text-center text-white bg-black">All rights reserved @My blog 2024</p>
    </>
    
  )
}

export default Footer