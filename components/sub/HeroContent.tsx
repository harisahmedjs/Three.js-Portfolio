'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/ulits/motion';
import { SparklesIcon } from '@heroicons/react/16/solid';

const HeroContent = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  const toggleContact = () => {
    setIsContactVisible(!isContactVisible);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 mt-20 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center lg:text-start lg:items-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] px-[5px] border border-[#7042f88b] opacity-[0.9] flex items-center justify-center lg:justify-start"
        >
          <SparklesIcon className="text-[#b49bff] mr-2 h-5 w-5" />
          <h1 className="Welcome-text text-xs lg:text-sm">
            UX/UI Designer & Front-end Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-0 mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-full lg:max-w-[600px] w-auto h-auto"
        >
          <span>Crafting Digital</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> Experiences </span>
          <span>with Passion and Precision</span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 my-4 max-w-full lg:max-w-[600px]"
        >
          Hi, I'm Haris Ahmed! A passionate front-end developer and UX/UI designer with a love for creating seamless, visually stunning web experiences. I believe in the power of intuitive design to make digital products not just functional, but delightful. When I'm not coding, you’ll find me playing badminton, cooking up something new, or exploring creative ideas. Let’s build something amazing together!
        </motion.p>

        <motion.a
          variants={slideInFromLeft(1)}
          onClick={toggleContact}
          className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-full lg:max-w-[200px] self-center lg:self-start text-2xl "
        >
          Contact
        </motion.a>

        {/* Conditional rendering of contact details */}
        {isContactVisible && (
          <div className="mt-4 text-gray-200 text-2xl">
            <p>Email: <a href="harisahmednetwork@gmail.com" className="text-blue-400">harisahmednetwork@gmail.com</a></p>
            <p>Phone: <a href="+92 310 3159060" className="text-blue-400">+92 310 3159060</a></p>
          </div>
        )}
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center mt-8 lg:mt-0"
      >
        <Image 
          src="/images/mainIconsdark.svg"
          alt="work icons"
          height={450}
          width={450}
          className="max-w-[80%] md:max-w-[60%] lg:max-w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
