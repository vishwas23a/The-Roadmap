import React from 'react'

import LanguageCard from './LanguageCard'
import backLogo from '/images/left-arrow.png'
import Youtube from '/images/youtube.png'
import java from '/images/JavaRoadmap.png'
import BlogLogo from '/images/blog.png'
import { saveAs } from 'file-saver'
const Javapage = () => {
  const downloadJava=()=>{
let url="/images/JavaRoadmap.png"
saveAs(url,"Java Roadmap")
  }
  return (
   <>
     <LanguageCard
    Route="/Navbar"
    BackLogo={backLogo}
    download={downloadJava}
    LangName="Java Language"
    LangImg={java}
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
    programLang="Search about Java"
    />
  
   </>
  )
}

export default Javapage
