'use client';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
              +
            </span>
            <span className="font-bold text-xl text-slate-800">
              صِحّة للحلول البرمجية
            </span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-blue-600 transition">
              الخدمات
            </a>
            <a href="#queue-system" className="hover:text-blue-600 transition">
              نظام الانتظار
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              تواصل معنا
            </a>
          </nav>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            طلب عرض سعر
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wider">
          أنظمة رقمية متكاملة للقطاع الصحي
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-6 leading-tight">
          ارتقِ بمستوى تجربة المراجعين <br />
          <span className="text-blue-600">وبكفاءة التشغيل الطبي</span>
        </h1>
        <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
          نطور أنظمة رقمية مخصصة للمستشفيات والعيادات لتنظيم الطوابير، إدارة
          الموارد البشرية، وتصميم واجهات سهلة الاستخدام تعزز جودة الخدمة.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-blue-700 transition"
          >
            احجز تجربة تجريبية (Demo)
          </a>
          <a
            href="#queue-system"
            className="bg-white border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-medium hover:bg-slate-100 transition"
          >
            استكشف نظام الانتظار
          </a>
        </div>
      </section>

      {/* Queue System Highlight */}
      <section id="queue-system" className="bg-white py-16 border-y">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-bold text-sm">
              منتجنا الرئيسي
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              نظام إدارة الانتظار والنداء الذكي
            </h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              نظام مرن يعمل على جميع الشاشات والأجهزة اللوحية لتنظيم حركة المرضى
              في العيادات والمختبرات والأشعة، مع تقارير لحظية لقياس أداء الكادر
              الطبي.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'إصدار تذاكر رقمية (QR Code) أو مطبوعة',
                'شاشات عرض التنبيهات مع نداء صوتي موجه',
                'ربط كامل مع أنظمة المستشفى (HIS)',
                'تحليلات فورية لمتوسط وقت انتظار المراجع',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-slate-700 font-medium"
                >
                  <span className="text-green-500 font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl text-white font-mono text-sm border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
              <span className="text-xs text-slate-400">
                لوحة تحكم الاستقبال الحية
              </span>
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            </div>
            <div className="space-y-3">
              <div className="bg-slate-800 p-3 rounded flex justify-between">
                <span>عيادة العظام (د. أحمد)</span>
                <span className="text-emerald-400 font-bold">
                  التذكرة الحالية: A-104
                </span>
              </div>
              <div className="bg-slate-800 p-3 rounded flex justify-between">
                <span>المختبر الرئيسي</span>
                <span className="text-emerald-400 font-bold">
                  التذكرة الحالية: L-022
                </span>
              </div>
              <div className="bg-slate-800 p-3 rounded flex justify-between">
                <span>الأشعة المقطعية</span>
                <span className="text-emerald-400 font-bold">
                  التذكرة الحالية: R-009
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">
            خدماتنا المخصصة للمنشآت الصحية
          </h2>
          <p className="text-slate-600 mt-2">
            حلول تقنية شاملة لتلبية الاحتياجات التشغيلية والبرمجية
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl border hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold mb-4">
              👥
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              أنظمة الموارد البشرية (HR)
            </h3>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              تتبع مناوبات الأطباء والممرضين، إجازات الكادر، وتوثيق الساعات
              والرواتب وفق اللوائح التنظيمية.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold mb-4">
              🎨
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              تصميم الواجهات الطبية (UI/UX)
            </h3>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              واجهات مستخدم احترافية ومريحة للبوابات الطبية ولوحات التحكم لتقليل
              أخطاء الإدخال وتسريع العمل.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold mb-4">
              ⚙️
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              أتمتة واستشارات تقنية
            </h3>
            <p className="text-slate-600 mt-2 text-sm leading-relaxed">
              ربط الأنظمة القديمة بالأنظمة الحديثة وتسهيل تبادل البيانات الطبية
              بأعلى درجات الأمان.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="bg-blue-600 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            جاهز لتطوير المنظومة الرقمية لمستشفاك؟
          </h2>
          <p className="mt-4 text-blue-100">
            تواصل معنا اليوم للاتفاق على عرض توضيحي وتحديد متطلبات مشروعك.
          </p>
          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني أو هاتفك"
              className="px-4 py-3 rounded-xl text-slate-900 w-full outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button
              type="submit"
              className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition"
            >
              ارسل الطلب
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} جميع الحقوق محفوظة لـ صِحّة للحلول
        البرمجية.
      </footer>
    </div>
  );
}
