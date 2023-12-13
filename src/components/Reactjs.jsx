import React from 'react'

import './Reactjs.css'
const Reactjs = () => {
  const downloadReact=()=>{
    let url="./images/reactroadmap.jpg"
    saveAs(url,"React-Roadmap")
  }
  return (
    <div>
      <div className="reacthead"> <h1>React Roadmap</h1></div>
      <div className="reactimage">  
      <img src="./images/reactroadmap.jpg" alt="roadmap" />
      
      </div>

      <div className='reactbutton'>
        <button onClick={downloadReact}> Download</button>
      </div>
      <div className='reactlinks'> 
      <ul>
        <li> <img src="./images/youtube.png" alt="" /><a className='a1' href="https://youtube.com/playlist?list=PLu0W_9lII9agx66oZnT6IyhcMIbUMNMdt&si=0z60dYyRTDaVP2KR" target='blank'> Code With Harry</a></li>
        <li><img src="./images/youtube.png" alt="" /><a className='a2' href="https://youtube.com/playlist?list=PLWKjhJtqVAbkArDMazoARtNz1aMwNWmvC&si=XmB9yHjSdgLZxo5C" target='blank'> Free Code Camp</a></li>

        <li><img src="./images/youtube.png" alt="" /><a className='a3' href="https://youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ&si=BEolBBSumkGQJhp2" target=' blank'> Thapa Technical</a></li>

        <li><img src="./images/youtube.png" alt="" /><a  className='a4'href="https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=fYQ8_OHBujYfQ8fo" target='blank'> Chai aur Code</a></li>

      </ul>

      </div>
    </div>
  )
}

export default Reactjs
