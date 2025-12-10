'use client';

import { motion } from 'framer-motion';

export default function FloatingBlobs() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob 1 - Purple */}
      <motion.div
        className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 - Light Purple */}
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-primary-300 to-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Blob 3 - Pink Purple */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-br from-pink-300 to-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25"
        animate={{
          x: [0, 50, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Blob 4 - Violet */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-violet-300 to-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{
          x: [0, -60, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
