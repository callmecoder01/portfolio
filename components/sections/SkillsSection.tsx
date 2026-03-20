'use client';

import { motion } from 'framer-motion';
import { FiLayers, FiServer, FiMonitor, FiDatabase, FiCloud, FiTool } from 'react-icons/fi';

const skillCategories = [
  {
    icon: FiMonitor,
    title: 'Frontend',
    color: 'text-blue-400',
    skills: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'Material UI', 'Redux', 'Zustand', 'React Query'],
  },
  {
    icon: FiServer,
    title: 'Backend',
    color: 'text-green-400',
    skills: ['Node.js', 'Express.js', 'NestJS', 'Django', 'REST APIs', 'Microservices', 'Strapi CMS'],
  },
  {
    icon: FiDatabase,
    title: 'Databases',
    color: 'text-yellow-400',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'TypeORM', 'Mongoose'],
  },
  {
    icon: FiCloud,
    title: 'DevOps & Cloud',
    color: 'text-purple-400',
    skills: ['Docker', 'Kubernetes', 'Nginx', 'AWS', 'GCP', 'DigitalOcean', 'GitHub Actions', 'CI/CD'],
  },
  {
    icon: FiLayers,
    title: 'Languages',
    color: 'text-red-400',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Golang'],
  },
  {
    icon: FiTool,
    title: 'Other',
    color: 'text-cyan-400',
    skills: ['Socket.IO', 'Stripe', 'Clerk', 'Git', 'Linux', 'N8N', 'System Design'],
  },
];

export default function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
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
          <p className="text-sm font-mono text-gray-500 mb-1">{'// tech stack'}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* Skills grid as terminal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -3 }}
              className="group"
            >
              <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700/50 hover:border-primary-500/30 transition-all duration-300 h-full">
                {/* Card header */}
                <div className="flex items-center gap-2 px-3 py-2 bg-gray-800/80 border-b border-gray-700/50">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <category.icon className={`w-3 h-3 ${category.color}`} />
                  <span className="text-xs text-gray-400 font-mono">{category.title.toLowerCase()}.ts</span>
                </div>

                {/* Skills list */}
                <div className="p-3 font-mono text-xs space-y-1">
                  <div className="text-purple-400 mb-1">
                    <span className="text-gray-500">{'export const '}</span>
                    <span className={category.color}>{category.title.toLowerCase().replace(/ & /g, '_')}</span>
                    <span className="text-gray-500">{' = ['}</span>
                  </div>
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      whileHover={{ x: 4 }}
                      className="pl-3 text-green-400 hover:text-green-300 cursor-default transition-colors"
                    >
                      &quot;{skill}&quot;<span className="text-gray-600">,</span>
                    </motion.div>
                  ))}
                  <div className="text-gray-500">{'];'}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex items-center justify-between px-3 sm:px-4 py-3 bg-gray-900 rounded-xl border border-gray-700/50 font-mono text-xs mb-16 md:mb-0"
        >
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <span className="text-green-400">$</span>
            <span className="text-gray-400">Exploring</span>
            <span className="text-purple-400 font-semibold">Cloud Architecture</span>
            <span className="text-gray-500">&</span>
            <span className="text-purple-400 font-semibold">AI/ML</span>
          </div>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-2 h-3.5 bg-green-400"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
