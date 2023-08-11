
"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { motion } from 'framer-motion'


const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
}

function getSkillStyle(skill: String) {
  if (skill === "C/C++") {
    return "bg-gradient-to-r from-blue-400 to-blue-900 text-white font-bold"
  }
  if (skill === "Python") {
    return "bg-gradient-to-r from-blue-400 to-yellow-300 text-white font-bold "
  }
  if (skill === "HTML") {
    return "bg-orange-500 text-white font-bold"
  }
  if (skill === "CSS") {
    return "bg-gradient-to-r from-sky-300 to-blue-900 text-white font-bold border-style:solid border-yellow-800 "
  }
  if (skill === "JavaScript") {
    return "bg-yellow-400  font-bold"
  }
  if (skill === "TypeScript") {
    return "bg-gradient-to-r from-sky-300 to-blue-900 text-white font-bold "
  }
  if (skill === "React") {
    return "bg-gradient-to-r from-cyan-200 to-cyan-600 text-white"
  }
  if (skill === "Firebase") {
    return "bg-gradient-to-r from-orange-200 to-amber-600 text-white"
  }
  if (skill === "Hugging Face") {
    return "bg-gradient-to-r from-yellow-400 to-amber-300"
  }
  if (skill === "OpenCV") {
    return "bg-gradient-to-r from-blue-400 via-green-500 to-red-300 text-white "
  }
  if (skill === "Next.js") {
    return "bg-gradient-to-r from-gray-700 text-white"
  }
  if (skill === "Node.js") {
    return "bg-gradient-to-r from-green-600 to-green-700 text-white"
  }
  if (skill === "Git") {
    return "bg-red-500 text-white"
  }
  if (skill === "Streamlit") {
    return "bg-gradient-to-r from-red-700 to-red-500 text-white "
  }
  if (skill === "Tailwind") {
    return "bg-gradient-to-r from-cyan-700 to-cyan-500 text-white "
  }
}


export default function Skills() {
  return (
    <section id="skills" className="mb-10 max-w-[53rem] mt-6 scroll-mt-28 text-center sm:mb-20">
      <SectionHeading>
        My Skills
      </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {
          skillsData.map((skill, index) => (
            <motion.li 
              key={index} 
              className={`p-2 px-5 py-3 rounded-xl border-none shadow-xl ${getSkillStyle(skill)}`}
              variants={fadeInAnimationVariants}
              initial="initial"
              viewport={{
                once: true,
              }}
              whileInView="animate"
              custom={index}
              >{skill}</motion.li>
          ))
        }
      </ul>
    </section>
  )
}
