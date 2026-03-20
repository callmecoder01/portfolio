'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowRight, FiTerminal, FiServer, FiDatabase, FiCloud } from 'react-icons/fi';

export default function HeroSection() {
  const [text, setText] = useState('');
  const roles = ['Full Stack Developer', 'Backend Architect', 'Cloud Engineer', 'Problem Solver'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && text === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setText(isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1)
        );
      }, isDeleting ? 30 : 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor((prev) => !prev), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const techStack = [
    { icon: FiTerminal, label: 'Node.js' },
    { icon: FiServer, label: 'NestJS' },
    { icon: FiDatabase, label: 'PostgreSQL' },
    { icon: FiCloud, label: 'AWS' },
  ];

  const codeLines = [
    { prefix: 'const', content: ' developer = {', color: 'text-purple-400' },
    { prefix: '  name:', content: ' "Saroj Sah",', color: 'text-green-400' },
    { prefix: '  stack:', content: ' ["Node", "React", "NestJS"],', color: 'text-green-400' },
    { prefix: '  passion:', content: ' "Building scalable systems"', color: 'text-green-400' },
    { prefix: '};', content: '', color: 'text-purple-400' },
  ];

  return (
    <div className="section-container relative !overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Floating gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-[20%] w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 left-[10%] w-96 h-96 bg-blue-500/8 rounded-full blur-3xl pointer-events-none"
      />

      {/* Main content - split layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* Left side - Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-5"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100/80 border border-primary-200/50 text-primary-700 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={itemVariants}>
            <p className="text-base text-gray-500 font-mono mb-1">{'// hello world'}</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-gray-900 leading-tight">
              Saroj <span className="gradient-text">Sah</span>
            </h1>
          </motion.div>

          {/* Typing role */}
          <motion.div variants={itemVariants} className="h-10">
            <p className="text-xl md:text-2xl font-mono text-gray-600">
              {'> '}
              <span className="text-primary-600 font-semibold">{text}</span>
              <span className={`inline-block w-0.5 h-6 ml-0.5 bg-primary-500 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            </p>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
            3+ years building scalable backend systems, AI-powered pipelines, and production apps across e-commerce, SaaS, and EdTech.
          </motion.p>

          {/* Tech stack pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {techStack.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-lg text-sm text-gray-700 font-medium"
              >
                <Icon className="w-4 h-4 text-primary-500" />
                {label}
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigateToSection', { detail: { section: 3 } }))}
              className="btn-premium group !py-3 !px-6"
            >
              View Projects
              <FiArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent('navigateToSection', { detail: { section: 5 } }))}
              className="btn-outline !py-3 !px-6"
            >
              <FiMail className="inline-block mr-2" />
              Contact Me
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex gap-3 pt-2">
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
                className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-sm border border-gray-200/50 flex items-center justify-center text-gray-600 hover:text-primary-600 hover:border-primary-300 hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Code terminal */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="hidden lg:block"
        >
          <div className="relative">
            {/* Glow behind terminal */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-3xl blur-2xl" />

            {/* Terminal window */}
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/80 border-b border-gray-700/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-gray-400 font-mono ml-2">~/saroj/portfolio</span>
              </div>

              {/* Terminal body */}
              <div className="p-5 font-mono text-sm space-y-1.5">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.15, duration: 0.4 }}
                    className="flex"
                  >
                    <span className="text-gray-500 w-6 text-right mr-4 select-none text-xs leading-6">{i + 1}</span>
                    <span className={line.color}>{line.prefix}</span>
                    <span className="text-gray-300">{line.content}</span>
                  </motion.div>
                ))}

                {/* Terminal prompt */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8 }}
                  className="flex items-center mt-4 pt-3 border-t border-gray-700/30"
                >
                  <span className="text-green-400 mr-2">$</span>
                  <span className="text-gray-400">npm run build-something-amazing</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="w-2 h-4 bg-green-400 ml-1"
                  />
                </motion.div>
              </div>
            </div>

            {/* Floating badges around terminal */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -right-3 px-3 py-1.5 bg-white rounded-xl shadow-lg border border-gray-100 text-xs font-semibold text-gray-700 flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-green-500" />
              99.9% Uptime
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-3 -left-3 px-3 py-1.5 bg-white rounded-xl shadow-lg border border-gray-100 text-xs font-semibold text-gray-700 flex items-center gap-1.5"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              10K+ API Requests/day
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
