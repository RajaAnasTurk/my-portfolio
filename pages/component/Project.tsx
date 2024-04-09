import React from "react";

const Project = () => {
  return (
    <div id="projects" className="bg-[#02050a] pt-[4rem] md:pt-[5rem] pb-[3rem]">
      <h1 className="heading">
       Pro<span className="text-yellow-200">Ject</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div data-aos="fade-up" data-aos-delay="0">
          <img
            src="/images/p1.jpg"
            alt="project"
            className="w-full h-auto cursor-pointer transform hover:-translate-y-6 transition-all duration-200"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <img
            src="/images/p2.jpg"
            alt="project"
            className="w-full h-auto cursor-pointer transform hover:-translate-y-6 transition-all duration-200"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="600">
          <img
            src="/images/p3.jpg"
            alt="project"
            className="w-full h-auto cursor-pointer transform hover:-translate-y-6 transition-all duration-200"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
          <img
            src="/images/p4.jpg"
            alt="project"
            className="w-full h-auto cursor-pointer transform hover:-translate-y-6 transition-all duration-200"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
          <img
            src="/images/p5.jpg"
            alt="project"
            className="w-full h-auto cursor-pointer transform hover:-translate-y-6 transition-all duration-200"
          />
        </div>
        <div data-aos="fade-up" data-aos-delay="1600">
          <img
            src="/images/p66.jpg"
            alt="project"
            className="w-full h-auto cursor-pointer transform hover:-translate-y-6 transition-all duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
