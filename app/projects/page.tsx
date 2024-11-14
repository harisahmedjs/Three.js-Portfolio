'use client'
import React from 'react'
import { motion } from 'framer-motion'

const projects = [
 { name: 'Background Remover', description: ' Typescript ', link: 'https://editor-ts.netlify.app/', image: '/images/editor.PNG' },
  { name: 'Filimo School', description: 'Nextjs ', link: 'https://filmo-school.vercel.app/', image: '/images/filimo.PNG' },

];

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 min-h-screen">
        <br />

      {/* Adjusted Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 mt-10 text-purple-200 glow-text">MY PROJECTS</h2>

      <div className="flex flex-wrap justify-center gap-8 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
        {projects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
              borderColor: "#6e40e3",
              top: "-5px",
            }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center text-center p-6 rounded-lg space-card bg-[#2b2d3b] transition-all duration-300 transform hover:scale-105 relative border-4 border-transparent hover:border-[#6e40e3]"
            style={{ width: '250px', height: '350px' }} // Set fixed size for the cards
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <div className="text-lg text-gray-300">{project.name}</div>
            <p className="mt-2 text-sm text-gray-400">{project.description}</p>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#6e40e3" }} // Button hover effect
              whileTap={{ scale: 0.95 }}
              className="mt-4 px-4 py-2 rounded-md bg-[#6e40e3] text-white  font-semibold shadow-lg transition-all duration-300"
            >
              View Project
            </motion.button>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
