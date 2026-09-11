'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const directions = {
    up: { y: 25, x: 0 },
    down: { y: -25, x: 0 },
    left: { x: 25, y: 0 },
    right: { x: -25, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-20px' }} // تقليل الهامش ليتناسب مع شاشات الجوال
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`transform-gpu isolate ${className}`} // تعزز أداء الـ GPU وتمنع تكرار/خيال العناصر
    >
      {children}
    </motion.div>
  );
}
