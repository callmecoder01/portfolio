'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';
import introImg from '@/public/intro.png';

export default function HeroSection() {
  const [text, setText] = useState('');
  const fullText = 'Building digital experiences that inspire.';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="section-container relative overflow-hidden">
      {/* Background Image - LEFT SIDE at 40% width */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute left-0 top-0 bottom-0 w-[40%] flex items-center justify-start pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full h-full opacity-30"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-3xl opacity-40 animate-pulse" />
          <Image
            src={introImg}
            alt="Background"
            fill
            className="relative z-10 drop-shadow-2xl object-contain"
            priority
            style={{ filter: 'blur(1px)' }}
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center space-y-8"
      >
        {/* Avatar */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-2xl opacity-40 animate-pulse" />
            <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-5xl md:text-6xl font-bold text-white shadow-premium">
              S
            </div>
          </motion.div>
        </motion.div>

        {/* Greeting */}
        <motion.div variants={itemVariants} className="space-y-2">
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Hello, I'm
          </p>
          <h1 className="text-6xl md:text-8xl font-display font-bold gradient-text">
            Saroj Sah
          </h1>
        </motion.div>

        {/* Typing Animation */}
        <motion.div variants={itemVariants} className="h-12 md:h-16">
          <p className="text-xl md:text-3xl font-medium text-gray-700">
            {text}
            <span
              className={`inline-block w-0.5 h-6 md:h-8 ml-1 bg-primary-500 ${
                showCursor ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Full-stack developer passionate about creating beautiful, functional,
          and user-centered digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <button
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent('navigateToSection', { detail: { section: 3 } })
              );
            }}
            className="btn-premium group"
          >
            View My Work
            <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent('navigateToSection', { detail: { section: 5 } })
              );
            }}
            className="btn-outline"
          >
            <FiMail className="inline-block mr-2" />
            Get In Touch
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center pt-8"
        >
          {[
            { Icon: FiGithub, href: 'https://github.com/geek-saroj', label: 'GitHub' },
            { Icon: FiLinkedin, href: 'https://linkedin.com/in/saroj4', label: 'LinkedIn' },
            { Icon: FiMail, href: 'mailto:geeksaroj@gmail.com', label: 'Email' },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-gray-700 hover:text-primary-600 hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary-400 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
}
