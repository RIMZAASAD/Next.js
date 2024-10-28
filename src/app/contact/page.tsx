import Link from 'next/link'
import React from 'react'



const Contact = () => {
  return (
    <div className='h-screen w-screen bg-banner bg-cover   '>
      <div className=  'bg-black opacity-80 h-screen w-screen  items-center justify-center  '>
        <div className='hover:cursor-pointer'><h1 className=' text-orange-500 font-sans text-9xl hover:translate-y-1 transition-all duration-300 ease-in-out  '>our contacts <p className=' hover:animate-bounce flex justify-center  m-7 '>👇</p>

          </h1>
          
          
          <div className='text-white font-bold flex gap-4 justify-center '>
       

          <button className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:scale-105 transition-all duration-300 ease-in-out '> <Link href="https://www.linkedin.com/in/rimza-asad-206b332b8/">
           Linkdin</Link></button>
          
           
          <button className='bg-gray-500 text-white font-bold py-2 px-4 rounded  hover:scale-105 transition-all duration-300 ease-in-out'> <Link href="https://github.com/RIMZAASAD">
           Github</Link></button>
          
           
          </div>
          
          </div>

      </div>
    </div>
  )
}

export default Contact
