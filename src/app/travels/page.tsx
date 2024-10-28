import React from 'react'

const page = () => {
  return (
   
    <div className='h-screen w-screen  bg-cover flex flex-col md:flex-row bg-gray-400  '>
     
      <div className='   h-1/2 md:h-full w-full md:w-6/12 hover:coursor-pointer  '>
      <div className='bg-banner2 bg bg-center bg-cover h-full rounded-s-3xl hover:scale-[0.85] duration-70'></div></div>
  
      <div className='   h-1/2 md:h-full w-full md:w-6/12 border-b-{1px} '>
      <div className='bg-banner3 bg bg-center bg-cover h-full  rounded-s-3xl  hover:scale-[0.80] duration-100'></div></div>
  
      <div className='   h-1/2 md:h-full w-full md:w-6/12 '>
      <div className='bg-banner4 bg bg-center bg-cover h-full  rounded-s-3xl  hover:scale-[0.75] duration 150'></div></div>
  
    </div>
  )
}

export default page