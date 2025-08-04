import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex h-[20dvh] flex-col items-center justify-center">
      <a href="#">
        <div className="flex items-center gap-3">
          <div className="profileImg h-[40px] w-[40px] overflow-hidden rounded-full">
            <img src="./assets/image.jpg" alt="" className="object-cover" />
          </div>
          <div className="username">
            <p className="text-xl font-bold">M Salman Khan</p>
          </div>
        </div>
      </a>
      <div className="mt-6 flex justify-center md:justify-start gap-1">
        <a href="https://codolio.com/profile/khansalman" target="_blank">
          <i className="fa-solid fa-code inline-block cursor-pointer p-1 text-[19px] transition-all duration-400 hover:rotate-[360deg] hover:text-[#0091ff]" />
        </a>
        <a href="https://www.linkedin.com/in/m-salman-khan-/" target="_blank">
          <i className="fa-brands fa-linkedin inline-block cursor-pointer p-1 text-[20px] transition-all duration-400 hover:rotate-[360deg] hover:text-[#0091ff]" />
        </a>
        <a href="https://www.instagram.com/khansalman.ig/" target="_blank">
          <i className="fa-brands fa-instagram inline-block cursor-pointer p-1 text-[20px] transition-all duration-400 hover:rotate-[360deg] hover:text-[#0091ff]" />
        </a>
        <a href="https://github.com/M-Salman-khan" target="_blank">
                  <FaGithub className="inline-block cursor-pointer  text-[20px] transition-all duration-400 hover:rotate-[360deg] hover:text-[#0091ff]"/>
        </a>
        <a href="https://m-salman-khan.web.app" target="_blank">
          <i className="fa-solid fa-globe inline-block cursor-pointer p-1 text-[20px] transition-all duration-400 hover:rotate-[360deg] hover:text-[#0091ff]" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
