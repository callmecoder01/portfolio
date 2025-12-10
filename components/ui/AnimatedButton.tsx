'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: 'premium' | 'outline';
  className?: string;
}

export default function AnimatedButton({
  children,
  variant = 'premium',
  className = '',
  ...props
}: AnimatedButtonProps) {
  const baseClass = variant === 'premium' ? 'btn-premium' : 'btn-outline';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClass} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
