import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mt-16 sm:mt-24 lg:mt-32 text-zinc-100">
          <h3 className="text-3xl sm:text-4xl font-bold mb-2">Who we are</h3>
          <h1 className="text-3xl sm:text-4xl font-bold">Designer, Developers & Thinkers</h1>
        </div>

        <div className="mt-16 sm:mt-24 lg:mt-32 bg-gray-600/40 backdrop-blur-sm rounded-xl py-8">
          <h3 className="text-2xl sm:text-3xl text-center font-bold text-white mb-8">
            Our Services
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-16">
            {/* We Provide Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h5 className="text-xl text-white font-bold mb-4">We Provide</h5>
              <ul className="space-y-2 text-zinc-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                  Roadmaps
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                  Career Counselling
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                  Documents
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                  Channel Links
                </li>
              </ul>
            </div>

            {/* Digital Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h5 className="text-xl text-white font-bold mb-4">Digital</h5>
              <ul className="space-y-2 text-zinc-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                  Web Developer
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                  Content Creator
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                  App Developer
                </li>
              </ul>
            </div>

            {/* Team Members Section */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 sm:col-span-2 lg:col-span-1">
              <h5 className="text-xl text-white font-bold mb-4">Team Members</h5>
              <ul className="space-y-2 text-zinc-100">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></span>
                  Vishwas Verma
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}