'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiFolder, FiGitCommit } from 'react-icons/fi';
import { projectsData } from '@/lib/data';
import Image from 'next/image';

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0);
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="section-container relative !overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
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
        <motion.div variants={itemVariants} className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm font-mono text-gray-500 mb-1">{'// recent work'}</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
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
              className="group"
            >
              <div className="bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl overflow-hidden hover:border-primary-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
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
                    <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <FiGitCommit className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 flex-grow">
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
        <motion.div variants={itemVariants} className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentPage
                  ? 'w-8 bg-primary-500'
                  : 'w-1.5 bg-gray-300 hover:bg-primary-300'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
