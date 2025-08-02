import React from "react";
import Typewriter from "typewriter-effect";
import { BoxReveal } from "@/Components/magicui/box-reveal";
import { useContext } from "react";
import { activeContext } from "../Context/ActiveLink.jsx";

const Main = () => {
  const activeStatus = useContext(activeContext)
  const {handleActiveLink} = activeStatus
  return (
    <main className="mt-[10px] mb-[160px] flex flex-wrap items-center justify-around md:mt-[130px]">
      <div className="imageShadow m-8 flex h-[300px] w-[300px] items-center justify-center overflow-hidden rounded-full bg-cover">
        <img
          src="assets/image.jpg"
          alt=""
          className="h-full w-full cursor-pointer rounded-full transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="w-1/2 text-center max-md:w-[90%] md:text-left">
      <BoxReveal boxColor={"#0091ff"} duration={0.5}>
        <div className="javascript-text font-mono">
          Hi I'm{" "}
          <span className="text-script inline-block font-bold text-[#0091ff]">
            <Typewriter
              options={{
                strings: ["a Web Developer", "a Problem Solver"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        </BoxReveal>

        <BoxReveal boxColor={"#0091ff"} duration={0.5}>
        <h1 className="text-3xl font-bold text-[#0091ff]">M Salman Khan</h1>
        </BoxReveal>

        <BoxReveal boxColor={"#0091ff"} duration={0.5}>

        <p className="mt-3 mb-3 text-justify md:text-left">
          I'm a passionate Web Developer with strong problem-solving skills and
          a love for creating responsive, efficient, and scalable web
          applications. I enjoy turning complex problems into simple,
          user-friendly solutions. Continuously learning and improving, I aim to
          build web experiences that are both impactful and high-performing.
        </p>
        </BoxReveal>
        <BoxReveal boxColor={"#0091ff"} duration={0.5}>

        <div className="flex justify-center gap-3 md:justify-start">
          <button className="cursor-pointer rounded border-2 border-white bg-transparent px-[18px] py-2 text-[15px] transition-colors hover:border-[#0091ff] hover:text-[#0091ff]">
            Download CV
          </button>
          <a href="#contact" onClick={()=>handleActiveLink("contact")}>
            <button className="cursor-pointer rounded border-2 border-white bg-transparent px-[18px] py-2 text-[15px] transition-colors hover:border-[#0091ff] hover:text-[#0091ff]">
              Contact us
            </button>
          </a>
        </div>
        </BoxReveal>
        <BoxReveal boxColor={"#0091ff"} duration={0.5}>
        <div className="mt-6 flex justify-center md:justify-start">
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
            <i className="fa-solid fa-code-branch inline-block cursor-pointer p-1 text-[20px] transition-all duration-400 hover:rotate-[360deg] hover:text-[#0091ff]" />
          </a>
          <a href="https://m-salman-khan.web.app" target="_blank">
            <i className="fa-solid fa-globe inline-block cursor-pointer p-1 text-[20px] transition-all duration-400 hover:rotate-[360deg] hover:text-[#0091ff]" />
          </a>
        </div>
        </BoxReveal>
      </div>
    </main>
  );
};

export default Main;
