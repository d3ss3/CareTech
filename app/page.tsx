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
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-cyan-500/10 via-blue-600/10 to-transparent blur-3xl pointer-events-none"></div>

      {/* 1. Navbar */}
      <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-cyan-500/20">
              ✦
            </div>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              <span className="text-cyan-400 font-light">CareTech</span>
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
      <section className="relative pt-20 pb-16 px-6 max-w-7xl mx-auto text-center">
        <FadeIn direction="up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-semibold mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            جيل جديد من برمجيات تشغيل المستشفيات
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.15] max-w-4xl mx-auto">
            البنية التحتية البرمجية <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              للمنشآت الطبية الحديثة
            </span>
          </h1>

          <p className="mt-6 text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            نحول إدارة الطوابير، الموارد البشرية، وتجربة المراجعين إلى منظومة سحابية متكاملة فائقة السرعة مع ربط مباشر بـ HIS.
          </p>
        </FadeIn>

        {/* التفاعلية 1: محاكي النظام الحي داخل قسم الهيرو */}
        <FadeIn delay={0.2} direction="up">
          <div className="mt-12 max-w-4xl mx-auto rounded-3xl border border-slate-800 bg-slate-900/60 p-4 sm:p-6 backdrop-blur-2xl shadow-2xl shadow-cyan-950/30">
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

            {/* محتوى التبويبات المتغيرة */}
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
                  <h4 className="font-bold text-lg mt-2">باقي مراجع واحد قبل دخولك</h4>
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

      {/* 3. Bento Grid Section */}
      <section id="bento" className="py-20 px-6 max-w-7xl mx-auto">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">منظومة مخصصة للارتقاء بالتطبيق الطبي</h2>
            <p className="text-slate-400 mt-3">كل ما تحتاجه إدارتك الصحية في واجهة واحدة متناسقة</p>
          </div>
        </FadeIn>

        {/* شبكة البينتو مع تحريك متدرج لكل بطاقة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Queue System */}
          <FadeIn delay={0.1} className="md:col-span-2 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl hover:border-cyan-500/40 transition duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition"></div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">FLAGSHIP SYSTEM</span>
            <h3 className="text-2xl font-bold mt-2">نظام الانتظار والنداء الآلي الذكي</h3>
            <p className="text-slate-400 text-sm mt-3 leading-relaxed max-w-lg">
              إدارة مرنة للطوابير مع تحكم كامل بشاشات العيادات، إصدار التذاكر عبر الجوال، ونداء صوتي متعدد اللغات يقلل الازدحام بنسبة تصل إلى 60%.
            </p>
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-3">
              {['تذاكر رقمية QR', 'تكامل مع الشاشات', 'ربط سحابي مباشر', 'تنبيهات SMS / WhatsApp'].map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300">
                  ✓ {tag}
                </span>
              ))}
            </div>
          </FadeIn>

          {/* Card 2: HR System */}
          <FadeIn delay={0.2} className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl hover:border-blue-500/40 transition duration-300 relative overflow-hidden">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">HR & ROSTER</span>
            <h3 className="text-xl font-bold mt-2">أتمتة الموارد البشرية الطبية</h3>
            <p className="text-slate-400 text-xs mt-3 leading-relaxed">
              تخطيط مناوبات الشيفتات المعقدة للكادر الطبي، متابعة البدلات، وحساب الساعات الإضافية بدقة فائقة.
            </p>
            <div className="mt-6 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-2">
              <div className="flex justify-between text-slate-400">
                <span>تغطية الطوارئ اليوم:</span>
                <span className="text-emerald-400 font-bold">100%</span>
              </div>
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-full"></div>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: UI/UX Medical Design */}
          <FadeIn delay={0.3} className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl hover:border-indigo-500/40 transition duration-300">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest">DESIGN SYSTEMS</span>
            <h3 className="text-xl font-bold mt-2">تصميم الواجهات الطبية (UI/UX)</h3>
            <p className="text-slate-400 text-xs mt-3 leading-relaxed">
              بناء وتطوير واجهات البوابات الطبية بنظم إرشادية تمنع الأخطاء أثناء إدخال بيانات المرضى وتسرع استجابة الكادر.
            </p>
          </FadeIn>

          {/* Card 4: Calculator / ROI Integration */}
          <FadeIn delay={0.4} className="md:col-span-2 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl hover:border-cyan-500/40 transition duration-300">
            <div id="calculator">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">INTERACTIVE CALCULATOR</span>
                  <h3 className="text-2xl font-bold mt-1">حاسبة رفع كفاءة التشغيل</h3>
                  <p className="text-slate-400 text-xs mt-1">حدد متوسط عدد مراجعي المنشأة يومياً للتحقق من النتائج المتوقعة:</p>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-bold mb-2">
                    <span>عدد المراجعين اليومي:</span>
                    <span className="text-cyan-400 font-mono text-lg">{dailyPatients} مراجع</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="50"
                    value={dailyPatients}
                    onChange={(e) => setDailyPatients(Number(e.target.value))}
                    className="w-full accent-cyan-400 bg-slate-950 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                    <div className="text-slate-500 text-xs">ساعات انتظار موفرة شهرياً</div>
                    <div className="text-2xl font-black text-cyan-400 font-mono mt-1">+{hoursSavedPerMonth.toLocaleString()} ساعة</div>
                  </div>
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                    <div className="text-slate-500 text-xs">معدل رضا المراجعين التقديري</div>
                    <div className="text-2xl font-black text-emerald-400 font-mono mt-1">{satisfactionRate}%</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
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
      <footer className="border-t border-slate-800/80 py-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} CareTech OS. تم بناء هذه الصفحة باستخدام Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}