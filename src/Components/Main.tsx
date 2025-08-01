import React from 'react'
import Typewriter from 'typewriter-effect';

const Main: React.FC = () => {

    return (
        <main className="flex items-center justify-around md:mt-[130px] mt-[10px] mb-[160px] flex-wrap">
            <div className="m-8 bg-cover border-[12px] border-gray-500 rounded-full overflow-hidden w-[300px] h-[300px] flex items-center justify-center">
                <img src="assets/image.jpg" alt="" className="w-full h-full rounded-full transition-transform duration-500 hover:scale-105 cursor-pointer" />
            </div>
            <div className="w-1/2 max-md:w-[90%] text-center md:text-left">
                <div className="javascript-text font-mono">Hi I'm <span className="text-[#0091ff] font-bold  inline-block text-script"><Typewriter options={{
                    strings: ["a Web Developer",
                        "a Problem Solver",],
                    autoStart: true,
                    loop: true,
                }} /></span></div>
                <h1 className='text-3xl font-bold text-[#0091ff]'>M Salman Khan</h1>
                <p className="mt-3 mb-3 text-center md:text-left">I'm a passionate Web Developer with strong problem-solving skills and a love for creating
                    responsive, efficient, and scalable web applications. I enjoy turning complex problems into simple,
                    user-friendly solutions. Continuously learning and improving, I aim to build web experiences that are
                    both impactful and high-performing.</p>
                <div className="flex gap-3 justify-center md:justify-start">
                    <button className="px-[18px] py-2 text-[15px] border-2 border-white bg-transparent rounded hover:text-[#0091ff] hover:border-[#0091ff] cursor-pointer transition-colors">Download CV</button>
                    <a href="#contact"><button className="px-[18px] py-2 text-[15px] border-2 border-white bg-transparent rounded hover:text-[#0091ff] hover:border-[#0091ff] cursor-pointer transition-colors">Contact us</button></a>
                </div>
                <div className="mt-6 flex justify-center md:justify-start">
                    <a href="https://codolio.com/profile/khansalman" target='_blank'><i className="fa-solid fa-code text-[19px] p-1 hover:text-[#0091ff] transition-all duration-400 cursor-pointer inline-block hover:rotate-[360deg]" /></a>
                    <a href="https://www.linkedin.com/in/m-salman-khan-/" target='_blank'><i className="fa-brands fa-linkedin text-[20px] p-1 hover:text-[#0091ff] transition-all duration-400 cursor-pointer inline-block hover:rotate-[360deg]" /></a>
                    <a href="https://www.instagram.com/khansalman.ig/" target='_blank'><i className="fa-brands fa-instagram text-[20px] p-1 hover:text-[#0091ff] transition-all duration-400 cursor-pointer inline-block hover:rotate-[360deg]" /></a>
                    <a href="https://github.com/M-Salman-khan" target='_blank'><i className="fa-solid fa-code-branch text-[20px] p-1 hover:text-[#0091ff] transition-all duration-400 cursor-pointer inline-block hover:rotate-[360deg]" /></a>
                    <a href="https://m-salman-khan.web.app" target='_blank'><i className="fa-solid fa-globe text-[20px] p-1 hover:text-[#0091ff] transition-all duration-400 cursor-pointer inline-block hover:rotate-[360deg]" /></a>
                </div>
            </div>
        </main>
    )
}

export default Main