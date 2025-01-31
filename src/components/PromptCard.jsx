import axios from "axios";
import React, { useState } from "react";

function PromptCard(props) {
  const { searchLang } = props;
  const [loader, setLoader] = useState(false);
  const [input, setInput] = useState("");
  const [info, setInfo] = useState("");

  const handleSearch = () => {
    setLoader(true);
    fetchInfo(input);
    setInput("");
  };

  const fetchInfo = async (request) => {
    try {
      const response = await axios.post(
        "https://theroadmap-backend-1.onrender.com/getData",
        {
          request: request,
        }
      );
      setInfo(response.data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="p-3 sm:p-4 md:p-6 min-h-[300px] bg-gray-100 rounded-lg shadow-md w-[95%] sm:w-[90%] md:w-4/5 mx-auto">
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-2 sm:gap-4 mb-4 sm:mb-6">
        <input
          type="text"
          placeholder={searchLang}
          className="w-full px-4 py-2.5 text-sm sm:text-base shadow-lg rounded-lg focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-200"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          onClick={handleSearch}
          disabled={!input.trim()}
          className="w-full sm:w-auto min-h-[40px] text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-400/50 font-medium rounded-lg text-sm px-4 sm:px-6 py-2.5 text-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
        >
          Search
        </button>
      </div>

      <div className="overflow-y-auto max-h-[60vh] px-2 sm:px-4">
        {loader ? (
          <div className="flex w-full justify-center py-4 sm:py-8">
            <button
              disabled
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2.5 px-5 rounded-full shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spin h-4 w-4 sm:h-5 sm:w-5 text-white"
              >
                <circle
                  strokeWidth="4"
                  stroke="currentColor"
                  r="10"
                  cy="12"
                  cx="12"
                  className="opacity-25"
                />
                <path
                  d="M4 12a8 8 0 018-8v8H4z"
                  fill="currentColor"
                  className="opacity-75"
                />
              </svg>
              <span>Loading...</span>
            </button>
          </div>
        ) : (
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            {info.split("\n").map((line, index) => (
              <p
                key={index}
                className="text-sm sm:text-base text-gray-800 leading-relaxed px-2"
              >
                {line}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default PromptCard;