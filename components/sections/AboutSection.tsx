'use client';

import { motion } from 'framer-motion';
import { FiCode, FiZap, FiUsers, FiAward, FiGitBranch } from 'react-icons/fi';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  const values = [
    { icon: FiCode, title: 'Clean Architecture', desc: 'Scalable, maintainable systems' },
    { icon: FiZap, title: 'Performance', desc: 'Sub-200ms response times' },
    { icon: FiUsers, title: 'Collaboration', desc: 'Agile teams & code reviews' },
    { icon: FiAward, title: 'Quality', desc: '99.9% uptime in production' },
  ];

  const aboutCode = [
    { key: 'experience', value: '"3+ years"', color: 'text-green-400' },
    { key: 'domains', value: '["E-commerce", "SaaS", "EdTech"]', color: 'text-yellow-400' },
    { key: 'focus', value: '"Scalable Backend Systems"', color: 'text-green-400' },
    { key: 'cloud', value: '["AWS", "GCP", "Docker"]', color: 'text-yellow-400' },
  ];

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
          <p className="text-sm font-mono text-gray-500 mb-1">{'// get to know me'}</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Terminal-style about */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700/50">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-2.5 bg-gray-800/80 border-b border-gray-700/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs text-gray-400 font-mono ml-2">about.json</span>
                </div>

                {/* Code content */}
                <div className="p-4 font-mono text-sm space-y-1">
                  <div className="text-purple-400">{'{'}</div>
                  {aboutCode.map((line, i) => (
                    <motion.div
                      key={line.key}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="pl-4"
                    >
                      <span className="text-blue-300">&quot;{line.key}&quot;</span>
                      <span className="text-gray-500">: </span>
                      <span className={line.color}>{line.value}</span>
                      <span className="text-gray-500">,</span>
                    </motion.div>
                  ))}
                  <div className="text-purple-400">{'}'}</div>
                </div>
              </div>
            </div>

            {/* Bio text below terminal */}
            <motion.div variants={itemVariants} className="mt-6 space-y-3">
              <p className="text-base text-gray-600 leading-relaxed">
                Full Stack Developer with <span className="font-semibold text-primary-600">3+ years</span> building
                scalable backend systems with Node.js, NestJS, and PostgreSQL, and crafting responsive UIs with React and Next.js.
              </p>
              <p className="text-base text-gray-600 leading-relaxed">
                Delivered production apps across e-commerce, SaaS, and EdTech — including AI-powered pipelines
                and real-time conversation systems. Cloud-native with AWS, GCP, Docker, and CI/CD.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Values grid + Stats */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3">
              {values.map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -3 }}
                  className="group p-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center text-primary-400 mb-3 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">{title}</h4>
                  <p className="text-xs text-gray-500">{desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="bg-gray-900 rounded-xl p-5 border border-gray-700/50">
              <div className="flex items-center gap-2 mb-4">
                <FiGitBranch className="w-4 h-4 text-green-400" />
                <span className="text-xs font-mono text-gray-400">stats --summary</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white font-mono">3+</div>
                  <div className="text-xs text-gray-400 mt-1">Years Exp</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white font-mono">20+</div>
                  <div className="text-xs text-gray-400 mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white font-mono">100K+</div>
                  <div className="text-xs text-gray-400 mt-1">Commits</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
