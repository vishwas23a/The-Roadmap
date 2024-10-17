import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';


function Card(props) {
    const {message,Heading,thumbnail,Go}=props;
  return (
   
    <div>
 
      

<div class="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg shadow-zinc-500">
  <div class="relative mx-4 -mt-6 h-48 p-4 flex justify-center overflow-hidden rounded-xl bg-slate-50  text-white shadow-lg  border-zinc-100 border shadow-zinc-500  ">
  <img src={thumbnail} className='w-4/5 h-full' alt="" />
  </div>
  <div class="p-6">
    <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {Heading}
    </h5>
    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
   {message}
    </p>
  </div>
  <div class="p-6 pt-0">
   <NavLink to={Go}><button data-ripple-light="true" type="button" class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
      Search
    </button></NavLink> 
  </div>
</div>

    </div>
  )
}

export default Card
