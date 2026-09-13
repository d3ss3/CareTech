'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function PatientJourneyDemo() {
  // مراحل رحلة المريض: 1. الحجز والوصول | 2. الانتظار الذكي | 3. دخول العيادة | 4. اكتمال الزيارة
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [ticketNo] = useState('A-108');
  const [patientName] = useState('عبدالله محمد');
  const [doctorName] = useState('د. خالد العمري');
  const [clinicName] = useState('عيادة الباطنية (غرفة 04)');
  const [queuePosition, setQueuePosition] = useState(3);
  const [rating, setRating] = useState<number | null>(null);

  // إعادة المحاكاة
  const resetDemo = () => {
    setStep(1);
    setQueuePosition(3);
    setRating(null);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 dir-rtl relative overflow-hidden">
      {/* خلفية التوهج الإشعاعي */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-cyan-500/10 via-blue-600/10 to-transparent blur-3xl pointer-events-none"></div>

      {/* 1. الشريط العلوي */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-cyan-500/20">
              ✦
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              شفاء تك <span className="text-cyan-400 font-light">| الديمو المباشر</span>
            </span>
          </div>

          <Link
            href="/"
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-bold transition hover:border-slate-700"
          >
            ← العودة للصفحة الرئيسية
          </Link>
        </div>
      </header>

      {/* 2. عنوان الديمو */}
      <section className="pt-10 pb-6 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          تجربة تفاعلية حية لنظام رحلة المريض
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          شاهد كيف تتحول رحلة المريض إلى <span className="text-cyan-400">تجربة سلسة 100%</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
          جرب النظام بنفسك من وجهتي النظر: <strong className="text-white">تطبيق جوال المريض</strong> و <strong className="text-white">لوحة تحكم المنشأة الطبية</strong>.
        </p>
      </section>

      {/* 3. شاشة المحاكي المزدوجة (Dual Simulation View) */}
      <main className="max-w-7xl mx-auto px-6 pb-20 mt-6 grid lg:grid-cols-12 gap-8 items-start">
        
        {/* اللوحة اليمنى: لوحة تشغيل المنشأة والطبيب (Control Panel) */}
        <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-2xl shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
              <h3 className="font-bold text-white text-base">لوحة تشغيل العيادة (منظور الكادر الطبي)</h3>
            </div>
            <span className="text-[11px] font-mono text-slate-500">LIVE CONTROL PANEL</span>
          </div>

          {/* خط خطوات الرحلة */}
          <div className="grid grid-cols-4 gap-2 mb-8 text-center text-xs font-bold">
            <div className={`p-2.5 rounded-xl border transition ${step >= 1 ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-600'}`}>
              1. تأكيد الوصول
            </div>
            <div className={`p-2.5 rounded-xl border transition ${step >= 2 ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-600'}`}>
              2. غرفة الانتظار
            </div>
            <div className={`p-2.5 rounded-xl border transition ${step >= 3 ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-600'}`}>
              3. دخول العيادة
            </div>
            <div className={`p-2.5 rounded-xl border transition ${step >= 4 ? 'bg-cyan-500/10 border-cyan-500/50 text-cyan-300' : 'bg-slate-950 border-slate-800 text-slate-600'}`}>
              4. خروج وتقييم
            </div>
          </div>

          {/* تفاصيل التفاعل المباشر حسب المرحلة */}
          <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-6 mb-6">
            <h4 className="text-xs text-slate-400 font-mono mb-2">معلومات المراجع الحالي</h4>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xl font-bold text-white">{patientName}</div>
                <div className="text-xs text-slate-400 mt-1">تذكرة رقم: <span className="font-mono text-cyan-400 font-bold">{ticketNo}</span></div>
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400">الجهة المطلوب زيارتها</div>
                <div className="text-sm font-semibold text-slate-200 mt-1">{clinicName}</div>
              </div>
            </div>
          </div>

          {/* أزرار تحكم المبتكر لإدارة التجربة */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-300">⚡ قم باتخاذ الإجراء لتجربة المحاكاة:</h4>

            {step === 1 && (
              <button
                onClick={() => setStep(2)}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition active:scale-[0.99] text-sm flex items-center justify-center gap-2"
              >
                <span>تأكيد وصول المريض بالباركود (Check-in)</span>
                <span>←</span>
              </button>
            )}

            {step === 2 && (
              <div className="space-y-3">
                <button
                  onClick={() => setQueuePosition((prev) => Math.max(1, prev - 1))}
                  className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 rounded-xl transition text-xs border border-slate-700"
                >
                  تحديث الطابور (تقدم مراجع سابق) - المتبقي: {queuePosition}
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black py-4 rounded-xl shadow-lg shadow-cyan-500/20 transition active:scale-[0.99] text-sm flex items-center justify-center gap-2"
                >
                  <span>🔊 استدعاء المريض للعيادة الآن (النداء الآلي)</span>
                </button>
              </div>
            )}

            {step === 3 && (
              <button
                onClick={() => setStep(4)}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition active:scale-[0.99] text-sm flex items-center justify-center gap-2"
              >
                <span>إنهاء الاستشارة الطبيّة وإرسال الوصفة للخدمة الذاتية</span>
              </button>
            )}

            {step === 4 && (
              <div className="text-center space-y-4">
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs font-bold">
                  ✓ اكتملت رحلة المريض بنجاح مع تسجيل كافة البيانات والوقت التقديري!
                </div>
                <button
                  onClick={resetDemo}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-xl transition text-xs"
                >
                  إعادة تجربة المحاكاة ↺
                </button>
              </div>
            )}
          </div>
        </div>

        {/* اللوحة اليسرى: شاشة هاتف المريض المباشرة (Patient Mobile Simulator) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-[360px] bg-slate-900 border-[6px] border-slate-800 rounded-[40px] p-5 shadow-2xl relative overflow-hidden min-h-[580px] flex flex-col justify-between">
            {/* إضاءة الشاشة العلوي (Notch) */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-800 rounded-full z-20"></div>

            {/* محتوى شاشة جوال المريض حسب الخطوة */}
            <div className="pt-6">
              <div className="flex justify-between items-center text-[10px] text-slate-400 mb-4 px-1 font-mono">
                <span>تطبيق المستشفى الذكي</span>
                <span>09:41 AM</span>
              </div>

              {/* حالة 1: حجز الموعد وتأكيد الوصول */}
              {step === 1 && (
                <div className="space-y-4 text-center animate-fadeIn">
                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl">
                    <span className="text-xs text-cyan-400 font-bold block">مرحباً بك {patientName} 👋</span>
                    <p className="text-[11px] text-slate-300 mt-1">لديك موعد اليوم في {clinicName}</p>
                  </div>
                  <div className="p-6 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col items-center">
                    <div className="w-24 h-24 bg-white p-2 rounded-xl flex items-center justify-center font-mono text-slate-950 font-black text-xs">
                      [QR CODE]
                    </div>
                    <span className="text-[11px] text-slate-400 mt-3">امسح الكود عند المدخل لتأكيد حضورك</span>
                  </div>
                </div>
              )}

              {/* حالة 2: الانتظار التفاعلي المباشر */}
              {step === 2 && (
                <div className="space-y-4 text-center animate-fadeIn">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-300 text-xs font-bold">
                    ⏳ أنت الآن في حالة الانتظار
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                    <span className="text-xs text-slate-400">رقم تذكرتك</span>
                    <div className="text-4xl font-black font-mono text-cyan-400 my-2">{ticketNo}</div>
                    <div className="text-xs text-slate-300 mt-3 pt-3 border-t border-slate-800">
                      عدد المراجعين قبلك: <span className="font-bold text-cyan-400 text-sm">{queuePosition}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">الوقت المتوقع للدخول: ~{queuePosition * 4} دقائق</div>
                  </div>
                </div>
              )}

              {/* حالة 3: التنبيه بالدخول (النداء المباشر) */}
              {step === 3 && (
                <div className="space-y-4 text-center animate-fadeIn">
                  <div className="p-4 bg-cyan-500 border border-cyan-400 rounded-2xl text-slate-950 font-black text-sm animate-bounce shadow-lg shadow-cyan-500/30">
                    🔔 حان دورك الآن!
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
                    <p className="text-xs text-slate-300">يرجى التوجه فوراً إلى:</p>
                    <div className="text-lg font-black text-white mt-2">{clinicName}</div>
                    <div className="text-xs text-cyan-400 mt-1">{doctorName}</div>
                  </div>
                </div>
              )}

              {/* حالة 4: ملخص ما بعد الزيارة والتقييم */}
              {step === 4 && (
                <div className="space-y-4 text-center animate-fadeIn">
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-400 text-xs font-bold">
                    ✨ شرفتنا بزيارتك!
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-right">
                    <span className="text-[10px] text-slate-500 block mb-1">الوصفة الطبية الإلكترونية</span>
                    <p className="text-xs text-slate-200 font-bold">تم إرسال وصفاتك الطبية وتوجيهات الطبيب إلى ملفك الصحي.</p>
                  </div>
                  <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                    <span className="text-xs text-slate-300 font-bold block mb-2">كيف كانت تجربتك اليوم؟</span>
                    <div className="flex justify-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className={`text-lg transition ${rating && rating >= star ? 'text-amber-400 scale-110' : 'text-slate-700'}`}
                        >
                          ★
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="text-[10px] text-slate-600 text-center pb-2 font-mono">
              POWERED BY SHAFATECH
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
