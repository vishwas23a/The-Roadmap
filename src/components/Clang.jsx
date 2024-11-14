import React from 'react'


import { saveAs } from 'file-saver'
import Navbar from './Navbar'
import Clang from '/images/JavaRoadmap.png'
import youtube from '/images/youtube.png'
import BlogLogo from '/images/blog.png'
import BackLogo from '/images/left-arrow.png'
import LanguageCard from './LanguageCard'
const Javapage = () => {

 
    const downc=()=>{
      let url="./images/JavaRoadmap.png"
      saveAs(url,"C Roadmap");

    }
  
  return (
    <>
    <div>

    <LanguageCard 
    Route="/Navbar"
    BackLogo={BackLogo}
    download={downc}
    LangName="C Language"
    LangImg={Clang}
    Youtube={youtube}
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
    programLang="C language"
    />
    




    </div>
    </>
  )
}

export default Javapage
