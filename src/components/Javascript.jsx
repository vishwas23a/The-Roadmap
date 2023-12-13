import React from 'react'

import './Javascript.css'
const Javascript = () => {
  const downloadJavascript=()=>{
    let url="./images/javascriptroadmap.jpg"
    saveAs(url,"Javascript-Roadmap")
  }
  return (
    <div>
      <div className="javascripthead"> <h1>Javascript Roadmap</h1></div>
      <div className="javascriptimage">  
      <img src="./images/javascriptroadmap.jpg" alt="roadmap" />
      
      </div>

      <div className='javascriptbutton'>
        <button onClick={downloadJavascript}> Download</button>
      </div>
      <div className='javascriptlinks'> 
      <ul>
        <li> <img src="./images/youtube.png" alt="" /><a className='a1' href="https://youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&si=ZZY5Ld-NLXx9azGI" target='blank'> Code With Harry</a></li>
        <li><img src="./images/youtube.png" alt="" /><a className='a2' href="https://youtu.be/jS4aFq5-91M?si=BHFRtfOoHPFm2oN2" target='blank'> Free Code Camp</a></li>

        <li><img src="./images/youtube.png" alt="" /><a className='a3' href="https://youtube.com/playlist?list=PL0rxPh2ovQP_JTqkFUtaZzBXzppx-VSWn&si=h-Ptgl8bJ7P7P2da" target=' blank'> Apna College</a></li>

        <li><img src="./images/youtube.png" alt="" /><a  className='a4'href="https://youtu.be/lI1ae4REbFM?si=i2DJnfquPYs4bfHL" target='blank'> Clever Programmer</a></li>

      </ul>

      </div>
    </div>
  )
}

export default Javascript
