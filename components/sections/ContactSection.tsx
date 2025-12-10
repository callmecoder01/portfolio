'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';

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
    // Add your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'geeksaroj@gmail.com',
      href: 'mailto:geeksaroj@gmail.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+977 9817627843',
      href: 'tel:+9779817627843',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/geek-saroj', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/saroj4', label: 'LinkedIn' },
  ];

  return (
    <div className="section-container">
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold gradient-text mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-6 py-4 glass-card rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-6 py-4 glass-card rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full px-6 py-4 glass-card rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-premium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message
                    <FiSend />
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right: Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 glass-card p-5 rounded-2xl hover:shadow-glow transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-glow group-hover:shadow-glow-lg transition-shadow">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{label}</p>
                    <p className="font-semibold text-gray-800">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-3xl space-y-4">
              <h3 className="text-xl font-display font-semibold text-gray-800">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center text-white shadow-glow hover:shadow-glow-lg transition-all"
                    aria-label={label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 rounded-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Available for freelance</p>
                  <p className="text-sm text-gray-600">Let's build something great together</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
