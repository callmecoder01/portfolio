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
  Bringing a strong track record in problem-solving and a keen curiosity for emerging technologies. My passion for learning drives me to stay on the cutting edge of the tech landscape, while my ability to collaborate effectively makes me a valuable team player. I thrive in environments where I can tackle multidisciplinary challenges and contribute innovative solutions. My core stack includes{" "}
  <span className="font-medium">Express ,Nest ,React, Next.js, Node.js, MongoDB, PostgreSQL</span>
  . I am also proficient in TypeScript and Prisma. Currently,
</p>


      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing Cricket ,Gyming , watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>
       
      </p>
    </motion.section>
  );
}
