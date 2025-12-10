'use client';

import { motion } from 'framer-motion';
import { experiencesData } from '@/lib/data';

export default function ExperienceSection() {
  return (
    <div className="section-container">
      <div className="h-full overflow-y-auto overflow-x-hidden py-12 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
              Experience
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My professional journey and contributions
            </p>
          </motion.div>

          {/* Experience Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {experiencesData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass-card p-6 rounded-3xl space-y-4 hover:shadow-glow transition-all duration-300 h-full flex flex-col"
              >
                {/* Icon and Date */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center text-white shadow-glow text-2xl">
                    {experience.icon}
                  </div>
                  <div className="px-4 py-1.5 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                    {experience.date}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-gray-800">
                  {experience.title}
                </h3>

                {/* Location */}
                <p className="text-primary-600 font-medium flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {experience.location}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {experience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
