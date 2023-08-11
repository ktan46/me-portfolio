import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "/public/docgptimage.jpg";
import rmtdevImg from "/public/scoop-scouter.jpg";
import wordanalyticsImg from "/public/honk-stonks.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
/**  {
    name: "Contact",
    hash: "#contact",
  },
  */
] as const;

export const experiencesData = [
  {
    title: "University of Waterloo",
    location: "Waterloo, ON, Canada",
    description:
      "Currently majoring in Computational Mathematics and Combinatorics & Optimization with Co-op. I am open to full-time opportunities for Winter 2024 and Spring 2024.",
    icon: React.createElement(LuGraduationCap),
    date: "Sept 2021 - Present",
  },
  {
    title: "WeAccelerate Manulife Program",
    location: "Remote",
    description:
      "Bootcamp working with Manulife mentors to develop web applications built on Vite using React, Node, Express and Tailwind CSS.",
    icon: React.createElement(FaReact),
    date: "May 2023 - August 2023",
  },
  {
    title: "Full Stack Developer",
    location: "Remote",
    description:
      "Developing educational web applications at the startup Hatch Coding. My tech stack is React, Node, Next.js, Tailwind CSS, Express.js and Google Firebase.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2023 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "DocGPT",
    description:
      "Ai powered chatbot that can work locally using GPT4All LLMs. Users can upload multiple PDFs locally to interact with the chatbot.",
    tags: ["Python", "Langchain", "Firebase", "Hugging Face", "Streamlit"],
    imageUrl: corpcommentImg,
    repo: "https://github.com/ktan46/docgpt",
  },
  {
    title: "Scoop Scouter",
    description:
      "An ice cream truck tracking Android app that uses user-sourced truck sightings and truck verification using computer vision. ",
    tags: ["Java", "OpenCV", "Google Maps", "Firebase"],
    imageUrl: rmtdevImg,
    repo: "https://github.com/jutinwang/DeerHacks-2023-Scoop-Scouter",
  },
  {
    title: "Honk Stonks",
    description:
      "A data visualization tool for stocks using beauitful Tailwind CSS with user Authentication with Google Firebase.",
    tags: ["React", "ReChart", "FinnHub", "TailwindCSS", "Firebase"],
    imageUrl: wordanalyticsImg,
    repo: "https://github.com/BlackTulipLatte/stock_tracker",
  },
] as const;

export const skillsData = [
  "C/C++",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Firebase",
  "Hugging Face",
  "OpenCV",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Streamlit",
] as const;
