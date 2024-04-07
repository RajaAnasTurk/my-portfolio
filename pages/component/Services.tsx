import { CodeBracketSquareIcon, ComputerDesktopIcon} from "@heroicons/react/20/solid";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="bg-[#121212] pt-[4rem] md:pt-[5rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-yellow-200">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem]">
        <div data-aos="fade-right">
          <div className="bg-red-700 hover:scale-110 transform transition-all duration-300
            uppercase font-semibold text-center p-[2rem] rounded-lg"
          >
            <CodeBracketSquareIcon className="w-[4rem] h-[4rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Front-End Developer
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
            I'm a front end developer, crafting sleek designs and intuitive interfaces for websites 
            and apps. Using HTML, CSS, and JavaScript, I ensure seamless user experiences across 
            devices.
            </p>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <div className="bg-orange-700 hover:scale-110 transform transition-all duration-300
            uppercase font-semibold text-center p-[2rem] rounded-lg"
          >
            <CodeBracketIcon className="w-[4rem] h-[4rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Back-End Developer
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
            I'm a back end developer.Building the behind the scenes functionality of websites and 
            applications.Using languages like Python,Java or PHP.I ensure data storage, 
            security and serverside operations smoothly.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-delay="500">
          <div className="bg-blue-700 hover:scale-110 transform transition-all duration-300
            uppercase font-semibold text-center p-[2rem] rounded-lg">
            <ComputerDesktopIcon className="w-[4rem] h-[4rem] mx-auto text-[#d3fae8]" />
            <h1 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Full-Stack Developer
            </h1>
            <p className="text-[15px] text-[#d3d2d2] font-normal">
            I'm a full stack developer, proficient in both front end and back end technologies.
            From designing user interfaces to managing databases and server logic,
            I bring end-to-end solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
