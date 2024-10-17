import React from 'react'

import navLogo from '/images/eco-light.png'
import { NavLink, Outlet} from 'react-router-dom'

export default function Navbar() {

  return (
    <div >
      
      <div class=" flex h-max items-center bg-white justify-between text-zinc-700 shadow-zinc-700 shadow-lg  w-full flex-wrap  px-10 gap-5 py-3 rounded-lg">
    <div class="flex items-center">
        <img class="h-10 w-10" src={navLogo} alt=""/>
        The Roadmap
    </div>
    <nav>
        <ul class="flex gap-14 cursor-pointer    ">
          <NavLink to="/"> <li class="hover:text-zinc-950 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ">Home </li></NavLink> 
          <NavLink to="Page2"> <li class="hover:text-zinc-950 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 ">Roadmaps </li></NavLink> 
          <NavLink to="About">    <li class="hover:text-zinc-950 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">About</li></NavLink>
          <NavLink to="Contact">     <li class="hover:text-zinc-950 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">Feedback</li></NavLink>
        </ul>
    </nav>
  </div>
  <Outlet/>
    </div>
      


  )
}
