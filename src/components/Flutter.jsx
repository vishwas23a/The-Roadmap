import React from 'react'

import './Flutter.css'
const Flutter = () => {
  const downloadFlutter =()=>{
    let url="./images/flutter.jpg"
    saveAs(url,"Flutter-Roadmap")
  }
  return (
    <div>
      <div className="flutterhead"> <h1>Flutter Roadmap</h1></div>
      <div className="flutterimage">  
      <img src="./images/flutter.jpg" alt="roadmap" />
      
      </div>

      <div className='flutterbutton'>
        <button onClick={downloadFlutter}> Download</button>
      </div>
      <div className='flutterlinks'> 
      <ul>
        <li> <img src="./images/youtube.png" alt="" /><a className='a1' href="https://youtube.com/playlist?list=PLjVLYmrlmjGfGLShoW0vVX_tcyT8u1Y3E&si=kPuBZVfYrRXpYRaa" target='blank'> WsCube Tech</a></li>
        <li><img src="./images/youtube.png" alt="" /><a className='a2' href="https://youtube.com/playlist?list=PLlvhNpz1tBvH4Wn8rMjtscK3l2pXnC9aN&si=AkHZxQC6u6xPhRPf" target='blank'> Code With Dhruv</a></li>

        <li><img src="./images/youtube.png" alt="" /><a className='a3' href="https://youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ&si=OHk2Iu49haTZLZ1s" target=' blank'> Net Ninja</a></li>

        <li><img src="./images/youtube.png" alt="" /><a  className='a4'href="https://youtu.be/VPvVD8t02U8?si=97UD8AobM1OIEG8p" target='blank'> Free Code Camp</a></li>

      </ul>

      </div>
    </div>
  )
}

export default Flutter
