'use client';

import { motion } from 'framer-motion';
import StatsCounter from '../ui/StatsCounter';
import { FiCode, FiZap, FiUsers, FiAward } from 'react-icons/fi';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const skills = [
    { icon: FiCode, title: 'Clean Code', desc: 'Writing maintainable & scalable solutions' },
    { icon: FiZap, title: 'Performance', desc: 'Optimized for speed and efficiency' },
    { icon: FiUsers, title: 'Collaboration', desc: 'Team player with strong communication' },
    { icon: FiAward, title: 'Quality', desc: 'Committed to excellence in every project' },
  ];

  return (
    <div className="section-container">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: Bio */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass-card p-8 md:p-10 space-y-6">
              <h3 className="text-3xl font-display font-bold text-gray-800 mb-4">
                Passionate Developer
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over <span className="font-semibold text-primary-600">3 years</span> of
                experience in software development, I specialize in building modern web
                applications that combine beautiful design with powerful functionality.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm constantly learning and experimenting with new technologies to stay at
                the cutting edge of web development. My goal is to create digital experiences
                that not only meet requirements but exceed expectations.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Express', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'TailwindCSS'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-100 text-primary-700 rounded-xl font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
            {skills.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-6 space-y-3 cursor-pointer group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center text-white shadow-glow group-hover:shadow-glow-lg transition-shadow">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-display font-semibold text-gray-800 text-lg">
                  {title}
                </h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={itemVariants}
          className="glass-card p-8 md:p-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <StatsCounter value={3} label="Years Experience" suffix="+" />
            <StatsCounter value={20} label="Projects Completed" suffix="+" />
            <StatsCounter value={100} label="Code Commits" suffix="K+" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
