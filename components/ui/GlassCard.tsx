'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode;
  hover?: boolean;
  className?: string;
}

export default function GlassCard({
  children,
  hover = false,
  className = '',
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass-card ${className}`}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
}
