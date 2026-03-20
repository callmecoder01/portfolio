import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { MdOutlineComputer } from "react-icons/md";
import mernProImg from "@/public/mernPro.png";
import billingImg from "@/public/billin.png";
import bookingImg from "@/public/booking.png";
import oneSysImg from "@/public/1sys.png";
import hurryAppImg from "@/public/HurryApp.png";
import homeHandy from "@/public/HomeHandy.png";
import nativus from "@/public/nativus.png";
import thinko from "@/public/thinko.jpg";
import biLingual from "@/public/bilingual.jpg";

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
    title: "Full Stack Developer (Backend & DevOps) at Probits Pty Ltd",
    location: "Lalitpur, Nepal",
    description:
      "Architected scalable backend systems using NestJS and Express with 99.9% uptime. Deployed on AWS and GCP handling 10K+ daily API requests. Automated CI/CD pipelines and mentored junior developers.",
    highlights: [
      "Architected scalable backend systems using NestJS and Express, delivering RESTful APIs for international client products with 99.9% uptime",
      "Deployed production applications on AWS and GCP with auto-scaling, handling 10K+ daily API requests across multiple services",
      "Automated CI/CD pipelines using GitHub Actions, streamlining deployment workflows across multiple environments",
      "Mentored junior developers through code reviews and pair programming, improving team code quality and consistency",
    ],
    techStack: ["NestJS", "Express", "AWS", "GCP", "GitHub Actions", "Docker", "PostgreSQL"],
    icon: React.createElement(MdOutlineComputer),
    date: "March 2025 – Present",
  },
  {
    title: "Full Stack Developer at Silk Innovation",
    location: "Lalitpur, Nepal",
    description:
      "Built production apps using NestJS, PostgreSQL, and React serving 5K+ active users. Containerized with Docker, configured Nginx load balancing, and optimized with Redis caching for zero-downtime deployments.",
    highlights: [
      "Built and shipped production applications using NestJS, PostgreSQL, and React, serving 5K+ combined active users",
      "Containerized applications with Docker and configured Nginx load balancing, achieving zero-downtime deployments on DigitalOcean and AWS",
      "Optimized database queries and added Redis caching, reducing average API response times across all services",
    ],
    techStack: ["NestJS", "PostgreSQL", "React", "Docker", "Nginx", "Redis", "DigitalOcean", "AWS"],
    icon: React.createElement(MdOutlineComputer),
    date: "April 2024 – April 2025",
  },
  {
    title: "Full Stack Developer at Supreme IT Solution",
    location: "Kathmandu, Nepal",
    description:
      "Delivered client-facing web applications end-to-end. Built responsive React frontends with RESTful Node.js backends, improving Core Web Vitals through lazy loading and code splitting.",
    highlights: [
      "Delivered client-facing web applications end-to-end from requirements to production, consistently meeting sprint deadlines",
      "Built responsive React frontends integrated with RESTful Node.js backends, improving Core Web Vitals scores through lazy loading and code splitting",
      "Reduced cross-browser compatibility issues by implementing responsive design patterns and automated browser testing",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs"],
    icon: React.createElement(MdOutlineComputer),
    date: "Feb 2023 – April 2024",
  },
  {
    title: "Full Stack Developer Intern at Protech Nepal",
    location: "Kathmandu, Nepal",
    description:
      "Worked on full lifecycle development: built RESTful APIs, implemented secure authentication, and contributed to product releases.",
    highlights: [
      "Worked on full lifecycle development from planning to deployment",
      "Built RESTful APIs and implemented secure authentication flows",
      "Contributed to product releases and collaborated with senior engineers",
    ],
    techStack: ["Node.js", "React", "MongoDB", "Express", "Git"],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2022 – Jan 2023",
  },
] as const;

export const projectsData = [
  {
    title: "ThinkO Learning Platform",
    description:
      "A multi-school SaaS platform for course delivery, AI-powered quiz generation, and adaptive video streaming. Features role-based access, AWS Lambda AI pipelines, HLS streaming, and real-time quiz engine.",
    tags: ["Node.js", "TypeScript", "PostgreSQL", "AWS Lambda", "S3", "HLS", "Firebase"],
    imageUrl: thinko,
  },
  {
    title: "BiLinguaLearn",
    description:
      "An AI-powered language learning platform where users practice real-time conversations with an AI tutor. Features sub-second latency streaming, Stripe credit-based payments, and Clerk authentication.",
    tags: ["NestJS", "TypeScript", "Stripe", "Clerk", "AI/LLM", "React"],
    imageUrl: biLingual,
  },
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
  "Python",
  "Golang",
  "React",
  "Next.js",
  "Vue.js",
  "Tailwind CSS",
  "Material UI",
  "Redux",
  "Zustand",
  "React Query",
  "Node.js",
  "Express.js",
  "NestJS",
  "Django",
  "Strapi CMS",
  "REST APIs",
  "Microservices",
  "PostgreSQL",
  "MongoDB",
  "MySQL",
  "Redis",
  "TypeORM",
  "Mongoose",
  "Docker",
  "Kubernetes",
  "Nginx",
  "AWS",
  "GCP",
  "DigitalOcean",
  "GitHub Actions",
  "CI/CD",
  "Socket.IO",
  "Stripe",
  "Clerk",
  "Git",
  "Linux",
  "N8N",
  "System Design",
] as const;
