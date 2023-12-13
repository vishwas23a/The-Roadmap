import React from 'react'

import './Python.css'
const Python = () => {
  const downloadPython=()=>{
    let url="./images/pythonroadmap.jpg"
    saveAs(url,"Python-Roadmap")
  }
  return (
    <div>
      <div className="pythonhead"> <h1>Python Roadmap</h1></div>
      <div className="pythonimage">  
      <img src="./images/pythonroadmap.jpg" alt="roadmap" />
      
      </div>

      <div className='pythonbutton'>
        <button onClick={downloadPython}> Download</button>
      </div>
      <div className='pythonlinks'> 
      <ul>
        <li> <img src="./images/youtube.png" alt="" /><a  href="https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=FY6qlYjaeS2n9mvF" target='blank'> Code With Harry</a></li>
        <li><img src="./images/youtube.png" alt="" /><a  href="https://youtube.com/playlist?list=PLWKjhJtqVAbnqBxcdjVGgT3uVR10bzTEB&si=FNBw6btwwrJX-ei-" target='blank'> Free Code Camp</a></li>

        <li><img src="./images/youtube.png" alt="" /><a  href="https://youtu.be/XnSasPR2KJI?si=K4nlwSlmM5dw7Z3Z" target=' blank'> College Wallah</a></li>

        <li><img src="./images/youtube.png" alt="" /><a  href="https://youtube.com/playlist?list=PLjVLYmrlmjGcQfNj_SLlLV4Ytf39f8BF7&si=t2rHHBi5l4quIqmr" target='blank'> WsCube Tech
</a></li>

      </ul>

      </div>
    </div>
  )
}

export default Python
