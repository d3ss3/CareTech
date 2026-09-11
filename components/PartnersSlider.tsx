'use client';

import React, { useState } from 'react';

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
      {/* حقن قواعد انسيابية CSS المباشرة بكفاءة عالية */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* عنوان القسم */}
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          شركاء النجاح
        </h2>
        <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mt-2">
          محل ثقة كبرى المنشآت والقطاعات الطبية
        </p>
      </div>

      {/* حواف التدرج المخفية (Fade Mask) */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* حاوية الحركة - تم تعيين dir="ltr" لتفادي تعارض المحاذاة مع اللغة العربية */}
      <div dir="ltr" className="flex overflow-hidden select-none w-full">
        {/* المسار الأول */}
        <div className="flex shrink-0 items-center justify-around gap-8 pr-8 animate-marquee min-w-full">
          {partners.map((partner) => (
            <PartnerCard key={`t1-${partner.id}`} partner={partner} />
          ))}
        </div>

        {/* المسار الثاني (مستنسخ تماماً لضمان الاتصال اللانهائي) */}
        <div className="flex shrink-0 items-center justify-around gap-8 pr-8 animate-marquee min-w-full" aria-hidden="true">
          {partners.map((partner) => (
            <PartnerCard key={`t2-${partner.id}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ partner }: { partner: { id: number; name: string; logo: string } }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative h-16 w-44 px-6 py-2 rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-center hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 shrink-0">
      {!imgError ? (
        <img
          src={partner.logo}
          alt={partner.name}
          className="max-h-10 max-w-[130px] w-auto h-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-xs font-semibold text-slate-300 whitespace-nowrap" dir="rtl">
          {partner.name}
        </span>
      )}
    </div>
  );
}
