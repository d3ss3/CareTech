'use client';

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // يضمن تفعيل الحركة مرة واحدة فقط وبشكل ثابت دون إعادة ضبط عند التمرير
  const isInView = useInView(ref, { once: true, margin: '0px 0px -30px 0px' });

  const directions = {
    up: { y: 20, x: 0 },
    down: { y: -20, x: 0 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directions[direction] }}
      transition={{ duration: 0.4, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden',
        WebkitTransform: 'translate3d(0,0,0)',
        transform: 'translate3d(0,0,0)',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
