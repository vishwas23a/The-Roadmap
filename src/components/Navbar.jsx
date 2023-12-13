import React from 'react'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className='container'>

        <div className='Nav'>
            <div className='icon'>
            <img src="./images/icon.png" alt="logo" />
            </div>
                <div className='list'>
                <ul>
                    <li><a href="About">About</a></li>
                    <li><a href="Contact">Contact</a> </li>
                </ul>

                </div>

        </div>
      


    </div>
  )
}
