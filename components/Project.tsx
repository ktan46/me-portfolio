"use client"
import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import { projectsData } from '@/lib/data'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'


export default function Projects() {
  return ( 
    <section className="mt-1 scroll-mt-28" id="projects">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {
          projectsData.map((project, index) => (
            <React.Fragment key={index}>
              <Project {...project}/>
            </React.Fragment>
          ))}
      </div>
    </section>
  ) 
}

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
  repo
}: ProjectProps) {
  
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.25 1"],
  })
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (<motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className="mb-3 sm:mb-8 last:mb-0 "
        >
      <section 
        className="group bg-gray-100 hover:bg-gray-200 transition max-w-[42rem] shadow-xl overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0">
        <div className="pb-5 px-5 sm:pl-10 sm:max-w-[50%] flex flex-col h-full ">
          <a href={repo} target="_blank" className="text-2xl font-semibold mt-5">{title}</a>
          <p className="mt-2 mr-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <a href={repo} target="_blank">
        <div>
        <Image  src={imageUrl} alt={title} quality={100} 
          className="group-hover:scale-[1.15] group-active:scale-[1.05] group-hover:-translate-x-5 group-hover:translate-y-3 group-hover:-rotate-2 transition absolute top-8 -right-40 w-[30rem] rounded-lg shadow-2xl group-even:-right-[initial] hidden sm:block"/>
        </div>
        </a>
      </section>
  </motion.div>)
}