import React, { useState } from "react";
import "./Contact.css";

import Navbar from "../components/Navbar";
export default function Contact() {
  const [visible, setVisible] = useState(true);
  return (
    <>
    <div className="w-full"><Navbar /></div>  
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
                  <label class="block text-gray-800 mb-1" for="name">
                    Your Name
                  </label>
                  <input
                    class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-800 mb-1" for="email">
                    Your Email
                  </label>
                  <input
                    class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your email"
                    name="email"
                    id="email"
                    type="email"
                  />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-800 mb-1" for="message">
                    Your Message
                  </label>
                  <textarea
                    class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    rows="4"
                    placeholder="Enter your message"
                    name="message"
                    id="message"
                  ></textarea>
                </div>
                <button
                  class="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="h-[23rem] p-1  ">
                <div className="bg-gray-200 rounded-lg p-4 h-full w-full overflow-auto ">
                  <ol className="flex flex-col gap-10">
                    <ul>
                      <li>Name</li>
                      <li>Email</li>
                      <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quasi totam ipsum neque excepturi, veritatis tempore sit voluptate! Fugit error quam distinctio praesentium perspiciatis explicabo, assumenda modi natus inventore ad!</li>
                    </ul>
                    <ul>
                      <li>Name</li>
                      <li>Email</li>
                      <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat porro maxime odit repellendus omnis dolorem cumque assumenda doloremque ea totam, non veritatis ducimus dignissimos adipisci beatae tenetur voluptatibus velit consectetur.</li>
                    </ul>
                    <ul>
                      <li>Name</li>
                      <li>Email</li>
                      <li>Message</li>
                    </ul>
                    <ul>
                      <li>Name</li>
                      <li>Email</li>
                      <li>Message</li>
                    </ul>{" "}
                    <ul>
                      <li>Name</li>
                      <li>Email</li>
                      <li>Message</li>
                    </ul>{" "}
                    <ul>
                      <li>Name</li>
                      <li>Email</li>
                      <li>Message</li>
                    </ul>{" "}
                    <ul>
                      <li>Name</li>
                      <li>Email</li>
                      <li>Message</li>
                    </ul>{" "}
                    <ul>
                      <li>Name</li>
                      <li>Email</li>
                      <li>Message</li>
                    </ul>
                  </ol>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
