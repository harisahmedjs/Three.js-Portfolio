'use client';
import React, { useState } from "react";
import Image from "next/image";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 sm:px-8 md:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-2 sm:px-4 md:px-10">
        {/* Logo / Brand Name */}
        <a href="#about-me" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold ml-2 md:ml-4 hidden sm:block text-gray-300">
            Haris Ahmed
          </span>
        </a>

        {/* Hamburger Button (only visible on small screens) */}
        <div className="sm:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white text-3xl">
            {isMenuOpen ? "X" : "="}
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex w-[300px] md:w-[500px] h-full items-center justify-between md:-mr-24">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-4 md:px-[20px] py-[8px] rounded-full text-gray-200">
            <a href="/" className="cursor-pointer text-sm md:text-base">Home</a>
            <a href="/about" className="cursor-pointer text-sm md:text-base">About Me</a>
            <a href="/skills" className="cursor-pointer text-sm md:text-base">Skills</a>
            <a href="/projects" className="cursor-pointer text-sm md:text-base">Projects</a>
           
          </div>
        </div>

        {/* Social Links */}
        <div className="hidden sm:flex flex-row items-center gap-3 sm:gap-4 md:gap-5">
          <a href="https://github.com/harisahmedjs" target="_blank" rel="noopener noreferrer">
          <VscGithubInverted  className="text-white text-3xl" />
          </a>
          {/* <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Image src="/images/insta.png" alt="Instagram" width={30} height={30} className="w-6 sm:w-8 md:w-10" />
          </a> */}
          <a href="https://www.linkedin.com/in/haris-ahmed-3b5643279/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white text-3xl" />
</a>

        </div>
      </div>

      {/* Mobile Menu (only visible when menu is open) */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } sm:hidden flex-col items-center justify-center bg-[#0300145e] absolute w-full top-[65px] left-0 py-5`}
      >
        <a href="/" className="text-gray-200 py-2">Home</a>
        <a href="/about" className="text-gray-200 py-2">About Me</a>
        <a href="/skills" className="text-gray-200 py-2">Skills</a>
        <a href="/projects" className="text-gray-200 py-2">Projects</a>
        
        
        {/* Social Links for Mobile */}
        <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-5 mt-5">
          <a href="https://github.com/Haris Ahmedn12" target="_blank" rel="noopener noreferrer">
          <VscGithubInverted  className="text-white text-xl" />
          </a>
          {/* <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <Image src="/images/insta.png" alt="Instagram" width={30} height={30} className="w-6 sm:w-8 md:w-10" />
          </a> */}
          <a href="https://www.linkedin.com/in/Haris Ahmed-nisar-3135a42b3/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
