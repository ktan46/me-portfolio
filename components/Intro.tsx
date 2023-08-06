"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.5}}
            animate={{ opacity: 1, scale: 1}}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image 
              src={"/me.png"}
              alt="jumpscare.png" 
              priority={true} 
              width={100}
              quality={100} 
              height={100}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow"
            />
          </motion.div>
          
           <motion.span className="text-4xl absolute top-0 right-0 " 
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          type: 'spring',
                          stiffness: 150,
                          delay: 0.15,
                          duration: 0.9,
                        }}>👋</motion.span>
        </div>
      </div>
        <motion.p className="text-slate-700 mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                  initial={{ opacity:0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
        > 
          Hi, and welcome! {" "}
          <span className="font-bold">
            I&apos;m Kyle.
          </span>{" "} I&apos;m a software developer studying at the
          <span className="font-bold"> {" "} 
            University of Waterloo {" "} 
          </span>majoring in {" "} 
          <span className="font-bold">
            Mathematics 
          </span> specializing in {" "} 
          <span className="font-bold">
            Computational Mathematics and Combinatorics & Optimization. 
          </span> {" "} 
           <span className="italic">*Breathes*  </span> {" "} 
           My main focus is in {" "} 
           <span className="font-bold">
           full-stack web development
          </span> {" "} with a passion for {" "}
          <span className="underline">
            machine learning
          </span> {" "} on the side.
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y:0 }}
          transition={{
            delay: 0.2,
          }}>
          <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex shadow-md items-center gap-2 rounded-full 
              outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
            Contact me here {" "}<BsArrowRight className="opacity-60 group-hover:translate-x-1 transition"/></Link>

          <a className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full shadow-md
              outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer"
              href="/resume20230805.pdf" download>Download CV
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition"/>
          </a>

          <a className="bg-white p-4 text-gray-600 text-[1.35rem] shadow-md flex items-center gap-2 rounded-full
                        focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer"
                        href="https://linkedin.com/in/kyle-tan2061" target="_blank">
            <BsLinkedin />
          </a>

          <a className="bg-white p-4 text-gray-600 text-[1.35rem] shadow-md flex items-center gap-2 rounded-full
                        focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer"
                        href="https://github.com/ktan46" target="_blank">
            <FaGithubSquare />
          </a>
        </motion.div>
    </section>
  )
}
