import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";

const Header: React.FC = () => {
  // const [first, setfirst] = useState(false)
  return (
    <header className="z-50 bg-[#27272A] backdrop-blur shadow-lg sticky top-4 m-[20px] w-[85%] md:w-[550px] border-1 rounded-2xl border-[rgba(63,63,70,.6)]">
      <nav className="flex items-center justify-between py-3 pl-4">
        <div className="flex items-center">
          <h2 className="flex items-center text-white text-lg w-max font-bold">
            <span className="bg-[#0091ff] text-white rounded-full flex items-center justify-center w-7 h-7 mr-2">S</span>
            M Salman Khan
          </h2>
        </div>
        {/* <RxHamburgerMenu onClick={()=>setfirst(!first)}/> */}
        <ul className="hidden md:flex ml-3 ">
          <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#">Home</a></li>
          <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#skills">Skills</a></li>
          <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#projects">Projects</a></li>
          <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#contact">Contact</a></li>
        </ul>
        <div className='flex md:hidden mr-5'>
        <RxHamburgerMenu/>

        </div>
      </nav>
        {/* {first ?
          <div className=" h-dvh z-[100] fixed bg-amber-400">
              <ul>
              <li><a className="text-white no-underline p-[23px] hover:text-[#0091ff] hover:border-b hover:border-white transition-colors duration-300" href="#">Home</a></li>
              <li><a className="text-white no-underline p-[23px] hover:text-[#0091ff] hover:border-b hover:border-white transition-colors duration-300" href="#skills">Skills</a></li>
              <li><a className="text-white no-underline p-[23px] hover:text-[#0091ff] hover:border-b hover:border-white transition-colors duration-300" href="#projects">Projects</a></li>
              <li><a className="text-white no-underline p-[23px] hover:text-[#0091ff] hover:border-b hover:border-white transition-colors duration-300" href="#contact">Contact</a></li>
            </ul>
          </div>
          : ""} */}
    </header>
  )
}

export default Header