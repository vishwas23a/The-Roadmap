import React, { useState } from "react";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

function LanguageCard(props) {
  const { LangImg, LangName, download,Youtube,YoutubeLink1,YoutubeLink2 , YoutubeLink3,YoutubeLink4,YoutuberName1 , YoutuberName2,YoutuberName3,YoutuberName4,Blog1,BlogLink1,
    BlogLink2,BlogLink3,BlogLink4,Blog2,Blog3,Blog4,BlogLogo,BackLogo,Route } = props;
  const [view, setView] = useState(true);
  return (
    <>
    
      <div className="mt-5">
        <h1 className="text-center font-bold text-4xl  text-zinc-700  ">
          {" "}
        <NavLink to={Route}>  <img src={BackLogo} className=" ml-20 h-10 absolute w-10" alt="" /></NavLink>
          {LangName}
        </h1>
        <div>
          <div className="flex justify-around m-5 ">
            <h1
              className=" cursor-pointer hover:shadow-xl p-3   rounded-2xl font-semibold text-2xl text-slate-800"
              onClick={() => setView(true)}
            >
              Roadmap
            </h1>
            <h1 className="text-3xl text-slate-700 ">|</h1>
            <h1
              className=" cursor-pointer hover:shadow-xl p-3   rounded-2xl font-semibold text-2xl text-slate-800"
              onClick={() => setView(false)}
            >
              Information
            </h1>
          </div>
          {view === true ? (
            <div>
              <div className="mt-5 h-4/5 w-full flex flex-col items-center justify-center ">
                <img src={LangImg} className="h-4/5 w-4/5" alt="" />
              </div>
              <div className=" flex ml-40">
                <button
                  onClick={download}
                  class="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  type="button"
                >
                  Download
                </button>
              </div>
            </div>
          ) : (
            <div>info</div>
          )}
        </div>

        <div className="w-full h-64  flex justify-evenly flex-wrap bg-gradient-to-r from-slate-200 to-gray-500">
          <div className="items-center text-slate-800 h-full flex text-3xl font-bold">
            <h1>The Roadmap</h1>
          </div>
          <div className="mt-5  font-semibold text-2xl ">
            <h1 className="text-slate-800">Youtube</h1>
            <ul className="text-sm flex flex-col gap-6 mt-4 text-center">
                <li className="hover:text-slate-700 text-slate-900 cursor-pointer"><a href={YoutubeLink1} target="_blank" className="flex  gap-2">{YoutuberName1}
                <img className="h-6 w-6" src={Youtube} alt="" />  </a></li>
                <li className="hover:text-slate-700 text-slate-900 cursor-pointer"><a href={YoutubeLink2} target="_blank" className="flex  gap-2"> {YoutuberName2}
                <img className="h-6 w-6" src={Youtube} alt="" />  </a></li>
                <li className="hover:text-slate-700 text-slate-900 cursor-pointer"><a href={YoutubeLink3} target="_blank" className="flex  gap-2"> {YoutuberName3}
                <img className="h-6 w-6" src={Youtube} alt="" />  </a></li>
                <li className="hover:text-slate-700 text-slate-900 cursor-pointer"><a href={YoutubeLink4} target="_blank" className="flex  gap-2">{YoutuberName4}
                <img className="h-6 w-6" src={Youtube} alt="" />  </a></li>
            </ul>
          </div>
          <div className="mt-5  text-slate-800 font-semibold text-center text-2xl">
            <h1>Documentation</h1>

            <ul  className="text-sm flex flex-col gap-6 mt-4 text-center">
            <li className="hover:text-slate-700 text-slate-900 cursor-pointer"><a href={BlogLink1} target="_blank" className="flex  gap-2">{Blog1}
            <img className="h-6 w-6" src={BlogLogo} alt="" />  </a></li>
            <li className="hover:text-slate-700 text-slate-900 cursor-pointer"><a href={BlogLink2} target="_blank" className="flex  gap-2">{Blog2}
            <img className="h-6 w-6" src={BlogLogo} alt="" />  </a></li> <li className="hover:text-slate-700 text-slate-900 cursor-pointer"><a href={BlogLink3} target="_blank" className="flex  gap-2">{Blog3}
            <img className="h-6 w-6" src={BlogLogo} alt="" />  </a></li> <li className="hover:text-slate-700 text-slate-900 cursor-pointer"><a href={BlogLink4} target="_blank" className="flex  gap-2">{Blog4}
            <img className="h-6 w-6" src={BlogLogo} alt="" />  </a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default LanguageCard;
