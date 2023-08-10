import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "./public/docgptimage.jpg";
import rmtdevImg from "./public/scoop-scouter.jpg";
import wordanalyticsImg from "./public/honk-stonks.png";

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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "DocGPT",
    description:
      "Ai powered chatbot that can work locally using GPT4All LLMs. Users can upload multiple PDFs locally to interact with the chatbot.",
    tags: ["Python", "Streamlit", "Langchain", "Hugging Face", "Firebase"],
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
      "A data visualization tool for stocks .",
    tags: ["React", "ReChart", "FinnHub", "TailwindCSS", "Firebase"],
    imageUrl: wordanalyticsImg,
    repo: "https://github.com/BlackTulipLatte/stock_tracker",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "TailwindCSS",
  "Prisma",
  "Python",
  "Django",
  "Framer Motion",
] as const;