import React from 'react'

import './Clang.css'
import { saveAs } from 'file-saver'
const Javapage = () => {

 
    const downc=()=>{
      let url="./images/JavaRoadmap.png"
      saveAs(url,"C Roadmap");

    }
  
  return (
    <div>
      <div className="javahead"> <h1>C Language Roadmap</h1></div>
      <div className="image">  
      <img src="./images/JavaRoadmap.png" alt="roadmap" />
      
      </div>

      <div className='javabutton'>
        <button onClick={downc}> Download</button>
      </div>
      <div className='javalinks'> 
      <ul>
        <li> <img src="./images/youtube.png" alt="" /><a className='a1' href="https://youtube.com/playlist?list=PLu0W_9lII9agS67Uits0UnJyrYiXhDS6q&si=kKxmHmQIYClTzQ9y" target='blank'> Code With Harry</a></li>
        <li><img src="./images/youtube.png" alt="" /><a className='a2' href="https://youtube.com/playlist?list=PLWKjhJtqVAbnRT_hue-3zyiuIYj0OlpyG&si=-Xn_ViO6vyKmStQ0" target='blank'> Free Code Camp</a></li>

        <li><img src="./images/youtube.png" alt="" /><a className='a3' href="https://youtube.com/playlist?list=PLfqMhTWNBTe3LtFWcvwpqTkUSlB32kJop&si=zmeIZliIVqMcFvE0" target=' blank'> Apna College</a></li>

        <li><img src="./images/youtube.png" alt="" /><a  className='a4'href="https://youtube.com/playlist?list=PLd3UqWTnYXOmx_J1774ukG_rvrpyWczm0&si=md2A36c9Gx0kD2tQ" target='blank'> Java By Durga Sir</a></li>

      </ul>

      </div>
    </div>
  )
}

export default Javapage
