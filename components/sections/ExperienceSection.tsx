'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { experiencesData } from '@/lib/data';
import { FiMapPin, FiCalendar, FiChevronRight, FiX, FiBriefcase, FiTag, FiTerminal } from 'react-icons/fi';

type Experience = (typeof experiencesData)[number];

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  return (
    <div className="section-container relative !overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-1">{'// career path'}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 hidden md:block" />

          <div className="space-y-4 pb-16 md:pb-0">
            {experiencesData.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                onClick={() => setSelectedExp(experience)}
                className="group relative flex gap-5 cursor-pointer"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center pt-5">
                  <div className="w-[10px] h-[10px] rounded-full bg-gray-900 dark:bg-gray-100 border-2 border-primary-500 z-10 group-hover:scale-125 transition-transform" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl p-5 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    <div>
                      {/* Title as terminal command */}
                      <div className="flex items-center gap-2 mb-1">
                        <FiChevronRight className="w-3.5 h-3.5 text-green-500" />
                        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {experience.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center gap-1">
                          <FiMapPin className="w-3 h-3" />
                          {experience.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiCalendar className="w-3 h-3" />
                          {experience.date}
                        </span>
                      </div>
                    </div>

                    {/* Status badge */}
                    {index === 0 && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-mono font-medium shrink-0">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                        </span>
                        current
                      </span>
                    )}
                  </div>

                  {/* Description styled as log output */}
                  <div className="bg-gray-900 rounded-lg px-3 sm:px-4 py-3 font-mono text-[11px] sm:text-xs">
                    <span className="text-gray-500">{'> '}</span>
                    <span className="text-gray-300">{experience.description}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Experience Detail Modal */}
      <AnimatePresence>
        {selectedExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6"
            onClick={() => setSelectedExp(null)}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto no-scrollbar"
            >
              <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
                {/* Terminal header */}
                <div className="flex items-center justify-between px-4 py-3 bg-gray-800/80 border-b border-gray-700/50 sticky top-0 z-10">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <FiBriefcase className="w-3.5 h-3.5 text-gray-400 ml-2" />
                    <span className="text-xs text-gray-400 font-mono">~/experience/details.log</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedExp(null)}
                    className="w-7 h-7 rounded-lg bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition-colors"
                  >
                    <FiX className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-5">
                  {/* Title and meta */}
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-display font-bold text-white mb-2"
                    >
                      {selectedExp.title}
                    </motion.h3>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="flex flex-wrap items-center gap-4 text-sm"
                    >
                      <span className="flex items-center gap-1.5 text-gray-400 font-mono">
                        <FiMapPin className="w-3.5 h-3.5 text-primary-400" />
                        {selectedExp.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-400 font-mono">
                        <FiCalendar className="w-3.5 h-3.5 text-primary-400" />
                        {selectedExp.date}
                      </span>
                      {selectedExp.date.includes('Present') && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-900/30 text-green-400 text-xs font-mono">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                          </span>
                          active
                        </span>
                      )}
                    </motion.div>
                  </div>

                  {/* Highlights as git log */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <FiTerminal className="w-3.5 h-3.5 text-primary-400" />
                      <span className="text-xs font-mono text-gray-400">git log --oneline</span>
                    </div>
                    <div className="bg-gray-800/80 rounded-lg border border-gray-700/30 overflow-hidden">
                      {selectedExp.highlights.map((highlight, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + i * 0.05 }}
                          className={`flex items-start gap-3 px-4 py-3 font-mono text-xs ${
                            i !== selectedExp.highlights.length - 1 ? 'border-b border-gray-700/30' : ''
                          } hover:bg-gray-700/20 transition-colors`}
                        >
                          <span className="text-yellow-400 shrink-0 mt-0.5">
                            {String(i + 1).padStart(2, '0')}.
                          </span>
                          <span className="text-gray-300 leading-relaxed">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Tech stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <FiTag className="w-3.5 h-3.5 text-primary-400" />
                      <span className="text-xs font-mono text-gray-400">tech_used</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedExp.techStack.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.35 + i * 0.03 }}
                          className="px-2.5 py-1 bg-gray-800 text-green-400 rounded border border-gray-700/50 hover:border-green-500/30 text-xs font-mono transition-colors cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Bottom terminal prompt */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center pt-2 border-t border-gray-700/30 font-mono text-xs"
                  >
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-gray-500">experience loaded</span>
                    <span className="text-gray-600 mx-2">|</span>
                    <span className="text-gray-500">{selectedExp.highlights.length} contributions</span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="w-1.5 h-3.5 bg-green-400 ml-2"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
