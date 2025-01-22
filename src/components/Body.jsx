import React from 'react'
import {NavLink, Outlet, useNavigate} from 'react-router-dom'
import image1 from '/images/RoadBack.jpg'
import logo from '/images/roadmap.png'

export default function Body() {
  return (
    <div>
      <div className="flex justify-center min-h-screen w-full relative">
        <img 
          className="h-full w-full fixed inset-0 object-cover" 
          src={image1} 
          alt="Background" 
          loading='lazy' 
        />
        <div className="h-11/12 w-11/12 bg-slate-50 border border-white bg-opacity-10 rounded-2xl z-10 my-4 md:my-8 flex flex-col"> 
          <div className="px-4 md:px-8 pt-4 md:pt-6 text-white flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
            <div>
            <img src={logo} alt="" className="h-12 mx-auto w-12 " style={{ filter: 'invert(1)' }} />
            </div>
            <ul className="flex z-20 justify-center sm:justify-end gap-4 md:gap-6">
              <NavLink to="Navbar/About">
                <li className="border text-white hover:bg-blue-950 border-white px-3 py-1 rounded-3xl text-sm md:text-base">
                  About
                </li>
              </NavLink>  
              <NavLink to="Navbar/Contact">
                <li className="px-3 py-1 cursor-pointer text-blue-950 border border-white bg-white rounded-3xl hover:bg-slate-200 text-sm md:text-base">
                  Feedback
                </li>
              </NavLink> 
            </ul>
          </div>

          <div className="flex-grow flex flex-col items-center justify-center px-4 md:px-8 -mt-10 md:mt-0">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-slate-200 text-center">
              The Roadmap<br />Of Your Future
            </h1>
            <div className="mt-8 md:mt-10">
              <NavLink to="Navbar">
                <button
                  type="submit"
                  className="flex justify-center gap-2 items-center mx-auto shadow-xl text-base md:text-lg bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 md:px-4 py-2 overflow-hidden border-2 rounded-full group"
                >
                  Lets Go
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                    viewBox="0 0 16 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                      className="fill-gray-800 group-hover:fill-gray-800"
                    />
                  </svg>
                </button>
              </NavLink>
            </div>
            <div className="mt-8 md:mt-10 mb-6">
              <ul className="text-center text-xs md:text-sm text-slate-100 space-y-2">
                <li>Innovation</li>
                <li>Implementation</li>
                <li>Impact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}