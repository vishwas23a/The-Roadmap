import React from "react";
import "./Page2.css";
import { useState } from "react";
import cThumb from "/images/c.png"
import csharpThumb from "/images/csharp.png"
import cPlusThumb from "/images/cplus.png"
import javaThumb from "/images/java.png"
import pythonThumb from "/images/python.png"
import javascriptThumb from "/images/javascript.png"
import flutterThumb from "/images/flutter.png"
import reactThumb from "/images/react.png"
import reactnativeThumb from "/images/reactnative.png"
import angularThumb from "/images/angular.png"
import Navbar from "./Navbar";
import Card from "./Card";

export default function Page2() {
  const [show, setShow]=useState(true)

  return (
    <div >
      <Navbar/>
      <div className=" w-screen   flex justify-around mt-5 font-bold text-2xl text-slate-800">
    <h1 className="cursor-pointer hover:shadow-xl p-3   rounded-2xl   " onClick={()=>setShow(true)}> Languages </h1>
    <h1 className="text-4xl font-semibold">|</h1>
    <h1 className="cursor-pointer hover:shadow-xl p-3   rounded-2xl   " onClick={()=>setShow(false)}> Frameworks</h1>

      </div>
      {
        show===true?
        <div className="w-screen h-max justify-evenly  p-8 mt-8 gap-20 flex flex-wrap">

        <Card
         Heading="C language"
         message="Learn About C Language "
         thumbnail={cThumb}
         Go="/Clang"
          />
        <Card
         Heading="C++"
         message="Learn About C++ Language "
         thumbnail={cPlusThumb}
         Go="/Cplus"
          />
        <Card
         Heading="Java"
         message="Learn About Java Language "
         thumbnail={javaThumb}
         Go="/Javapage"
          />
        <Card
         Heading="Python"
         message="Learn About Python Language "
         thumbnail={pythonThumb}
         Go="/Python"
          />
        <Card
         Heading="Javascript"
         message="Learn About Javascript Language "
         thumbnail={javascriptThumb}
         Go="/Javascript"
          />
        <Card
         Heading="C Sharp"
         message="Learn About C Sharp Language "
         thumbnail={csharpThumb}
         Go="/Csharp"
          />





        </div>: 
        <div className="w-screen h-max justify-evenly  p-8 mt-8 gap-20 flex flex-wrap">

<Card
         Heading="Flutter"
         message="Learn About Flutter Framework"
         thumbnail={flutterThumb}
         Go="/Flutter"
          />
<Card
         Heading="React"
         message="Learn About React Framework "
         thumbnail={reactThumb}
         Go="/Reactjs"
          />
<Card
         Heading="React Native"
         message="Learn About React Native "
         thumbnail={reactnativeThumb}
         Go="/Reactnative"
          />
<Card
         Heading="Angular"
         message="Learn About Angular Framework"
         thumbnail={angularThumb}
         Go="/Angular"
          />



        </div>
             }


     

     
    </div>
  );
}
