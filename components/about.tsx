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
        With a strong passion for problem-solving and a natural curiosity for emerging technologies, I thrive in
        environments where I can tackle multidisciplinary challenges. I believe in continuous learning, and my drive to
        stay on the cutting edge of tech helps me deliver innovative solutions. I’m always looking for ways to push
        boundaries, whether in development or in life. My ability to collaborate effectively makes me a strong team
        player, and I’m just as comfortable leading projects as I am contributing to a team effort.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, you can find me enjoying a game of cricket, hitting the
        gym, or watching the latest movies. I’m always seeking new hobbies and skills to master, whether it’s picking up
        a new sport or diving into a book on a completely new topic. Life outside of code is where I get my creative
        energy to fuel my next project.
      </p>
    </motion.section>
  );
}
