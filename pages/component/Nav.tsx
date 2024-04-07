import { Bars3Icon } from "@heroicons/react/20/solid";
import { Link } from "react-scroll";
import React from "react";

interface Props {
  openNav: () => void;
}
const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] fixed z-[1000] top-0 h-[12vh] bg-gray-800 shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          RAJA
          <span className="text-yellow-200">ANAS</span>
        </h1>
        <div className="nav-link">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            HOME
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            ABOUT
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            SERVICES
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            PROJECTS
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="blog"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            BLOG
          </Link>
        </div>
        <div className="nav-link">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            CONTACT
          </Link>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-200" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
