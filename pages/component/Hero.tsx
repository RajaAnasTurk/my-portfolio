import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
// import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div id="home" className="h-[88vh] bg-[url('/images/banner1.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
        <h1 className="text-[35px] md:text-[40px] text-white font-bold">
          Hello, I am <span className="text-yellow-200">Raja Anas !</span>
        </h1>
        <TextEffect/>
        <p className="mt-[1.5rem] text-[18px] text-[#ffffff92]">Hey! I am Raja Anas a Front-End Developer and 
        Passionate about crafting seamless and visually stunning web experiences.
        </p>
        {/* <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
        <a href="/images/cv/my-cv.pdf">
          <button className="px-[1rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
           font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            
            <p>Download</p>
            <ArrowUpTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
          </button>
          </a>
        </div> */}
        </div>
        <div className="w-[400px] hidden bg-green-400 relative lg:flex items-center rounded-full h-[400px]">
            <Image 
              src="/images/about.jpg" 
              alt="user" 
              layout="fill" 
              className="object-cover object-top rounded-full"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
