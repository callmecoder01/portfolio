import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import mernProImg from "@/public/mernPro.png";
import billingImg from "@/public/billin.png";
import bookingImg from "@/public/booking.png";
import oneSysImg from "@/public/1sys.png";

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
    description: `I developed robust backend systems for projects like Jhattai-Booking and One-Sys App. My work involved creating user booking systems, admin dashboards, and integrating APIs with Next.js. Additionally, I containerized apps using Docker, optimized web server performance with Nginx, and deployed projects on DigitalOcean with AWS S3 integration.`,
    icon: React.createElement(MdOutlineComputer),
    date: "2024 Apr - Present",
  },
  {
    title: "Software Developer At Supreme It Solutions",
    location: "Kathmandu",
    description: `Led full-stack projects using Next.js, React, Node.js, MongoDB, and MySQL. Built responsive UIs with Material-UI, Tailwind CSS, and Framer Motion, while handling back-end with Express.js, Nest.js, and PostgreSQL. Designed RESTful APIs, implemented secure authentication, and deployed apps on DigitalOcean, AWS, Vercel, and Render.`,
    icon: React.createElement(MdOutlineComputer),
    date: "Sep 2023 - Apr 2024",
  },

  {
    title: "Intern",
    location: "Kathmandu",
    description:
      "Worked closely with a team of software engineers to create and implement software solutions.Got practical experience in all stages of software development, like designing, coding, testing, and fixing bugs.",
    icon: React.createElement(MdOutlineComputer),
    date: "Jun 2023 - Aug 2022",
  },
  {
    title: "Freelance ",
    location: "Kathmandu",
    description: "i worked as freelance developer. ",
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2022 - May 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Jhattai-booking-app",
    description:
      "A booking app allowing users to book services (gym, doctor, etc.) with online/offline payments. Vendors manage packages and bookings via a dashboard.",
    tags: ["React", "Node", "MongoDB", "Tailwind", "Firebase"],
    imageUrl: bookingImg,
  },
  {
    title: "One_system-app",
    description:
      "A dynamic service booking app with pickup/drop-off locations. Geeks are assigned to drivers for efficient service delivery, with fair charge calculations.",
    tags: ["Node js", "Express js", "TypeScript", "Tailwind", "Firebase", "S3","postgis",],
    imageUrl: oneSysImg,
  },
  {
    title: "Billin",
    description:
      "A system for managing product purchases, sales, and warehouse operations, with integrated point-of-sale and inventory management.",
    tags: ["Next js", "Tailwind", "Firebase", "React Query", "React Hook", "RizzUI"],
    imageUrl: billingImg,
  },
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
  "MongoDB",
  "Tailwind",
  "Python",
  "Django",
  "Framer Motion",
  "HTML",
  "CSS",
] as const;
