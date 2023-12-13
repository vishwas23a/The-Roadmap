import React from 'react'

import './Cplus.css'
const Cplus = () => {
  const downloadCplus=()=>{
    let url="./images/cpproadmap.jpg"
    saveAs(url,"C++ Roadmap")
  }
  return (
    <div>
      <div className="Cplushead"> <h1>C++ Roadmap</h1></div>
      <div className="Cplusimage">  
      <img src="./images/cpproadmap.jpg" alt="roadmap" />
      
      </div>

      <div className='Cplusbutton'>
        <button onClick={downloadCplus}  > Download</button>
      </div>
      <div className='Cpluslinks'> 
      <ul>
        <li> <img src="./images/youtube.png" alt="" /><a href="https://youtube.com/playlist?list=PLu0W_9lII9agpFUAlPFe_VNSlXW5uE0YL&si=vRP11wThCkqNRb6S" target='blank'> Code With Harry</a></li>
        <li><img src="./images/youtube.png" alt="" /><a  href="https://youtube.com/playlist?list=PLQgT9G4SVR-LQfix29B8zYvM-Pk-adPG_&si=nFWgeYIpOQXRqBwR" target='blank'> Free Code Camp</a></li>

        <li><img src="./images/youtube.png" alt="" /><a  href="https://youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ&si=D8q9_5kp2gDemT4D" target=' blank'> Apna College</a></li>

        <li><img src="./images/youtube.png" alt="" /><a href="https://youtube.com/playlist?list=PLLYz8uHU480j37APNXBdPz7YzAi4XlQUF&si=5_20eQR68_q-cwqb" target='blank'> Saurabh Shukla</a></li>

      </ul>

      </div>
    </div>
  )
}

export default Cplus
