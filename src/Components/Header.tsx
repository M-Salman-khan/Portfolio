import React,{useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import './css/Header.css'
const Header: React.FC = () => {
  const [active, setactive] = useState(false)
  return (
    <>
    <header className="z-50 bg-[#27272A] backdrop-blur shadow-lg border-1 rounded-2xl border-[rgba(63,63,70,.6)] sticky top-4  m-[20px] w-[85%] mx-auto md:ml-[70px] md:w-[550px] ">
      <nav className="flex items-center justify-between py-3 pl-4">
        <div className="flex items-center">
          <a href="#">

          <h2 className="flex items-center text-white text-lg w-max font-bold">
            <span className="bg-[#0091ff] text-white rounded-full flex items-center justify-center w-7 h-7 mr-2 overflow-hidden"><img src="./assets/image.jpg" alt=""  /></span>
            M Salman Khan
          </h2>
          </a>
        </div>
        <div className='flex md:hidden mr-5'>
        {<RxHamburgerMenu onClick={()=>setactive(!active)}/>}
        </div>
        {/* <RxHamburgerMenu/> */}
        <ul className={`hidden md:flex ml-3`}>
          <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#">Home</a></li>
          <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#skills">Skills</a></li>
          <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#projects">Projects</a></li>
          <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
      <ul className={`menu ${active?"active":""}`}>
        <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#">Home</a></li>
        <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#skills">Skills</a></li>
        <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#projects">Projects</a></li>
        <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#contact">Contact</a></li>
      </ul>
    </>
  )
}

export default Header