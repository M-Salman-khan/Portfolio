import React from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt,FaReact, FaJava,FaNode } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { TfiHtml5 } from "react-icons/tfi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress,SiMongodb, SiPython, SiC } from "react-icons/si";
const Skills: React.FC = () => {
  return (
  <div id="skills" className='mb-30 pt-6'>
    <div className='py-5'>
      <h2 className='text-center w-[100%] font-bold text-4xl'>Hands-on Skills</h2>
    </div>
    <div className="w-[90%] m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* HTML */}
           <div  className="bg-black/60 backdrop-blur-sm border border-sky-500/20 rounded-md p-6 hover:border-sky-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
              <TfiHtml5 className="h-6 w-6 text-sky-500" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">HTML5</h4>
            <p className="text-gray-300">
              Structure web pages with semantic, accessible markup.
            </p>
          </div>
          {/* CSS */}
           <div  className="bg-black/60 backdrop-blur-sm border border-sky-500/20 rounded-md p-6 hover:border-sky-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
              <FaCss3Alt className="h-6 w-6 text-sky-500"/>
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">CSS3</h4>
            <p className="text-gray-300">
              Style and layout web pages with modern, responsive designs.
            </p>
          </div>
          {/* JS */}
           <div  className="bg-black/60 backdrop-blur-sm border border-sky-500/20 rounded-md p-6 hover:border-sky-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
              <IoLogoJavascript  className="h-6 w-6 text-sky-500"/>
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">JavaScript</h4>
            <p className="text-gray-300">
              Add interactivity and dynamic features to web applications.
            </p>
          </div>
            
        {/* tailwindCSS */}
          <div  className="bg-black/60 backdrop-blur-sm border border-sky-500/20 rounded-md p-6 hover:border-sky-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
              <RiTailwindCssFill className="h-6 w-6 text-sky-500"/>
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">Tailwind CSS</h4>
            <p className="text-gray-300">
              Rapidly build modern, utility-first user interfaces.
            </p>
          </div>

          {/* Python */}
          <div  className="bg-black/60 backdrop-blur-sm border border-sky-500/20 rounded-md p-6 hover:border-sky-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
              <SiPython className="h-6 w-6 text-sky-500"/>
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">Python</h4>
            <p className="text-gray-300">
              Built Python automation programs and web applications using Flask.
            </p>
          </div>

          {/* JAVA */}
          <div  className="bg-black/60 backdrop-blur-sm border border-sky-500/20 rounded-md p-6 hover:border-sky-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
          <FaJava className="h-6 w-6 text-sky-500"/>
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">Java</h4>
            <p className="text-gray-300">
              Currently focused on mastering core Java concepts.
            </p>
          </div>
          {/* C */}
          <div  className="bg-black/60 backdrop-blur-sm border border-sky-500/20 rounded-md p-6 hover:border-sky-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
              <SiC className="h-6 w-6 text-sky-500"/>
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">C</h4>
            <p className="text-gray-300">
              Exploring fundamental concepts of the C programming language.
            </p>
          </div>
         
         {/* C++ */}
         
          <div  className="bg-black/60 backdrop-blur-sm border border-sky-500/20 rounded-md p-6 hover:border-sky-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
              <TbBrandCpp className="h-6 w-6 text-sky-500" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">C++</h4>
            <p className="text-gray-300">
              Passionate about mastering DSA through hands-on coding in C++.
            </p>
          </div>

        {/* MongoDb */}
          <div className="bg-black/60 backdrop-blur-sm border border-sky-500/20 rounded-md p-6 hover:border-sky-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
              <SiMongodb className="h-6 w-6 text-sky-500" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">
              MongoDB
            </h4>
            <p className="text-gray-300">Learning to build and manage NoSQL databases using MongoDB.</p>
          </div>

        {/* ExpressJS */}
          <div className="bg-black/60 backdrop-blur-sm border border-sky-500/20 rounded-md p-6 hover:border-sky-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
              <SiExpress className="h-6 w-6 text-sky-500" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">
              Express.js
            </h4>
            <p className="text-gray-300">
              Developing backend APIs and server-side logic with Express.js.
            </p>
          </div>

          {/* React */}
          <div  className="bg-black/60 backdrop-blur-sm border border-sky-500/20 rounded-md p-6 hover:border-sky-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
              <FaReact className="h-6 w-6 text-sky-500" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">React</h4>
            <p className="text-gray-300">
              Building responsive and dynamic user interfaces using React.js.
            </p>
          </div>

          {/* NodeJs */}
          <div className="bg-black/60 backdrop-blur-sm border border-sky-500/20 rounded-md p-6 hover:border-sky-500/40 transition-all hover:transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center mb-4">
              <FaNode className="h-6 w-6 text-sky-500" />
            </div>
            <h4 className="text-xl font-bold mb-3 text-white">
              Node.js
            </h4>
            <p className="text-gray-300">Developing secure Node.js applications with user authentication.</p>
          </div>

       
        </div>
    </div>
  )
}

export default Skills