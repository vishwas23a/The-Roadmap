import React from 'react'
import './Body.css'
import {useNavigate} from 'react-router-dom'

export default function Body() {
    const navigate =useNavigate()
  return (
    <div>
    <div className='background'>
    <div className='body'>

<h5>Welcome To</h5>
<h1> The Roadmap </h1>
<h5 className='h4'> Want to Learn Something</h5>

<button className='button1' onClick={()=> navigate('Page2')}> Let's Get Started <img src="./images/logo1.png" alt="logo" /> </button>


</div>
    </div>

    </div>
  )
}
