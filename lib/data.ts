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
    title: "Software Developer At Supreme It Solutions",
    location: "Kathmandu",
    description:
      "I worked as a Software Developerfor 6 Months.I also upskilled to the full stack.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Freelance ",
    location: "Kathmandu",
    description:
      "I worked as freelance for 4 months.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Intern",
    location: "Kathmandu",
    description:
      "Gained hands-on experience in software development life processes, including design, coding, testing, anddebugging.",
    icon: React.createElement(FaReact),
    date: "2022",
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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
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
