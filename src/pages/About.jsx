import React from 'react'

import image3 from '../components/About.jpg'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    
    
        <div>
           <div className='fixed w-screen'><Navbar/></div> 
         
            <img className='fixed -z-10  opacity-80 w-screen' src={image3} alt="" /> 
            <div className=" overflow-auto h-max w-screen   ">
           <div className='text-center mt-64 text-black font-bold'>
              <h3 className="text-4xl  ">Who we are</h3>
              <h1 className="text-4xl"> Designer, Developers & Thinkers </h1>
              </div>

        
           <div className=" bg-gray-600 bg-opacity-40  mt-32 py-2 ">
            <h3 className='text-3xl text-center  font-bold text-indigo-950 ' >Our Services </h3>
              <div className="flex  justify-between px-20 py-10   ">
<div className="flex flex-col gap-1 text-indigo-950 text-xl font-semibold"> 
      <h5 className='font-semibold '>We Provide</h5>
      <li>Roadmaps</li>
      <li>Career Counselling</li>
      <li>Documents</li>
      <li>Channel Links</li>
</div>
<div className="flex flex-col gap-1 text-indigo-950 text-xl font-semibold"> 
      <h5 className='font-semibold'>Digital</h5>
      <li>Web Developer</li>
      <li>Content Creater</li>
      <li>App Developer</li>

      
</div>
<div className="flex flex-col gap-1 text-indigo-950 text-xl font-semibold"> 
      <h5 className='font-semibold'>Team Members</h5>
      <li>Vishwas Verma</li>

      
</div>
</div>


              </div>

           </div>
         </div>
        
  )
}
