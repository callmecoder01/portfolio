'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiFolder, FiGitCommit, FiX, FiTag, FiFileText } from 'react-icons/fi';
import { projectsData } from '@/lib/data';
import Image from 'next/image';

type Project = (typeof projectsData)[number];

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projectsData.length / projectsPerPage);
  const currentProjects = projectsData.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

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
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <p className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-1">{'// recent work'}</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          {/* Carousel Controls */}
          <div className="flex items-center gap-3">
            <motion.button
              onClick={handlePrevious}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-white border border-gray-700/50 hover:border-primary-500/30 transition-all"
            >
              <FiChevronLeft className="w-4 h-4" />
            </motion.button>
            <span className="text-xs font-mono text-gray-500">
              {currentPage + 1}/{totalPages}
            </span>
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:text-white border border-gray-700/50 hover:border-primary-500/30 transition-all"
            >
              <FiChevronRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {currentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl overflow-hidden hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Image with terminal overlay */}
                <div className="relative h-40 overflow-hidden bg-gray-900">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  {/* Terminal-style overlay bar */}
                  <div className="absolute top-0 left-0 right-0 flex items-center gap-2 px-3 py-1.5 bg-gray-900/80 backdrop-blur-sm">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500/70" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                      <div className="w-2 h-2 rounded-full bg-green-500/70" />
                    </div>
                    <FiFolder className="w-3 h-3 text-gray-400" />
                    <span className="text-[10px] text-gray-400 font-mono truncate">{project.title.toLowerCase().replace(/ /g, '-')}/</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <FiGitCommit className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags as code tokens */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-900 text-green-400 rounded text-[10px] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Page dots */}
        <motion.div variants={itemVariants} className="flex justify-center gap-2 mt-6 mb-16 md:mb-0">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? 'w-8 bg-primary-500'
                  : 'w-1.5 bg-gray-300 dark:bg-gray-600 hover:bg-primary-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6"
            onClick={() => setSelectedProject(null)}
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
                    <FiFolder className="w-3.5 h-3.5 text-gray-400 ml-2" />
                    <span className="text-xs text-gray-400 font-mono">
                      ~/{selectedProject.title.toLowerCase().replace(/ /g, '-')}/README.md
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedProject(null)}
                    className="w-7 h-7 rounded-lg bg-gray-700/50 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition-colors"
                  >
                    <FiX className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Project image */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-5 -mt-8 relative">
                  {/* Title */}
                  <div>
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-2xl font-display font-bold text-white mb-1"
                    >
                      {selectedProject.title}
                    </motion.h3>
                    <div className="flex items-center gap-2 text-xs font-mono text-gray-500">
                      <FiGitCommit className="w-3 h-3" />
                      <span>project details</span>
                    </div>
                  </div>

                  {/* Description as terminal output */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FiFileText className="w-3.5 h-3.5 text-primary-400" />
                      <span className="text-xs font-mono text-gray-400">description</span>
                    </div>
                    <div className="bg-gray-800/80 rounded-lg px-4 py-3 border border-gray-700/30">
                      <p className="text-sm text-gray-300 leading-relaxed font-mono">
                        <span className="text-gray-500">{'> '}</span>
                        {selectedProject.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Tech stack */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <FiTag className="w-3.5 h-3.5 text-primary-400" />
                      <span className="text-xs font-mono text-gray-400">tech_stack</span>
                    </div>
                    <div className="bg-gray-800/80 rounded-lg p-4 border border-gray-700/30 font-mono text-xs">
                      <div className="text-purple-400 mb-1">
                        <span className="text-gray-500">{'export const '}</span>
                        <span className="text-blue-400">stack</span>
                        <span className="text-gray-500">{' = ['}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 pl-4 py-1">
                        {selectedProject.tags.map((tag, i) => (
                          <motion.span
                            key={tag}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.25 + i * 0.03 }}
                            className="px-2.5 py-1 bg-gray-900 text-green-400 rounded border border-gray-700/50 hover:border-green-500/30 transition-colors cursor-default"
                          >
                            &quot;{tag}&quot;
                          </motion.span>
                        ))}
                      </div>
                      <div className="text-gray-500">{'];'}</div>
                    </div>
                  </motion.div>

                  {/* Bottom terminal prompt */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center pt-2 border-t border-gray-700/30 font-mono text-xs"
                  >
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-gray-500">cat README.md</span>
                    <span className="text-gray-600 mx-2">|</span>
                    <span className="text-gray-500">project loaded successfully</span>
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
