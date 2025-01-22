import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import navLogo from '/images/eco-light.png'
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex h-max fixed z-30 items-center bg-white justify-between text-zinc-700 shadow-zinc-700 shadow-lg w-full flex-wrap px-4 md:px-10 gap-5 py-3 ">
        <div className="flex items-center">
          <img className="h-10 w-10" src={navLogo} alt="" />
          <span className="ml-2">The Roadmap</span>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-zinc-100"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <RxCross2 className="h-6 w-6" />
          ) : (
            <IoMenu className="h-6 w-6" />
          )}
        </button>

        {/* Navigation menu */}
        <nav className={`w-full md:w-auto ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row gap-6 md:gap-14 cursor-pointer">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-zinc-950  py-2 md:py-0">
                Home
              </li>
            </NavLink>
            <NavLink to="Page2" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-zinc-950 py-2 md:py-0">
                Roadmaps
              </li>
            </NavLink>
            <NavLink to="About" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-zinc-950  py-2 md:py-0">
                About
              </li>
            </NavLink>
            <NavLink to="Contact" onClick={() => setIsMenuOpen(false)}>
              <li className="hover:text-zinc-950  py-2 md:py-0">
                Feedback
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}