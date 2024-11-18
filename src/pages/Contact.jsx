import React, { useEffect, useState } from "react";
import "./Contact.css";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "../components/Navbar";
export default function Contact() {
  const [visible, setVisible] = useState(true);
  const [feedData,setFeedData]=useState([])
  const [data,setData]=useState({
    name:'',
    email:'',
    message:''
  });

  useEffect(()=>{
    axios.get("https://theroadmap-backend-1.onrender.com/info")
    .then((res)=>setFeedData(res.data))
  },[data])


  const send=(e)=>{
    e.preventDefault()
    axios.post('https://theroadmap-backend-1.onrender.com/info',data)
    .then(res=>{
      console.log(res);
      
      toast("Feedback sent")
      setData(
        {
          name:'',
          email:'',
          message:''
        
        }
      )

      
    })
  
    
  }
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setData((prev)=>({
      ...prev,
      [name]:value
    }))}

  return (
    <>

 
   
      <div class="container px-4 mx-auto ">
        <div class="mx-auto mt-10 ">
      
          <div class="max-w-lg mx-auto px-8 py-6 bg-gray-100 rounded-lg shadow-lg shadow-zinc-700">
            <div className="flex w-full justify-between">
  
              <h2
                onClick={() => {
                  setVisible(true);
                }}
                class="text-2xl  cursor-pointer font-semibold text-gray-800 mb-4"
              >
                Send Feedback
              </h2>
              <span className="text-2xl opacity-40"> |</span>
              <h2
                onClick={() => {
                  setVisible(false);
                }}
                class="text-2xl cursor-pointer font-semibold text-gray-800 mb-4"
              >
                Show Feedbacks
              </h2>
            </div>
            {visible == true ? (
              <form>
                <div class="mb-4">
                  <label class="block text-gray-800 mb-1" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your name"
                    type="text"
                    name="name"
                    value={data.name}
                    onChange={handleChange}
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-800 mb-1" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    type="email"
                    onChange={handleChange}
                    value={data.email}
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-800 mb-1" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    rows="4"
                    placeholder="Enter your message"
                    name="message"
                    id="message"
                    onChange={handleChange}
                    value={data.message}
                  ></textarea>
                </div>
                <button
                type="submit"
                  class="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                 onClick={send}
                >
                  Send Message
                </button>
                <ToastContainer/>
              </form>
            ) : (
              <div className="h-[23rem] p-1  ">
                <div className=" rounded-lg p-4 h-full w-full overflow-auto ">
                <ol className="flex flex-col gap-8 ">
                  {
                  feedData.map((value,index)=>(
                  
                      <ul key={index} className=" flex flex-col gap-3 bg-white p-3  shadow-amber-400 shadow-lg rounded-lg">
                      <li className=" text-zinc-700"><span className="font-bold">Name :</span> {value.name}</li>
                      <li className=" text-zinc-700"> <span className="font-bold" >Email : </span>{value.email}</li>
                      <li className=" text-zinc-700"> <span className="font-bold">Message :</span> {value.message}</li>
                      </ul>
                   
                  ))
                 } </ol>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

