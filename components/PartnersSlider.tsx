'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

const partners = [
  { id: 1, name: 'شريك 1', logo: '/partners/1.png' },
  { id: 2, name: 'شريك 2', logo: '/partners/2.png' },
  { id: 3, name: 'شريك 3', logo: '/partners/3.png' },
  { id: 4, name: 'شريك 4', logo: '/partners/4.png' },
  { id: 5, name: 'شريك 5', logo: '/partners/5.png' },
];

// تكرار القائمة 4 مرات لضمان تغطية كافة مقاسات الشاشات بدون أي فراغات
const SET_COUNT = 4;
const duplicatedPartners = Array(SET_COUNT).fill(partners).flat();

export default function PartnersSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const singleSetWidthRef = useRef(0);
  const animationFrameIdRef = useRef<number | null>(null);

  // سرعة الدوران التلقائي (بكسل لكل إطار)
  const SPEED = 0.8;

  // حساب عرض مجموعة الشركاء بدقة
  const updateSetWidth = useCallback(() => {
    if (trackRef.current) {
      singleSetWidthRef.current = trackRef.current.scrollWidth / SET_COUNT;
    }
  }, []);

  useEffect(() => {
    updateSetWidth();
    window.addEventListener('resize', updateSetWidth);
    return () => window.removeEventListener('resize', updateSetWidth);
  }, [updateSetWidth]);

  // حلقة الحركة المستمرة (60 FPS / GPU Animation)
  useEffect(() => {
    const animate = () => {
      if (!isDraggingRef.current && trackRef.current && singleSetWidthRef.current > 0) {
        offsetRef.current -= SPEED;

        // التفاف رياضي لانهائي يمنع أي ازدواجية أو قفزات
        const setWidth = singleSetWidthRef.current;
        if (offsetRef.current <= -setWidth) {
          offsetRef.current += setWidth;
        } else if (offsetRef.current > 0) {
          offsetRef.current -= setWidth;
        }

        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }
      animationFrameIdRef.current = requestAnimationFrame(animate);
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, []);

  // أحداث السحب بالماوس أو اللمس لليد والجوال
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !trackRef.current || singleSetWidthRef.current <= 0) return;

    const deltaX = e.clientX - startXRef.current;
    let newOffset = dragStartOffsetRef.current + deltaX;

    const setWidth = singleSetWidthRef.current;
    while (newOffset <= -setWidth) newOffset += setWidth;
    while (newOffset > 0) newOffset -= setWidth;

    offsetRef.current = newOffset;
    trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // تفادي أخطاء التحرير
    }
  };

  return (
    <section className="py-10 sm:py-14 border-y border-slate-800/60 bg-slate-950/40 relative overflow-hidden select-none">
      {/* عنوان القسم */}
      <div className="max-w-7xl mx-auto px-6 mb-8 sm:mb-10 text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
          شركاء النجاح
        </h2>
        <p className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-500 mt-1 sm:mt-2">
          محل ثقة كبرى المنشآت والقطاعات الطبية
        </p>
      </div>

      {/* حواف التدرج المخفية (Fade Mask) */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      {/* حاوية الحركة التفاعلية والسحب السلس */}
      <div
        dir="ltr"
        className="flex overflow-hidden w-full cursor-grab active:cursor-grabbing touch-pan-y"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          ref={trackRef}
          className="flex items-center gap-4 sm:gap-6 shrink-0 pr-4 sm:pr-6"
          style={{ willChange: 'transform' }}
        >
          {duplicatedPartners.map((partner, index) => (
            <PartnerCard key={`${partner.id}-${index}`} partner={partner} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCard({ partner }: { partner: { id: number; name: string; logo: string } }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative h-16 w-32 sm:h-20 sm:w-44 px-4 sm:px-6 py-2 rounded-xl sm:rounded-2xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-center hover:border-cyan-500/50 hover:bg-slate-900 hover:scale-105 active:scale-95 transition-all duration-300 shrink-0 group">
      {!imgError ? (
        <img
          src={partner.logo}
          alt={partner.name}
          draggable={false}
          className="max-h-8 sm:max-h-10 max-w-[100px] sm:max-w-[130px] w-auto h-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
          onError={() => setImgError(true)}
        />
      ) : (
        <span className="text-[11px] sm:text-xs font-semibold text-slate-300 whitespace-nowrap" dir="rtl">
          {partner.name}
        </span>
      )}
    </div>
  );
}
