import React from 'react'


import Navbar from './Navbar'
import LanguageCard from './LanguageCard'
import backLogo from '/images/left-arrow.png'
import Youtube from '/images/youtube.png'
import Cpluss from '/images/cpproadmap.jpg'
import BlogLogo from '/images/blog.png'
const Cplus = () => {
  const downloadCplus=()=>{
    let url="/images/cpproadmap.jpg"
    saveAs(url,"C++ Roadmap")
  }
  return (
  <>

  
    <LanguageCard
      Route="/Navbar"
      BackLogo={backLogo}
      download={downloadCplus}
      LangName="C++ Language"
      LangImg={Cpluss}
      Youtube={Youtube}
      YoutuberName1="Apna College"
      YoutubeLink1="https://youtu.be/irqbmMNs2Bo?si=qVjMU-jAURUt-feq"
      YoutuberName2="Code With Harry"
      YoutubeLink2="https://youtu.be/aZb0iu4uGwA?si=SZ7LSb7UbvgH0dTF"
      YoutuberName3="freeCodeCamp"
      YoutubeLink3="https://youtu.be/KJgsSFOSQv0?si=hmpImGFtmEjFvGH3"
      YoutuberName4="Jenny's Lectures CS IT"
      YoutubeLink="https://youtube.com/playlist?list=PLdo5W4Nhv31a8UcMN9-35ghv8qyFWD9_S&si=UG11-hlKTGNrUwmW"
      BlogLogo={BlogLogo}
      Blog1="Geek For Geeks"
      BlogLink1="https://www.geeksforgeeks.org/java/"
      Blog2="JavatPoint"
      BlogLink2="https://www.javatpoint.com/java-tutorial"
      Blog3="W3Schools"
      BlogLink3="https://www.w3schools.com/java/"
      Blog4="Programiz"
      BlogLink4="https://www.programiz.com/java-programming "
    programLang="Search about C++ Language"
      />
  </>
  )
}

export default Cplus
