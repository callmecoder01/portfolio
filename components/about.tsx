"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hey there! I’m a Full Stack Developer with 3+ years of experience building backend systems and modern UIs that actually solve real problems. I work mainly with JavaScript, TypeScript, Node.js, and React—but I’m just as comfortable diving into infrastructure, APIs, or DevOps pipelines when needed.
      </p>

      <p className="mb-3">
        Over the years, I’ve worked with startups and global teams to ship production-grade apps in industries like e-commerce, SaaS, and on-demand booking. Projects like the Hurry App, Homehandy, and Billin  taught me a lot about clean architecture, scalable APIs, and collaborating across teams. I also enjoy working with tools like Docker, GitHub Actions, AWS, and GCP to keep things running smoothly.
      </p>

      <p>
        <span className="italic">When I’m not coding</span>, I’m usually on a cricket field, lifting weights at the gym, or catching a movie. I’m big on learning—whether it’s picking up a new tech stack or exploring random curiosities on weekends. That constant drive to learn and improve is what keeps me going.
      </p>
    </motion.section>
  );
}
