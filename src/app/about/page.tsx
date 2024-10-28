import React from 'react'


const page = () => {
  return (
    <div className='bg-banner h-screen w-screen bg-cover bg-center '>
      <div className='bg-black bg-opacity-80 h-screen w-screen'>
        <div className='  text-7xl  text-center pt-10 courser-pointer'><h1 className='font-sans text-orange-500 hover:animate-pulse'>About Us</h1>
        <h1 className='font-sans text-2xl pt-10 text-white hover:translate-y-1 transition-all duration-300 ease-in-out'>Welcome to Rimza Travels!</h1>
      <p className='text-2xl text-gray-300'>At Rimza Travels, we believe that travel <br /> is not just about reaching a destination—its about the journey, the experiences, and the memories created along the way. Founded in  <kbd className='font-bold text-red-500'>[2020]</kbd>, our mission is to inspire and facilitate unforgettable adventures for travelers around the globe.</p></div>
      <h1 className='font-sans text-2xl pt-9 text-white text-center hover:translate-y-1 transition-all duration-300 ease-in-out '> Our Story</h1>
      <p className=' text-white text-center'>Rimza Travels was born out of a passion for exploration and a desire to share the world’s beauty with others. Our founder, <kbd className='text-red-600 font-san '>[ Rimza.] </kbd>,<br /> started this journey after experiencing the transformative power of travel firsthand. <br /> Since then, we have grown into a dedicated team of travel enthusiasts, committed to providing exceptional service and personalized travel experiences.</p>
      </div>
    </div>
  )
}

export default page