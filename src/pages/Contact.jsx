import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div className='container'>

      <div className='form'>
      <h1 className='contact'>Contact Us</h1>


<form action="#">
  <div className='name'>
      <input type="name" placeholder='Name'  />
      </div>
      <div className='email'>
      <input type="email" placeholder='Email'  /></div>
      <div className='number'>
      <input type="number" placeholder='Contact Number'  /></div>
      <div className='message'>
      <input type="text" placeholder='Message'  /></div>
    
      <button className='button3'> Submit</button>
      
      

</form>
</div>

        </div>
  )
}
