// Intro.tsx
"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { FaTwitter } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import Modal from "./modal"; // Adju path according to your file structure
import LoadingOverlay from "./temp";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function Intro() {
  const { ref } = useSectionInView("Home", 0.9);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };
    loadData();
  }, []);

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex flex-col items-center ">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <LoadingOverlay isVisible={true} />
        </div>
      ) : (
<section
  ref={ref}
  id="home"
  className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto py-20 px-6"
>
  {/* LEFT - TEXT SECTION */}
  <div className="text-left w-full md:w-[55%]">
    <motion.h1
      className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <span className="block text-lg sm:text-xl text-purple-600 mb-6">HELLO, I'M SAROJ</span>
      I'M A <span className="text-pink-400">SOFTWARE ENGINEER</span>
    </motion.h1>

    <motion.p
      className="mt-20 text-lg sm:text-xl leading-relaxed text-gray-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
     
    </motion.p>

    <motion.div
      className="mt-8 flex gap-6 text-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <a
        href="https://www.linkedin.com/in/saroj4/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black dark:text-white hover:text-pink-400 transition"
      >
        <BsLinkedin />
      </a>

      <a
        href="https://github.com/geek-saroj"
        target="_blank"
        rel="noopener noreferrer"
      
        className="text-black dark:text-white hover:text-pink-400 transition"
        >
        <FaGithubSquare />
      </a>
      
      <a
        href="https://x.com/geekSaroj"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter/>
      </a>

    </motion.div>

    {/* Buttons */}
    <motion.div
      className="mt-8 flex flex-wrap gap-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <Link
        href="#contact"
        onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
        }}
        className="group bg-purple-700 text-white px-6 rounded-full flex items-center gap-2 hover:bg-purple-800 transition"
      >
        How to reach me
        <BsArrowRight className="group-hover:translate-x-1 transition" />
      </Link>

      <a
        href="/saroj-cv.pdf"
        download
        className="bg-white text-gray-800 px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition dark:bg-white/10 dark:text-white/80"
      >
        Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
      </a>
    </motion.div>

    {/* Social Icons */}
 
  </div>

  {/* RIGHT - IMAGE SECTION */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}
    className="w-full md:w-[45%] flex justify-center"
  >
    <Image
      src="/intro.png"
      alt="Saroj profile"
      width={320}
      height={320}
  className="object-cover cursor-pointer rounded-full bg-gradient-to-t from-transparent to-[#fff]"

      // onClick={() => openModal("/intro.jpg")}
    />
  </motion.div>

  {showConfetti && <Confetti width={width} height={height} />}
  <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={modalImage} />
</section>


      )}
    </main>
  );
}

export default Intro;
