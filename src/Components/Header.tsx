import React from 'react'

const Header:React.FC = () => {
  return (
    <header>
        <nav className="flex items-center justify-between py-4 px-8">
            <div className="flex items-center">
                <h2 className="flex items-center text-white text-2xl font-bold">
                  <span className="bg-[#0091ff] text-white rounded-full flex items-center justify-center w-10 h-10 text-[24px] mr-2">S</span>
                  M Salman Khan
                </h2>
            </div>
            <ul className="hidden md:flex ">
                <li><a className="text-white no-underline p-[23px] hover:text-[#0091ff] hover:border-b hover:border-white transition-colors duration-300" href="">Home</a></li>
                <li><a className="text-white no-underline p-[23px] hover:text-[#0091ff] hover:border-b hover:border-white transition-colors duration-300" href="#skills">Skills</a></li>
                <li><a className="text-white no-underline p-[23px] hover:text-[#0091ff] hover:border-b hover:border-white transition-colors duration-300" href="">Projects</a></li>
                <li><a className="text-white no-underline p-[23px] hover:text-[#0091ff] hover:border-b hover:border-white transition-colors duration-300" href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header