'use client';

import { motion } from 'framer-motion';
import { experiencesData } from '@/lib/data';
import { FiMapPin, FiCalendar, FiChevronRight } from 'react-icons/fi';

export default function ExperienceSection() {
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
        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-sm font-mono text-gray-500 mb-1">{'// career path'}</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-4">
            {experiencesData.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="group relative flex gap-5"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center pt-5">
                  <div className="w-[10px] h-[10px] rounded-full bg-gray-900 border-2 border-primary-500 z-10 group-hover:scale-125 transition-transform" />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl p-5 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    <div>
                      {/* Title as terminal command */}
                      <div className="flex items-center gap-2 mb-1">
                        <FiChevronRight className="w-3.5 h-3.5 text-green-500" />
                        <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors">
                          {experience.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
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
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-mono font-medium shrink-0">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                        </span>
                        current
                      </span>
                    )}
                  </div>

                  {/* Description styled as log output */}
                  <div className="bg-gray-900 rounded-lg px-4 py-3 font-mono text-xs">
                    <span className="text-gray-500">{'> '}</span>
                    <span className="text-gray-300">{experience.description}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
