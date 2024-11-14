import axios from 'axios';
import React from 'react'
import{ useState, useEffect } from 'react';

function PromptCard(props) {
    const{langname}=props;
        const [loader,setLoader]=useState(true)
    
    
      const [info, setInfo] = useState('');
    
      useEffect(() => {
        const fetchInfo = async () => {
          try {
            const response = await axios.post('http://localhost:2001/getData',{lang:langname}); 
            console.log(response);
            
            setInfo(response.data);
          } catch (error) {
            console.error(error.message);
          }
          finally{
            setLoader(false)
          }
        };
    
        fetchInfo();
      }, []);
    
      return (
        <div className="overflow-auto p-6 h-max bg-gray-100 rounded-lg shadow-md w-4/5  mx-auto">
       
       
       {loader ? ( <div className='flex w-full justify-center'>

    
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




        </div>)
      
        :(info.split('\n').map((line, index) => (
          <p key={index} className="mb-8 text-gray-800  leading-relaxed">
            {line}
          </p>
        )))
    }  
      </div>
      );
    }
    



export default PromptCard
