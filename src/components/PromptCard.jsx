import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

function PromptCard(props) {
   const {searchLang}=props
  const [loader, setLoader] = useState(false);

  const [input, setInput] = useState("");
  const [info, setInfo] = useState("");
  const handleSearch = () => {
    setLoader(true)
    fetchInfo(input);
    setInput('')

    

  };

  const fetchInfo = async (request) => {
    try {
      const response = await axios.post("https://theroadmap-backend-1.onrender.com/getData", {
        request: request,
      });

      setInfo(response.data);

    } catch (error) {
      console.error(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="overflow-auto p-6 h-max bg-gray-100 rounded-lg shadow-md w-4/5  mx-auto">
      <div className=" flex justify-center mb-6     gap-4">
        <input
          type="text"
          placeholder={searchLang}
          className="px-8 py-3 shadow-lg  rounded-lg"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
        <button
          onClick={handleSearch} 

          className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-400/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="button"
        >
          Search
        </button>
      </div>

      {loader ? (
        <div className="flex w-full justify-center">
          <button
            disabled=""
            class="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center transition duration-300 transform hover:scale-105 active:scale-95"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="animate-spin h-5 w-5 mr-3 text-white"
            >
              <circle
                stroke-width="4"
                stroke="currentColor"
                r="10"
                cy="12"
                cx="12"
                class="opacity-25"
              ></circle>
              <path
                d="M4 12a8 8 0 018-8v8H4z"
                fill="currentColor"
                class="opacity-75"
              ></path>
            </svg>
            Loading...
          </button>
        </div>
      ) : (
        info.split("\n").map((line, index) => (
          <p key={index} className="mb-8 text-gray-800  leading-relaxed">
            {line}
          </p>
        ))
      )}
    </div>
  );
}

export default PromptCard;
