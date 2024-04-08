import { ArrowUpTrayIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
            <h1 className="text-[20px] font-bold uppercase text-green-300 mb-[1rem]">
                ABOUT ME
            </h1>
            <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize 
              mb-[3rem] font-bold text-white">
                Transforming <span className="text-yellow-200">Vision</span>
            </h2>
            <div className="mb-[3rem] flex items-center md:space-x-10">
              <span className="w-[100px] hidden md:block h-[5px] bg-green-300 rounded-sm"></span>
              <p className="text-[19px] text-slate-300 w-[80%]">
              Hey! I am a front end developer. You know those websites and apps you love to use?Well, 
              I am the one who makes them look great and work smoothly. I use React.js, Next.js,Tailwind CSS,
              HTML5, CSS3, TypeScript and JavaScript to bring designs to life and make sure everything is 
              easy to use on your phone, tablet, or computer. I collaborate with designers and other 
              developers to create awesome user experiences. Its all about making things intuitive 
              and fun for you!
              </p>
            </div>
            <a href="/images/cv/my-cv.pdf">
            <button className="px-[1rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
           font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
            <p>Download</p>
            <ArrowUpTrayIcon className="w-[1.6rem] h-[1.7rem] text-black"/>
          </button>
          </a>
        </div>
        <div 
          data-aos="fade-left" 
          className="lg:w-[400px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[400px] w-[400px] h-[400px] relative"
        >
          <Image 
           src="/images/u2.jpg" 
           alt="user" 
           layout="fill" 
           objectFit="contain" 
           className="relative z-[8] w-[100%] h-[100%] object-contain"
          />
          {/* <div className="absolute w-[90%] h-[90%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]">

          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
 