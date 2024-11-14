'use client';
import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-start justify-start text-gray-100 p-6">
        <br />
        <br />

      {/* About Me Section */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold relative text-purple-500 mb-8  p-4 rounded-md"
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span className="relative z-10">A Journey Through Creativity & Code</span>
        <span className="absolute inset-0 blur-lg opacity-60 bg-slate-600 rounded-full animate-pulse"></span>
      </motion.h1>

      <motion.p
        className="max-w-3xl text-left text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
      >
        Hi! I'm Haris Ahmed, a passionate front-end developer, UX/UI designer, and lifelong learner. My journey in technology began with a simple curiosity about how websites are built, and now, it's my full-time obsession. I believe in creating web experiences that not only look stunning but also feel intuitive and user-friendly. Whether it's designing beautiful user interfaces or developing smooth web applications, my goal is to make the digital world more accessible, engaging, and delightful for everyone.
      </motion.p>

      {/* My Journey Section */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold relative text-purple-500 mb-8  p-4 rounded-md"
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span className="relative z-10">The Tech Journey</span>
        <span className="absolute inset-0 blur-lg opacity-60 bg-slate-600 rounded-full animate-pulse"></span>
      </motion.h2>

      <motion.p
        className="max-w-3xl text-left text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
      >
        My journey started with a fascination for how the backend of websites functioned, but quickly evolved into a love for web development and design. After diving into IT Automation and earning my certification in Python, I expanded my skills into UI/UX design, which allowed me to blend technical knowledge with a keen sense of aesthetics. I thrive on learning new things, pushing the boundaries of design and technology, and continuing to evolve as a front-end developer.
      </motion.p>

      {/* Hobbies Section */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold relative text-purple-500 mb-8  p-4 rounded-md"
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span className="relative z-10">Hobbies & Passions</span>
        <span className="absolute inset-0 blur-lg opacity-60 bg-slate-600 rounded-full animate-pulse"></span>
      </motion.h2>
      <motion.p
        className="max-w-3xl text-left text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
      >
        Outside of coding and design, I am a passionate badminton player, cook, and advocate for creativity. Whether I'm competing on the badminton court or experimenting with new recipes in the kitchen, I find joy in both active and creative pursuits. These activities fuel my creativity, help me recharge, and bring balance to my life, allowing me to stay focused and motivated in my professional journey.
      </motion.p>

      {/* Education Section */}
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold relative text-purple-500 mb-8  p-4 rounded-md"
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span className="relative z-10">Education & Certifications</span>
        <span className="absolute inset-0 blur-lg opacity-60 bg-slate-600 rounded-full animate-pulse"></span>
      </motion.h2>

      <motion.p
        className="max-w-3xl text-left text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
      >
        I completed my  Intermediate studies in 2024. In addition, I hold certifications in Web Developmnet , Telecommunications which has enhanced my expertise in building engaging, user-centered digital experiences. My educational journey continues, as I always strive to deepen my knowledge and stay updated with the latest technologies in web development and Telecommunications
      </motion.p>

      {/* Experience Section */}
      {/* <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold relative text-purple-500 mb-8  p-4 rounded-md"
        initial={{ opacity: 0, x: -50, y: -50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <span className="relative z-10">Leadership & Experience</span>
        <span className="absolute inset-0 blur-lg opacity-60 bg-slate-600 rounded-full animate-pulse"></span>
      </motion.h2>

      <motion.p
        className="max-w-3xl text-left text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
      >
        As a student leader at GIAIC, I've had the opportunity to mentor and guide peers in their tech journeys. Whether assisting with coding challenges or helping fellow students with their projects, I strive to be a resource and a guide for others. This experience has enhanced my leadership, communication, and problem-solving skills, preparing me to take on greater responsibilities and lead projects in the future.
      </motion.p> */}
    </div>
  );
};

export default AboutPage;
