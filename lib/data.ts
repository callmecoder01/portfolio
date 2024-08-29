import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import mernProImg from "@/public/mernPro.png";
import ecommersImg from "@/public/ecommers.png";
import NewsportalImg from "@/public/newsportal.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
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
    title: "Backend Developer At Silk-inovation",
    location: "Kathmandu",
    description:
      "I worked as a Backend Developer UpSkill and gained hands-on experience in software development.",
    icon: React.createElement(LuGraduationCap),
    date: "2024 Apr - Present",
  },
  {
    title: "Software Developer At Supreme It Solutions",
    location: "Kathmandu",
    description:
      "I worked as a Fullstack Developer And Gained hands-on experience in software developmen.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 2023 - Apr 2024",
  },
  
  {
    title: "Intern",
    location: "Kathmandu",
    description:
      "Worked closely with a team of software engineers to create and implement software solutions.Got practical experience in all stages of software development, like designing, coding, testing, and fixing bugs.",
    icon: React.createElement(FaReact),
    date: "Jun 2023 - Aug 2022",
  },
  {
    title: "Freelance ",
    location: "Kathmandu",
    description:
      "i worked as freelance developer. ",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2022 - May 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Real estate full stack project",
    description:
      "Built a responsive real estate.Implemented user authentication, allowing seamless signup,Implemented pagination for efficient search result navigatio",
    tags: ["React", "Node", "MongoDB", "Tailwind", "Firebase"],
    imageUrl: mernProImg,
  },
  {
    title: "Ecommers",
    description:
      "created an e-commerce website with an admin dashboardutilizing Tailwind CSS, TypeScript, and Next.js to improve user experience and streamline online store management",
    tags: ["React", "javascript", "Next.js", "Tailwind", "Redux"],
    imageUrl: ecommersImg,
  },
  {
    title: "News Portal",
    description:
      "Created a news portal with an admin dashboardutilizing React, Next.js, and Strapi to provide a seamless and efficient user experience with admin dashboard",
    tags: ["React", "Next.js", "Strapi", "Tailwind", "Framer"],
    imageUrl: NewsportalImg,
  },
] as const;

export const skillsData = [
  "Express",
  "Nest",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Docker",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
