import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";

import mernProImg from "@/public/mernPro.png";
import billingImg from "@/public/billin.png";
import bookingImg from "@/public/booking.png";
import oneSysImg from "@/public/1sys.png";
import ecommersImg from "@/public/ecommers.png";
import hurryAppImg from "@/public/HurryApp.png"
import homeHandy from "@/public/HomeHandy.png"
import nativus from "@/public/nativus.png"

import NewsportalImg from "@/public/newsportal.png";

export const links = [
  { name: "Home", hash: "#home" },
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  { name: "Skills", hash: "#skills" },
  { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
] as const;

export const experiencesData = [
  {
    title: "Backend Developer at Probits Pty Ltd",
    location: "Lalitpur, Nepal",
    description:
      "Built and maintained scalable backend systems using NestJS and Express. Deployed apps to AWS/GCP, integrated third-party services, and collaborated with remote teams. Led CI/CD setup, code reviews, and system performance optimizations.",
    icon: React.createElement(MdOutlineComputer),
    date: "March 2025 – Present",
  },
  {
    title: "Full Stack Developer at Silk Innovation",
    location: "Lalitpur, Nepal",
    description:
      "Developed full-stack apps like Jhattai Booking and One-Sys. Worked with NestJS, PostgreSQL, and React. Set up Docker, Nginx, CI/CD, and optimized deployments on DigitalOcean and AWS.",
    icon: React.createElement(MdOutlineComputer),
    date: "April 2024 – April 2025",
  },
  {
    title: "Full Stack Developer at Supreme IT Solution",
    location: "Kathmandu, Nepal",
    description:
      "Created scalable web apps with React and Node.js. Designed secure REST APIs, optimized performance, and implemented frontend features with Tailwind CSS, Material UI, and Framer Motion.",
    icon: React.createElement(MdOutlineComputer),
    date: "Feb 2023 – April 2024",
  },
  {
    title: "Full Stack Developer Intern at Protech Nepal",
    location: "Kathmandu, Nepal",
    description:
      "Worked on full lifecycle development: built RESTful APIs, implemented secure authentication, and contributed to product releases.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2022 – Jan 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Hurry App",
    description:
      "A Tinder-style e-commerce platform where users swipe on products to unlock discounts from active vendor campaigns. Features multi-role access, real-time chat, and campaign management.",
    tags: ["Node.js", "Express", "React", "MongoDB", "Socket.IO", "Tailwind"],
    imageUrl: hurryAppImg,   
  },
  {
    title: "Homehandy",
    description:
      "An on-demand marketplace connecting homeowners with local service providers. Features dual-role access, Google Maps integration, WebSocket-based chat, and secure payments.",
    tags: ["NestJS", "PostgreSQL", "React", "Google Maps API", "Tailwind", "WebSockets"],
    imageUrl: homeHandy,
  },
  {
    title: "Jhattai Booking App",
    description:
      "A multi-service booking app for gyms, futsal, doctor appointments, and more. Includes vendor modules, booking logic, and role-based access control.",
    tags: ["NestJS", "PostgreSQL", "React", "TypeScript", "Tailwind"],
    imageUrl: bookingImg,
  },
  {
    title: "One System App",
    description:
      "A booking platform for household services like laundry and electronics repair. Includes pickup/drop-off handling, location-based service assignment, and smart pricing logic.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "PostGIS", "Docker", "S3", "Tailwind"],
    imageUrl: oneSysImg,
  },
  {
    title: "Billin",
    description:
      "SaaS platform used by FORD and OMODA to manage sales, invoicing, POS, and inventory. Built with reusable UI builders, secure RBAC, and advanced reporting.",
    tags: ["Next.js", "Tailwind", "Redux Toolkit", "React Query", "RizzUI"],
    imageUrl: billingImg,
  },
  {
    title: "Go_ECL",
    description:
      "An AI-powered forecasting tool that predicts bank loan recovery using historical economic data. Includes LLM integration and an interactive analytics dashboard.",
    tags: ["Next.js", "Python", "LLMs", "Tailwind", "REST API", "Chart.js"],
    imageUrl: nativus, // Replace with relevant image if needed
  },
  {
    title: "Real Estate Website",
    description:
      "Full-stack real estate listing platform with user authentication, listing management, and paginated search functionality.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind", "Firebase"],
    imageUrl: mernProImg,
  },
] as const;


export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express.js",
  "NestJS",
  "Loopback",
  "Django",
  "Strapi CMS",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Oracle",
  "Redis",
  "Tailwind CSS",
  "Material UI",
  "RizzUI",
  "Redux",
  "Zustand",
  "React Query",
  "RTK Query",
  "React Hook Form",
  "Docker",
  "Kubernetes",
  "Git",
  "GitHub Actions",
  "Bitbucket",
  "AWS",
  "GCP",
  "DigitalOcean",
  "Vercel",
  "Render",
  "Socket.IO",
  "Linux",
  "Python",
  "HTML",
  "CSS",
  "N8N",
] as const;
