'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend, FiTerminal } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: FiMail, label: 'email', value: 'geeksaroj@gmail.com', href: 'mailto:geeksaroj@gmail.com' },
    { icon: FiPhone, label: 'phone', value: '+977 9817627843', href: 'tel:+9779817627843' },
    { icon: FiMapPin, label: 'location', value: 'Kathmandu, Nepal', href: '#' },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/geek-saroj', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/saroj4', label: 'LinkedIn' },
  ];

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
          <p className="text-sm font-mono text-gray-500 mb-1">{'// lets connect'}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Form styled as terminal */}
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
                  <FiTerminal className="w-3 h-3 text-gray-400 ml-2" />
                  <span className="text-xs text-gray-400 font-mono">send-message.sh</span>
                </div>

                {/* Form inside terminal */}
                <form onSubmit={handleSubmit} className="p-4 sm:p-5 space-y-3 sm:space-y-4">
                  <div>
                    <label className="text-xs font-mono text-gray-500 mb-1.5 block">
                      <span className="text-purple-400">const</span> name <span className="text-gray-600">=</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 font-mono text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 transition-all placeholder-gray-600"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-500 mb-1.5 block">
                      <span className="text-purple-400">const</span> email <span className="text-gray-600">=</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 font-mono text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 transition-all placeholder-gray-600"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-gray-500 mb-1.5 block">
                      <span className="text-purple-400">const</span> message <span className="text-gray-600">=</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={3}
                      className="w-full px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 font-mono text-sm focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500/20 transition-all resize-none placeholder-gray-600"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-mono text-sm rounded-lg hover:shadow-lg hover:shadow-primary-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>sending...</span>
                      </>
                    ) : (
                      <>
                        <span>$ send_message</span>
                        <FiSend className="w-3.5 h-3.5" />
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact info */}
          <div className="space-y-3 sm:space-y-4 pb-16 md:pb-0">
            {/* Contact details */}
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <motion.a
                key={label}
                variants={itemVariants}
                href={href}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-primary-400 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-mono text-gray-500">{label}</p>
                  <p className="font-semibold text-gray-800 text-sm">{value}</p>
                </div>
              </motion.a>
            ))}

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900 rounded-xl p-5 border border-gray-700/50"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-mono text-gray-400">{'// find me online'}</span>
              </div>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary-600 border border-gray-700 hover:border-primary-500 transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
              </span>
              <div>
                <p className="font-semibold text-gray-800 text-sm">Available for opportunities</p>
                <p className="text-xs text-gray-500 font-mono">status: online</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
