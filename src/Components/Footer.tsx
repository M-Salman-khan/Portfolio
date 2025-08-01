// import React from 'react'

const Footer = () => {
  return (
    <div className='h-[20dvh]  flex items-center flex-col justify-center'>
        <a href="#">

        <div className="flex items-center gap-3">
            <div className="profileImg w-[40px] h-[40px] overflow-hidden rounded-full">
                <img src="./assets/image.jpg" alt="" className='object-cover'/>
            </div>
            <div className="username">
                <p className='font-bold text-xl'>M Salman Khan</p>
            </div>
        </div>
        </a>
        <div className="mt-6 flex justify-center md:justify-start">
                    <a href="https://codolio.com/profile/khansalman" target='_blank'><i className="fa-solid fa-code text-[19px] p-1 hover:text-[#0091ff] transition-all duration-400 cursor-pointer inline-block hover:rotate-[360deg]" /></a>
                    <a href="https://www.linkedin.com/in/m-salman-khan-/" target='_blank'><i className="fa-brands fa-linkedin text-[20px] p-1 hover:text-[#0091ff] transition-all duration-400 cursor-pointer inline-block hover:rotate-[360deg]" /></a>
                    <a href="https://www.instagram.com/khansalman.ig/" target='_blank'><i className="fa-brands fa-instagram text-[20px] p-1 hover:text-[#0091ff] transition-all duration-400 cursor-pointer inline-block hover:rotate-[360deg]" /></a>
                    <a href="https://github.com/M-Salman-khan" target='_blank'><i className="fa-solid fa-code-branch text-[20px] p-1 hover:text-[#0091ff] transition-all duration-400 cursor-pointer inline-block hover:rotate-[360deg]" /></a>
                    <a href="https://m-salman-khan.web.app" target='_blank'><i className="fa-solid fa-globe text-[20px] p-1 hover:text-[#0091ff] transition-all duration-400 cursor-pointer inline-block hover:rotate-[360deg]" /></a>
                </div>
    </div>
  )
}

export default Footer