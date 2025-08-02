import React,{useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import './css/Header.css'
const Header: React.FC = () => {
  const [active, setactive] = useState(false)
  const handleActive = ()=>{
    setactive(!active)
  }
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
        <div className='flex md:hidden mr-5 p-2'>
          {<RxHamburgerMenu onClick={handleActive}/>}
        </div>
        <ul className={`hidden md:flex ml-3`}>
          <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#">Home</a></li>
          <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#skills">Skills</a></li>
          <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#projects">Projects</a></li>
          <li><a className="text-white p-[15px] hover:text-[#0091ff] transition-colors duration-300" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
      <div className={`menu ${active?"active":""}`}>
          <div className=' cross flex justify-end m-10 absolute top-2 right-1.5'>
            <RxCross2 className='border-2 border-gray-300 h-5 w-5 rounded-full'  onClick={handleActive}/>
          </div>
      <ul>

        <li className='p-5'><a onClick={handleActive} className="text-gray-300 text-2xl font-extrabold hover:text-[#0091ff] transition-colors duration-300" href="#">Home</a></li>
        <li className='p-5'><a onClick={handleActive} className="text-gray-300 text-2xl font-extrabold hover:text-[#0091ff] transition-colors duration-300" href="#skills">Skills</a></li>
        <li className='p-5'><a onClick={handleActive} className="text-gray-300 text-2xl font-extrabold hover:text-[#0091ff] transition-colors duration-300" href="#projects">Projects</a></li>
        <li className='p-5'><a onClick={handleActive} className="text-gray-300 text-2xl font-extrabold hover:text-[#0091ff] transition-colors duration-300" href="#contact">Contact</a></li>
          </ul>
      </div>
    </>
  )
}

export default Header