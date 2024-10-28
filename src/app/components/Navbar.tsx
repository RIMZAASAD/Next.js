import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className=' bg-banner bg-cover h-screen w-screen   '>
      
    <nav className='bg-black  h-full w-full opacity-80 flex justify-between  p-4'>
     <h1 className=' uppercase font-bold  text-orange-400 m-4 font-sans'  >Rimza.</h1 >
   <div className='text-7xl font-sans  flex gap-10 items-center    '><h1 className='justify-center text-white   '>Rimza Travelrs
    <p className='text-gray-400  hover:animate-pulse'>Travels The <span className='text-orange-500'>  World</span> </p></h1></div>
      <ul className='text-gray-300 flex justify-center p-4 gap-10 '>
       
        <li className='hover:translate-y-1 transition-all duration-300 ease-in-out'><Link href="/home">Home</Link></li>
        <li className='hover:translate-y-1 transition-all duration-300 ease-in-out'><Link href="/about">About</Link></li>
        <li className='hover:translate-y-1 transition-all duration-300 ease-in-out'><Link href="/contact">Contact</Link></li>
        <li className='hover:translate-y-1 transition-all duration-300 ease-in-out'><Link href="/travels">Travels</Link></li>
      </ul>

    </nav>
    </div>
    
  )
}

export default Navbar
