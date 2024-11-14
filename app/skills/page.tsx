'use client'
import React from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaFigma, FaPython } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiUikit , SiTailwindcss } from 'react-icons/si'
import { TbUserCircle } from 'react-icons/tb'
import { motion } from 'framer-motion'

const SkillsSection = () => {
  const skills = [
    { icon: <FaHtml5 />, color: '#E34F26', name: 'HTML' },
    { icon: <FaCss3Alt />, color: '#1572B6', name: 'CSS' },
    { icon: <FaJs />, color: '#F7DF1E', name: 'JavaScript' },
    { icon: <SiNextdotjs />, color: '#FFFFFF', name: 'Next.js' },
    { icon: <SiTypescript />, color: '#3178C6', name: 'TypeScript' },
    { icon: <FaFigma />, color: '#F24E1E', name: 'Figma' },
    { icon: <TbUserCircle />, color: '#FF5722', name: 'User Research' },
    { icon: <SiUikit />, color: '#3DDC84', name: 'UX/UI' },
    { icon: <FaGithub />, color: '#181717', name: 'GitHub' },
    { icon: <FaPython />, color: '#3776AB', name: 'Python' },
    { icon: <SiTailwindcss />, color: '#06B6D4', name: 'Tailwind CSS' },
  ];

  return (
    
    <div className="flex flex-col items-center justify-center p-10  min-h-screen">
        <br />
        
      <h2 className="text-3xl md:text-4xl  font-bold mb-8 text-purple-200 glow-text">MY SKILLS</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center text-center p-4 rounded-lg shadow-lg space-card  transition-transform transform hover:scale-105"
          >
            <div
              className="text-5xl md:text-6xl"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <p className="mt-2 text-lg text-gray-300">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
