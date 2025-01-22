import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PromptCard from "./PromptCard";

function LanguageCard({
  LangImg,
  LangName,
  download,
  Youtube,
  YoutubeLink1,
  YoutubeLink2,
  YoutubeLink3,
  YoutubeLink4,
  YoutuberName1,
  YoutuberName2,
  YoutuberName3,
  YoutuberName4,
  Blog1,
  BlogLink1,
  BlogLink2,
  BlogLink3,
  BlogLink4,
  Blog2,
  Blog3,
  Blog4,
  BlogLogo,
  BackLogo,
  Route,
  programLang
}) {
  const [view, setView] = useState(true);

  return (
    <div className="min-h-screen pb-8">
      {/* Header Section */}
      <div className="relative px-4 sm:px-6 pt-5">
        <NavLink to={Route} className="absolute left-4 sm:left-6 top-7">
          <img src={BackLogo} className="h-8 w-8 sm:h-10 sm:w-10" alt="Back" />
        </NavLink>
        <h1 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl text-zinc-700">
          {LangName}
        </h1>
      </div>

      {/* Toggle Section */}
      <div className="flex justify-center items-center gap-4 sm:gap-8 my-5 px-4">
        <button
          className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl transition-all duration-300 text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 ${
            view ? "bg-slate-100 shadow-lg" : "hover:bg-slate-50"
          }`}
          onClick={() => setView(true)}
        >
          Roadmap
        </button>
        <span className="text-2xl sm:text-3xl text-slate-700">|</span>
        <button
          className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl transition-all duration-300 text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 ${
            !view ? "bg-slate-100 shadow-lg" : "hover:bg-slate-50"
          }`}
          onClick={() => setView(false)}
        >
          Information
        </button>
      </div>

      {/* Content Section */}
      {view ? (
        <div className="px-4 sm:px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <img 
              src={LangImg} 
              className="w-full h-auto object-contain" 
              alt={LangName}
            />
            <div className="mt-4 flex justify-start sm:justify-center">
              <button
                onClick={download}
                className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-400/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 hover:-translate-y-0.5"
                type="button"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-4 sm:px-6 md:px-8">
          <div className="h-[calc(100vh-250px)] border-2 rounded-lg overflow-hidden">
            <div className="h-full overflow-auto">
              <PromptCard searchLang={programLang} />
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <div className="mt-8 w-full bg-gradient-to-r from-slate-200 to-gray-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex justify-center sm:justify-start items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
              The Roadmap
            </h1>
          </div>

          {/* YouTube Links */}
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4">
              Youtube
            </h2>
            <ul className="space-y-4">
              {[
                { name: YoutuberName1, link: YoutubeLink1 },
                { name: YoutuberName2, link: YoutubeLink2 },
                { name: YoutuberName3, link: YoutubeLink3 },
                { name: YoutuberName4, link: YoutubeLink4 },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm hover:text-slate-700 text-slate-900 transition-colors duration-200"
                  >
                    {item.name}
                    <img className="h-5 w-5" src={Youtube} alt="YouTube" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Documentation Links */}
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-4">
              Documentation
            </h2>
            <ul className="space-y-4">
              {[
                { name: Blog1, link: BlogLink1 },
                { name: Blog2, link: BlogLink2 },
                { name: Blog3, link: BlogLink3 },
                { name: Blog4, link: BlogLink4 },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm hover:text-slate-700 text-slate-900 transition-colors duration-200"
                  >
                    {item.name}
                    <img className="h-5 w-5" src={BlogLogo} alt="Blog" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageCard;