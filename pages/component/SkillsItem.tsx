import React from "react";

interface Props {
  title: string;
  year: string;
  framework: string;
}

const SkillsItem = ({ title, year, framework }: Props) => {
  let description;
  if (framework === "React.js") {
    description =
      "specializing in building dynamic user interfaces and single-page applications with React.js";
  } else if (framework === "Next.js") {
    description =
      "focusing on server-rendered applications and seamless client-side navigation in Next.js";
  } else {
    description = "not specified";
  }

  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-[#55e5a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e5a5]">
        {title}
      </span>
      <h1 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {year}
      </h1>
      <p className="text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80">
        I'm a {framework} developer, {description}.
      </p>
    </div>
  );
};

export default SkillsItem;
