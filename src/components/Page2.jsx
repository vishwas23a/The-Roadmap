import React from "react";
import "./Page2.css";

import { useNavigate } from "react-router-dom";

export default function Page2() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navbar2">
      <h2 className="mainhead">  <a href="/">The Roadmap</a> </h2>
      </div>

      <div className="langhead1">
        <h2> Programming Language</h2>
      </div>

      <div className="pagebody">
        <div className="col1">
          <div className="sec1">
            <div className="langlogo1">
              <img src="./images/java.png" alt="logoo1" />
            </div>
            <div className="langname1">
              <h3>Java</h3>
            </div>
            <div className="langbutton1">
              <button onClick={() => navigate("/javapage")}> Find</button>
            </div>
          </div>
          <div className="sec2">
            <div className="langlogo2">
              <img src="./images/c.png" alt="logoo1" />
            </div>
            <div className="langname2">
              <h3>C Language </h3>
            </div>
            <div className="langbutton2">
              <button onClick={()=>navigate("/Clang")}> Find</button>
            </div>
          </div>

          <div className="sec3">
            <div className="langlogo3">
              <img src="./images/cplus.png" alt="logoo1" />
            </div>
            <div className="langname3">
              <h3> C++ </h3>
            </div>
            <div className="langbutton3">
              <button onClick={()=> navigate("/Cplus")}> Find</button>
            </div>
          </div>
        </div>
        <div className="col2">
          <div className="sec4">
            <div className="langlogo4">
              <img src="./images/python.png" alt="logoo1" />
            </div>
            <div className="langname4">
              <h3>Python</h3>
            </div>
            <div className="langbutton4">
              <button onClick={()=> navigate("/Python")}>  Find</button>
            </div>
          </div>
          <div className="sec5">
            <div className="langlogo5">
              <img src="./images/javascript.png" alt="logoo1" />
            </div>
            <div className="langname5">
              <h3> Java Script</h3>
            </div>
            <div className="langbutton5">
              <button onClick={()=> navigate("/Javascript")}> Find</button>
            </div>
          </div>

          <div className="sec6">
            <div className="langlogo6">
              <img src="./images/csharp.png" alt="logoo1" />
            </div>
            <div className="langname6">
              <h3> C# </h3>
            </div>
            <div className="langbutton6">
              <button onClick={()=> navigate("/Csharp")}> Find</button>
            </div>
          </div>
        </div>
        <div className="langhead2">
          
          <h2> Frameworks</h2>
        </div>

        <div className="col3">
          <div className="sec7">
            <div className="langlogo7">
              <img src="./images/react.png" alt="logoo1" />
            </div>
            <div className="langname7">
              <h3>React Js</h3>
            </div>
            <div className="langbutton7">
              <button onClick={()=> navigate("/Reactjs")}> Find</button>
            </div>
          </div>
          <div className="sec8">
            <div className="langlogo8">
              <img src="./images/reactnative.png" alt="logoo1" />
            </div>
            <div className="langname8">
              <h3> React Native</h3>
            </div>
            <div className="langbutton8">
              <button onClick={()=> navigate("/Reactnative")}> Find</button>
            </div>
          </div>

          <div className="sec9">
            <div className="langlogo9">
              <img src="./images/flutter.png" alt="logoo1" />
            </div>
            <div className="langname9">
              <h3> Flutter </h3>
            </div>
            <div className="langbutton9">
              <button onClick={()=> navigate("/Flutter")}> Find</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
