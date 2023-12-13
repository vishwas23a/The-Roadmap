import React from 'react'
import{saveAs} from "file-saver";

import './Reactnative.css'
const Reactnative = () => {
  const downloadReactNative = () => {

   let url= "./images/react-native.jpg"
   saveAs(url,'React-native roadmap');
}

  return (
    <div>
      <div className="reactnativehead"> <h1>React-native Roadmap</h1></div>
      <div className="reactnativeimage">  
      <img src="./images/react-native.jpg" alt="roadmap" />
      
      </div>

      <div className='reactnativebutton'>
        <button  onClick={downloadReactNative }  > Download</button>
      </div>
      <div className='reactnativelinks'> 
      <ul>
        <li> <img src="./images/youtube.png" alt="" /><a className='a1' href="https://youtube.com/playlist?list=PL8p2I9GklV468O2wk-n8Q1KmtMhnHHj4C&si=Xc_vQIWU2EiDGWzy" target='blank'> Code Step By Step</a></li>
        <li><img src="./images/youtube.png" alt="" /><a className='a2' href="https://youtu.be/obH0Po_RdWk?si=-cOSlV8kaQDFxN0M" target='blank'> Free Code Camp</a></li>

        <li><img src="./images/youtube.png" alt="" /><a className='a3' href="https://youtube.com/playlist?list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&si=eUgkXfC9jUWRVWH-" target=' blank'> Hitesh Choudhary</a></li>

        <li><img src="./images/youtube.png" alt="" /><a  className='a4'href="https://youtube.com/playlist?list=PLS1QulWo1RIb_tyiPyOghZu_xSiCkB1h4&si=SUmS42a6rnsp9MMi" target='blank'> ProgrammingKnowledge</a></li>

      </ul>

      </div>
    </div>
  )
}

export default Reactnative
