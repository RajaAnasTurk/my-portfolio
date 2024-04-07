import React from "react";
import SkillsItem from "./SkillsItem";
import Skillslanguage from "./Skillslanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[5rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-200">Skills</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 
      gap-[2rem] items-center">
        <div>
          <SkillsItem title = "React.js developer" year = "2023-2024" framework="React.js"/>
          <Skillslanguage
            skill1="Next.js"
            skill2="CSS"
            skill3="HTML"
            skill4="JavaScript"
            level1="w-[95%]"
            level2="w-[93%]"
            level3="w-[90%]"
            level4="w-[85%]" 
          />
        </div>
        <div>
        <SkillsItem title = "Next.js developer" year = "2023-2024" framework="Next.js"/>
          <Skillslanguage
            skill1="Tailwindcss"
            skill2="CSS3"
            skill3="HTML5"
            skill4="TypeScript"            
            level1="w-[95%]"
            level2="w-[93%]"
            level3="w-[90%]"
            level4="w-[85%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
