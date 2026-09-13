'use client';

import React, { useState } from 'react';
import FadeIn from '@/components/FadeIn';

export default function NextGenMedicalLanding() {
  // 1. حالة المحاكي الحي لنظام الانتظار
  const [activeTab, setActiveTab] = useState<'queue' | 'patient' | 'analytics'>('queue');
  const [ticketNumber, setTicketNumber] = useState(104);
  const [isCalling, setIsCalling] = useState(false);

  // 2. حالة حاسبة العائد وتوفير الوقت (ROI Calculator)
  const [dailyPatients, setDailyPatients] = useState(300);

  // 3. حالة نموذج التواصل
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleIssueTicket = () => {
    setIsCalling(true);
    setTicketNumber((prev) => prev + 1);
    setTimeout(() => setIsCalling(false), 600);
  };

  // حسابات حاسبة العائد
  const hoursSavedPerMonth = Math.round(dailyPatients * 0.25 * 30);
  const satisfactionRate = Math.min(99, Math.round(70 + (dailyPatients / 2000) * 28));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden">
      {/* خلفية الإضاءة الشبكية (Grid Background & Glows) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-blue-600/10 to-transparent blur-3xl pointer-events-none"></div>

      {/* 1. Navbar */}
      <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-cyan-500/20">
              ✦
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              <span className="text-cyan-400 font-light">شفاء تك</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#bento" className="hover:text-cyan-400 transition">الأنظمة الرقمية</a>
            <a href="#calculator" className="hover:text-cyan-400 transition">حاسبة الأداء</a>
            <a href="#contact" className="hover:text-cyan-400 transition">طلب التجربة</a>
          </nav>

          <a
            href="#contact"
            className="relative group overflow-hidden rounded-xl p-px font-semibold text-xs transition"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl group-hover:opacity-90 transition"></span>
            <span className="relative block px-5 py-2.5 bg-slate-950 rounded-[11px] text-white group-hover:bg-transparent transition">
              حجز عرض توضيحي
            </span>
          </a>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="relative w-full pt-20 pb-16 px-6 text-center bg-gradient-to-r from-cyan-500 to-blue-600">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/20 bg-white/10 text-white text-xs font-semibold mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-300 animate-pulse"></span>
            متخصصين في تطوير الأنظمة الطبية
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.15] max-w-4xl mx-auto overflow-hidden text-white">
            <span className="block animate-[slideFromRight_0.8s_ease-out_forwards] opacity-0">
              البنية التحتية البرمجية
            </span>
            <span className="block mt-2 animate-[slideFromLeft_0.8s_ease-out_0.25s_forwards] opacity-0 drop-shadow-lg">
              للمنشآت الطبية الحديثة
            </span>
          </h1>

          <p className="mt-6 text-slate-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
  نطوّر أنظمة رقمية تساعد المنشآت الصحية على تحسين رحلة المريض،
  تنظيم التشغيل، ورفع كفاءة العمل من خلال حلول مترابطة وقابلة للتوسع.
</p>
        </FadeIn>

        {/* محاكي النظام الحي */}
        <FadeIn delay={0.2} direction="up">
          <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/80 p-4 sm:p-6 backdrop-blur-2xl shadow-2xl shadow-cyan-950/30 text-right">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab('queue')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    activeTab === 'queue' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  شاشة شريط النداء
                </button>
                <button
                  onClick={() => setActiveTab('patient')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    activeTab === 'patient' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  تطبيق جوال المريض
                </button>
                <button
                  onClick={() => setActiveTab('analytics')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    activeTab === 'analytics' ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  التحليلات الحية
                </button>
              </div>
              <span className="text-xs font-mono text-slate-500 hidden sm:block">STATUS: ONLINE • 240 FPS</span>
            </div>

            {activeTab === 'queue' && (
              <div className="grid sm:grid-cols-3 gap-4 items-center bg-slate-950 p-6 rounded-2xl border border-slate-800">
                <div className="sm:col-span-2 text-right">
                  <span className="text-xs text-cyan-400 font-mono">النداء الحالي • عيادة الباطنية</span>
                  <div className="flex items-baseline gap-4 mt-2">
                    <span className={`text-5xl font-black font-mono transition-transform duration-300 ${isCalling ? 'scale-110 text-cyan-300' : 'text-white'}`}>
                      A-{ticketNumber}
                    </span>
                    <span className="text-slate-400 text-sm">الغرفة رقم 04</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">يرجى من المراجع التوجه فوراً لعيادة د. خالد</p>
                </div>
                <div className="border-t sm:border-t-0 sm:border-r border-slate-800 pt-4 sm:pt-0 sm:pr-6 text-center">
                  <button
                    onClick={handleIssueTicket}
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold py-3 px-4 rounded-xl shadow-lg shadow-cyan-500/20 active:scale-95 transition"
                  >
                    اضغط لاستدعاء التالي ⚡
                  </button>
                  <span className="text-[10px] text-slate-500 mt-2 block">تجربة تفاعلية حية</span>
                </div>
              </div>
            )}

            {activeTab === 'patient' && (
              <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 flex justify-between items-center text-right">
                <div>
                  <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] rounded-full font-bold">دورك اقترب</span>
                  <h4 className="font-bold text-lg mt-2 text-white">باقي مراجع واحد قبل دخولك</h4>
                  <p className="text-xs text-slate-400 mt-1">الوقت التقديري المتوقع: 4 دقائق</p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center font-mono font-bold text-cyan-400">
                  QR
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="grid grid-cols-3 gap-3 text-right">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <div className="text-slate-500 text-xs">معدل الانتظار</div>
                  <div className="text-xl font-bold text-cyan-400 mt-1">3.2 دقيقة</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <div className="text-slate-500 text-xs">المراجعين اليوم</div>
                  <div className="text-xl font-bold text-blue-400 mt-1">1,420</div>
                </div>
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <div className="text-slate-500 text-xs">نسبة الخروج بالوقت</div>
                  <div className="text-xl font-bold text-emerald-400 mt-1">98.4%</div>
                </div>
              </div>
            )}
          </div>
        </FadeIn>
      </section>

      {/* 3. الأنظمة الرقمية */}
<section id="bento" className="py-24 w-full bg-gradient-to-r from-cyan-500 to-blue-600 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6">

    <FadeIn direction="up">
      <div className="text-center mb-16">
        <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold backdrop-blur-md">
          حلول رقمية متكاملة
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-5">
          أنظمة مصممة لتسهيل تشغيل منشأتك
        </h2>

        <p className="text-slate-100 mt-4 max-w-2xl mx-auto leading-relaxed">
          حلول واضحة وعملية تساعد المنشآت الصحية على تنظيم العمل،
          تحسين تجربة المراجع، ومتابعة الأداء من مكان واحد.
        </p>
      </div>
    </FadeIn>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* 1 - بطاقة نظام رحلة المريض */}
<FadeIn
  delay={0.1}
  className="lg:col-span-2 rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 relative overflow-hidden group shadow-xl"
>
  <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

  <span className="text-xs font-mono text-cyan-400 tracking-widest font-bold">
    PATIENT JOURNEY
  </span>

  <h3 className="text-2xl font-bold mt-3 text-white">
    نظام رحلة المريض
  </h3>

  <p className="text-slate-300 text-sm mt-3 leading-relaxed max-w-xl">
    ينظم رحلة المريض من الحجز والوصول، إلى الانتظار والعيادة وحتى انتهاء الزيارة،
    مع إشعارات ومتابعة لكل مرحلة.
  </p>

  <div className="mt-6 flex flex-wrap gap-2">
    {['المواعيد', 'الانتظار', 'التنبيهات', 'متابعة الرحلة'].map((item) => (
      <span
        key={item}
        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
      >
        ✓ {item}
      </span>
    ))}
  </div>

  {/* ⚡ الزر الجديد للانتقال للديمو المباشر */}
  <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between">
    <Link
      href="/demo/patient-journey"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 text-xs font-black transition shadow-lg shadow-cyan-500/20 active:scale-95"
    >
      <span>تجربة الديمو التفاعلي الآن</span>
      <span>↗</span>
    </Link>
    <span className="text-[11px] text-slate-500 hidden sm:block">محاكاة حية ثنائية الشاشة</span>
  </div>
</FadeIn>
      {/* 2 */}
      <FadeIn
        delay={0.15}
        className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-xl"
      >
        <span className="text-xs font-mono text-pink-400 tracking-widest font-bold">
          PATIENT EXPERIENCE
        </span>

        <h3 className="text-xl font-bold mt-3 text-white">
          نظام تجربة المراجع
        </h3>

        <p className="text-slate-300 text-sm mt-3 leading-relaxed">
          يساعد المنشأة على معرفة رضا المراجعين واستقبال الشكاوى والاقتراحات
          ومتابعتها حتى يتم التعامل معها.
        </p>

        <div className="mt-6 text-xs text-slate-400 bg-slate-950 border border-slate-800 rounded-xl p-4">
          تقييم • شكوى • اقتراح • متابعة
        </div>
      </FadeIn>

      {/* 3 */}
      <FadeIn
        delay={0.2}
        className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-xl"
      >
        <span className="text-xs font-mono text-blue-400 tracking-widest font-bold">
          INTERNAL REQUESTS
        </span>

        <h3 className="text-xl font-bold mt-3 text-white">
          نظام إدارة الطلبات الداخلية
        </h3>

        <p className="text-slate-300 text-sm mt-3 leading-relaxed">
          يحول طلبات الموظفين والأقسام إلى معاملات إلكترونية واضحة،
          مع تحويل الطلب للجهة المختصة ومعرفة حالته حتى الإنجاز.
        </p>

        <div className="mt-6 flex items-center gap-2 text-xs text-slate-400">
          <span className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800">
            طلب جديد
          </span>
          <span>←</span>
          <span className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800">
            معالجة
          </span>
          <span>←</span>
          <span className="px-3 py-2 rounded-lg bg-slate-950 border border-slate-800">
            مكتمل
          </span>
        </div>
      </FadeIn>

      {/* 4 */}
      <FadeIn
        delay={0.25}
        className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-xl"
      >
        <span className="text-xs font-mono text-emerald-400 tracking-widest font-bold">
          CLINIC OPERATIONS
        </span>

        <h3 className="text-xl font-bold mt-3 text-white">
          نظام إدارة العيادات والتشغيل
        </h3>

        <p className="text-slate-300 text-sm mt-3 leading-relaxed">
          يساعد الإدارة على تنظيم العيادات والغرف والمواعيد والكادر الطبي،
          ومعرفة مستوى الضغط والتأخير داخل المنشأة.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs">
          <div className="bg-slate-950 rounded-xl p-3">
            <div className="text-white font-bold">12</div>
            <div className="text-slate-500 mt-1">عيادة</div>
          </div>
          <div className="bg-slate-950 rounded-xl p-3">
            <div className="text-white font-bold">18</div>
            <div className="text-slate-500 mt-1">غرفة</div>
          </div>
          <div className="bg-slate-950 rounded-xl p-3">
            <div className="text-white font-bold">86%</div>
            <div className="text-slate-500 mt-1">تشغيل</div>
          </div>
        </div>
      </FadeIn>

      {/* 5 */}
      <FadeIn
        delay={0.3}
        className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-xl"
      >
        <span className="text-xs font-mono text-orange-400 tracking-widest font-bold">
          ASSET & MAINTENANCE
        </span>

        <h3 className="text-xl font-bold mt-3 text-white">
          نظام الصيانة والأصول الطبية
        </h3>

        <p className="text-slate-300 text-sm mt-3 leading-relaxed">
          يسجل الأجهزة والمعدات الطبية، ويستقبل بلاغات الأعطال،
          ويتابع الصيانة الوقائية والإصلاحات حتى الإغلاق.
        </p>

        <div className="mt-6 text-xs text-slate-400 bg-slate-950 border border-slate-800 rounded-xl p-4">
          جهاز ← بلاغ ← فني ← صيانة ← إغلاق
        </div>
      </FadeIn>

      {/* 6 */}
      <FadeIn
        delay={0.35}
        className="lg:col-span-2 rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 relative overflow-hidden shadow-xl"
      >
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <span className="text-xs font-mono text-violet-400 tracking-widest font-bold">
          LIVE DASHBOARD
        </span>

        <h3 className="text-2xl font-bold mt-3 text-white">
          لوحة القيادة التشغيلية
        </h3>

        <p className="text-slate-300 text-sm mt-3 leading-relaxed max-w-xl">
          تمنح الإدارة صورة واضحة عن أداء المنشأة لحظيًا،
          من أعداد المراجعين والانتظار إلى ضغط العيادات ومستوى التشغيل.
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            ['1,420', 'مراجع اليوم'],
            ['3.2 د', 'متوسط الانتظار'],
            ['18', 'عيادة نشطة'],
            ['94%', 'كفاءة التشغيل'],
          ].map(([value, label]) => (
            <div
              key={label}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-4"
            >
              <div className="text-lg font-black text-white">{value}</div>
              <div className="text-[11px] text-slate-500 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* 7 */}
      <FadeIn
        delay={0.4}
        className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-xl"
      >
        <span className="text-xs font-mono text-amber-400 tracking-widest font-bold">
          VISITOR MANAGEMENT
        </span>

        <h3 className="text-xl font-bold mt-3 text-white">
          نظام إدارة الزيارات والمرافق
        </h3>

        <p className="text-slate-300 text-sm mt-3 leading-relaxed">
          ينظم دخول الزوار والمراجعين ويساعد المنشأة على معرفة حركة الدخول
          والخروج وإدارة التصاريح والزيارات بشكل أكثر تنظيمًا.
        </p>

        <div className="mt-6 text-xs text-slate-400 bg-slate-950 border border-slate-800 rounded-xl p-4">
          تسجيل دخول • تصريح • متابعة • خروج
        </div>
      </FadeIn>

      {/* 8 - نظام إدارة طوابير الانتظار */}
<FadeIn
  delay={0.45}
  className="lg:col-span-2 rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 relative overflow-hidden group shadow-xl"
>
  <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

  <span className="text-xs font-mono text-cyan-400 tracking-widest font-bold">
    QUEUE MANAGEMENT
  </span>

  <h3 className="text-2xl font-bold mt-3 text-white">
    نظام إدارة طوابير الانتظار
  </h3>

  <p className="text-slate-300 text-sm mt-3 leading-relaxed max-w-xl">
    ينظم استقبال المراجعين وانتظارهم داخل المنشأة، مع إصدار أرقام الانتظار
    واستدعائهم للعيادات والغرف ومتابعة حالة الطابور لحظيًا.
  </p>

  <div className="mt-6 flex flex-wrap gap-2">
    {[
      'تذاكر إلكترونية',
      'استدعاء المراجعين',
      'شاشات الانتظار',
      'تنبيهات صوتية',
      'متابعة لحظية',
    ].map((item) => (
      <span
        key={item}
        className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300"
      >
        ✓ {item}
      </span>
    ))}
  </div>
</FadeIn>

{/* 9 - نظام الشاشات الإعلانية */}
<FadeIn
  delay={0.5}
  className="rounded-3xl border border-slate-800/80 bg-slate-900/95 p-8 shadow-xl"
>
  <span className="text-xs font-mono text-violet-400 tracking-widest font-bold">
    DIGITAL SIGNAGE
  </span>

  <h3 className="text-xl font-bold mt-3 text-white">
    نظام الشاشات الإعلانية
  </h3>

  <p className="text-slate-300 text-sm mt-3 leading-relaxed">
    إدارة محتوى الشاشات داخل المنشأة لعرض الإعلانات والتنبيهات والتعليمات
    والعروض الصحية، مع التحكم بالمحتوى وجدولته من لوحة واحدة.
  </p>

  <div className="mt-6 bg-slate-950 border border-slate-800 rounded-2xl p-4">
    <div className="flex items-center justify-between text-xs">
      <span className="text-slate-400">الشاشات المتصلة</span>
      <span className="text-emerald-400 font-bold">12 شاشة</span>
    </div>

    <div className="mt-3 h-1.5 bg-slate-900 rounded-full overflow-hidden">
      <div className="h-full w-[92%] bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"></div>
    </div>

    <div className="mt-3 text-[11px] text-slate-500">
      محتوى مجدول • تنبيهات فورية • تحكم مركزي
    </div>
  </div>
</FadeIn>

    </div>
  </div>
</section>
      
      {/* 4. CTA & Form Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <FadeIn direction="up">
          <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 p-8 sm:p-12 backdrop-blur-2xl text-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl"></div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">جاهز لتحديث أنظمة مستشفاك؟</h2>
            <p className="text-slate-400 text-sm mt-3 max-w-lg mx-auto">
              تواصل معنا لإدراج مستشفاك أو عيادتك ضمن العرض التجريبي المباشر للأنظمة.
            </p>

            {formSubmitted ? (
              <div className="mt-8 p-6 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl text-cyan-300 text-sm font-bold">
                ✓ تم استقبال طلبك بنجاح. يتواصل معك مهندس النظام خلال ساعات.
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="mt-8 grid sm:grid-cols-2 gap-4 text-right max-w-xl mx-auto"
              >
                <input
                  type="text"
                  required
                  placeholder="الاسم الكريم"
                  className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none text-white transition"
                />
                <input
                  type="text"
                  required
                  placeholder="اسم المنشأة الطبية"
                  className="bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none text-white transition"
                />
                <input
                  type="text"
                  required
                  placeholder="رقم الجوال / البريد"
                  className="sm:col-span-2 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:border-cyan-500 outline-none text-white transition"
                />
                <button
                  type="submit"
                  className="sm:col-span-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black py-3.5 rounded-xl transition shadow-lg shadow-cyan-500/20 active:scale-[0.99]"
                >
                  إرسال طلب العرض التجريبي
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </section>

      {/* 5. Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-10 text-center text-xs text-slate-500 relative z-10">
  <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
    {/* شعار واسم المنصة */}
    <div className="flex items-center gap-2">
      <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-xs shadow-md shadow-cyan-500/20">
        ✦
      </div>
      <span className="font-extrabold text-slate-200 text-sm tracking-tight">
        شفاء تك <span className="text-cyan-400 font-light">| ShefaTech</span>
      </span>
    </div>
  </div>
</footer>
    </div>
  );
}
