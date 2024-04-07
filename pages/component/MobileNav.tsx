import { XMarkIcon } from '@heroicons/react/20/solid';
import React from 'react'

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "transalte-x-0" : "translate-x-[100%]"; // Note: Changed to translate-x-[100%]
  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-gray-800`}>
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className='nav-link-mobile'><a href="#home" onClick={closeNav}>HOME</a></div>
        <div className='nav-link-mobile'><a href="#services" onClick={closeNav}>SERVICES</a></div>
        <div className='nav-link-mobile'><a href="#about" onClick={closeNav}>ABOUT</a></div>
        <div className='nav-link-mobile'><a href="#projects" onClick={closeNav}>PROJECT</a></div>
        <div className='nav-link-mobile'><a href="#blog" onClick={closeNav}>BLOG</a></div>
        <div className='nav-link-mobile'><a href="#contact" onClick={closeNav}>CONTACT</a></div>
      </div>
      <div
        onClick={closeNav}
        className="absolute z-[10000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-200"
      >
        <XMarkIcon />
      </div>
    </div>
  )
}

export default MobileNav;
