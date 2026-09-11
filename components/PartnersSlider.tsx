'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const partners = [
  { id: 1, name: 'شريك 1', logo: '/partners/1.png' },
  { id: 2, name: 'شريك 2', logo: '/partners/2.png' },
  { id: 3, name: 'شريك 3', logo: '/partners/3.png' },
  { id: 4, name: 'شريك 4', logo: '/partners/4.png' },
  { id: 5, name: 'شريك 5', logo: '/partners/5.png' },
];

export default function PartnersSlider() {
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

      {/* الشريط المتحرك - المسار المزدوج المتقن */}
      <div className="flex overflow-hidden select-none group w-full">
        {/* المسار الأول */}
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            ease: 'linear',
            duration: 22,
            repeat: Infinity,
          }}
          className="flex shrink-0 items-center gap-6 pr-6 group-hover:[animation-play-state:paused]"
        >
          {partners.map((partner) => (
            <PartnerCard key={`track1-${partner.id}`} partner={partner} />
          ))}
        </motion.div>

        {/* المسار الثاني (نسخة طبق الأصل تتبع المسار الأول مباشرة) */}
        <motion.div
          animate={{ x: ['0%', '-100%'] }}
          transition={{
            ease: 'linear',
            duration: 22,
            repeat: Infinity,
          }}
          className="flex shrink-0 items-center gap-6 pr-6 group-hover:[animation-play-state:paused]"
        >
          {partners.map((partner) => (
            <PartnerCard key={`track2-${partner.id}`} partner={partner} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function PartnerCard({ partner }: { partner: { id: number; name: string; logo: string } }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative h-16 min-w-[150px] px-6 py-2 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-center hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300">
      {!imgError ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-10 max-w-[120px] w-auto h-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-xs font-semibold text-slate-300 whitespace-nowrap">
          {partner.name}
        </span>
      )}
    </div>
  );
}
