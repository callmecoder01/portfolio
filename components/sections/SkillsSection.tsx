'use client';

import { motion } from 'framer-motion';
import { skillsData } from '@/lib/data';

export default function SkillsSection() {
  return (
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
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
            Skills & Expertise
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-5xl mx-auto"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="px-5 py-3 glass-card rounded-2xl text-gray-700 font-medium hover:shadow-glow hover:text-primary-600 transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700">
              Always learning and exploring new technologies. Currently diving deep into{' '}
              <span className="font-semibold text-primary-600">Cloud Architecture</span> and{' '}
              <span className="font-semibold text-primary-600">AI/ML</span> integration.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
