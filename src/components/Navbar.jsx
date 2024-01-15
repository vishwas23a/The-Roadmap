import React from 'react'
import './Navbar.css'
import image1 from '../components/back.jpg'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const Navigate=useNavigate();
  return (
    <div className='container'>

        <div className='Nav' style={{ backgroundImage:`url(${image1})`}}>
            <div className='icon'>
            <img src="./images/icon.png" alt="logo" />
            </div>
                <div className='list'>
                <ul>
                    <li><a onClick={()=> Navigate('About')}>About</a></li>
                    <li><a  onClick={()=> Navigate('Contact')}>Contact</a> </li>
                </ul>

                </div>

        </div>
      


    </div>
  )
}
