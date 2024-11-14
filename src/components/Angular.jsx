import React from 'react'
import backLogo from '/images/left-arrow.png'
import Youtube from '/images/youtube.png'
import angular from '/images/reactroadmap.jpg'
import BlogLogo from '/images/blog.png'
import LanguageCard from './LanguageCard'
function Angular() {
  const downloadAnular=()=>{
    let url="/images/reactroadmap.jpg"
    saveAs(url,"Angular-Roadmap")
  }
  return (
    <div>
      <LanguageCard
    Route="/Navbar"
    BackLogo={backLogo}
    download={downloadAnular}
    LangName="Angular"
    LangImg={angular}
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
    programLang="Search about Angular"
    />
    </div>
  )
}

export default Angular
