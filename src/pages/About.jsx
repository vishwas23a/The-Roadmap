import React from 'react'
import './About.css'
import image3 from '../components/about.jpg'

export default function About() {
  return (
    
    
        <div>
           <div className="upperimage" style={{backgroundImage:`url(${image3})`}}> 
           <div className='headings'>
              <h3 className="shead">Who we are</h3>
              <h1 className="bhead"> Designer, Developers & Thinkers </h1>
              </div>

           </div>
           <div className="downdetail">
            <h3 className='service'>Our Services </h3>
              <div className="alldetail">
<div className="offer"> 
      <h5>We Provide</h5>
      <li>Roadmaps</li>
      <li>Career Counselling</li>
      <li>Documents</li>
      <li>Channel Links</li>
</div>
<div className="Digital"> 
      <h5>Digital</h5>
      <li>Web Developer</li>
      <li>Content Creater</li>
      <li>App Developer</li>

      
</div>
<div className="team"> 
      <h5>Team Members</h5>
      <li>Vishwas Verma</li>

      
</div>


              </div>

           </div>
         </div>
        
  )
}
