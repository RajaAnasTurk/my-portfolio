import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Front End Developer",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "User Experience Enthusiast",
        1500,
        "Code Wizards",
        1500,
        "Using Nextjs,Reactjs",
        1500,
      ]}
      speed={50}
       className="text-[1rem] md:text-[2rem] text-[#55e6a5] font-bold uppercase"
        repeat={Infinity}
    />
  );
};

export default TextEffect;
