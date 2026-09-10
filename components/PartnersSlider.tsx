'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { id: 1, name: 'شريك 1', logo: '/partners/1.png' },
  { id: 2, name: 'شريك 2', logo: '/partners/2.png' },
  { id: 3, name: 'شريك 3', logo: '/partners/3.png' },
  { id: 4, name: 'شريك 4', logo: '/partners/4.png' },
  { id: 5, name: 'شريك 5', logo: '/partners/5.png' },
];

export default function PartnersSlider() {
  // تكرار المصفوفة 3 مرات لضمان عدم وجود فراغ أثناء الدوران السريع
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-14 border-y border-slate-800/60 bg-slate-950/40 relative overflow-hidden">
      {/* عنوان القسم */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          شركاء النجاح
        </h2>
        <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mt-2">
          محل ثقة كبرى المنشآت والقطاعات الطبية
        </p>
      </div>

      {/* حواف تدرج مخفية (Fade Mask) على الجانبين */}
      <div className="absolute top-0 bottom-0 left-0 w-28 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 bottom-0 right-0 w-28 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

      {/* الشريط المتحرك */}
      <div className="flex overflow-hidden select-none group">
        <motion.div
          animate={{ x: ['0%', '-33.33%'] }}
          transition={{
            ease: 'linear',
            duration: 20,
            repeat: Infinity,
          }}
          className="flex flex-nowrap gap-8 min-w-max items-center group-hover:[animation-play-state:paused]"
        >
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="relative h-16 w-36 px-4 py-2 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex items-center justify-center hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 group/item"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={120}
                height={120}
                className="max-h-10 w-auto object-contain filter grayscale opacity-60 group-hover/item:grayscale-0 group-hover/item:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}