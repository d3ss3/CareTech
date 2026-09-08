'use client';

import React, { useState } from 'react';

export default function LandyMedicalPage() {
  const [formData, setFormData] = useState({ name: '', email: '', facility: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('شكرًا لتواصلك معنا! سيقوم فريقنا الفني بالرد عليك في أقرب وقت.');
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-blue-200 shadow-lg">
              +
            </div>
            <span className="font-extrabold text-2xl text-slate-900 tracking-tight">كيرتيك <span className="text-blue-600">CareTech</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition">عن المنظومة</a>
            <a href="#queue-system" className="hover:text-blue-600 transition">نظام الانتظار</a>
            <a href="#hr-system" className="hover:text-blue-600 transition">الموارد البشرية</a>
            <a href="#services" className="hover:text-blue-600 transition">خدماتنا</a>
          </nav>

          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md shadow-blue-500/20 transition"
          >
            تواصل معنا
          </a>
        </div>
      </header>

      {/* 2. Hero Block (Intro Section) */}
      <section className="py-20 md:py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="px-3.5 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider inline-block mb-4 border border-blue-100">
            حلول برمجية صحية متكاملة
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            تحول رقمي ذكي <br />
            <span className="text-blue-600">للمستشفيات والعيادات</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg mt-6 leading-relaxed">
            نقدم حلولاً متقدمة تتضمن أنظمة إدارة الانتظار والنداء الآلي، إدارة الموارد البشرية الطبية، وتصميم واجهات واحترافية تسهم في رفع كفاءة المنشآت الصحية وتطوير تجربة المريض.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition"
            >
              طلب عرض تجريبي (Demo)
            </a>
            <a
              href="#queue-system"
              className="bg-slate-100 text-slate-700 px-7 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition"
            >
              استكشف الأنظمة
            </a>
          </div>
        </div>

        {/* Visual Graphic Representation */}
        <div className="relative bg-gradient-to-tr from-blue-600 to-indigo-700 p-8 rounded-3xl text-white shadow-2xl">
          <div className="absolute -top-4 -right-4 bg-white text-slate-900 p-4 rounded-2xl shadow-xl font-bold text-xs flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
            نظام الانتظار نشط الآن
          </div>
          <div className="space-y-4 font-mono text-sm">
            <div className="text-blue-200 text-xs uppercase tracking-wider">لوحة التحليلات المباشرة</div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <div className="text-xs text-blue-200">متوسط وقت الانتظار الحالي</div>
              <div className="text-2xl font-bold mt-1">04 دقيقة : 12 ثانية</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
              <div className="text-xs text-blue-200">عدد المراجعين المنظّمين اليوم</div>
              <div className="text-2xl font-bold mt-1">1,248 مراجع</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Middle Block (Mission Statement - Inspired by Landy Middle Block) */}
      <section id="about" className="bg-slate-50 py-20 px-6 text-center border-y border-slate-200/60">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">نحدث الفارق في إدارة المنشآت الصحية</h2>
          <p className="text-slate-600 mt-4 leading-relaxed text-base md:text-lg">
            تم تصميم أنظمتنا خصيصاً لتناسب بيئة العمل الشاقة داخل المستشفيات والعيادات. نهدف إلى القضاء على العشوائية في صالات الانتظار وتسهيل المتابعة الإدارية للكادر الطبي عبر واجهات سريعة وموثوقة.
          </p>
        </div>
      </section>

      {/* 4. Right Content Block (Queue System Spotlight) */}
      <section id="queue-system" className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">المنتج الرئيسي</span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-2">نظام إدارة الانتظار والنداء الذكي (QMS)</h2>
          <p className="text-slate-600 mt-4 leading-relaxed">
            نظام متكامل يتيح للمراجعين حجز التذاكر عبر أجهزة التوزيع الذاتي أو الاستجابة السريعة (QR Code)، مع نداء صوتي وتنبيهات فورية على الشاشات لتقليل تكدس المرضى.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="font-bold text-slate-900 text-lg">تذكرة QR رقمية</div>
              <p className="text-xs text-slate-500 mt-1">متابعة الدور مباشرة عبر جوال المريض</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="font-bold text-slate-900 text-lg">نداء صوتي متعدد</div>
              <p className="text-xs text-slate-500 mt-1">تنبيه آلي باللغتين العربية والإنجليزية</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xl space-y-3">
          <div className="border-b pb-3 font-bold text-slate-700 text-sm">عرض شاشات العيادات الحية</div>
          <div className="bg-blue-50 border border-blue-100 p-3 rounded-lg flex justify-between items-center">
            <div>
              <div className="font-bold text-blue-900">عيادة B1 - الباطنية</div>
              <div className="text-xs text-blue-600">الطبيب: د. خالد السعيد</div>
            </div>
            <span className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-md">B-201</span>
          </div>
          <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg flex justify-between items-center">
            <div>
              <div className="font-bold text-slate-800">عيادة C2 - الأطفال</div>
              <div className="text-xs text-slate-500">الطبيب: د. سارة العتيبي</div>
            </div>
            <span className="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-md">C-104</span>
          </div>
        </div>
      </section>

      {/* 5. Left Content Block (HR & Admin System Spotlight) */}
      <section id="hr-system" className="py-20 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 bg-white p-6 rounded-2xl border border-slate-200 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b pb-3">
              <span className="font-bold text-slate-800">جدول المناوبات والشيفتات</span>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-1 rounded">مكتمل 100%</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2.5 bg-slate-50 rounded">
                <span>الكادر الطبي (الأطباء)</span>
                <span className="font-bold text-slate-700">24 طبيب نشط</span>
              </div>
              <div className="flex justify-between p-2.5 bg-slate-50 rounded">
                <span>تمريض الطوارئ والتنويم</span>
                <span className="font-bold text-slate-700">48 ممرض/ممرضة</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <span className="text-blue-600 font-bold text-sm tracking-wider uppercase">أنظمة التشغيل</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">نظام الموارد البشرية للقطاع الطبي (HR)</h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              نظام مصمم لتلبية متطلبات المرافِق الصحية من إدارة الشيفتات والمناوبات المتغيرة، متابعة الإجازات البديلة، وحساب المستحقات الإضافية بدقة ووفق الأنظمة المحلية.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Services Grid Section */}
      <section id="services" className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">خدماتنا البرمجية المخصصة</h2>
          <p className="text-slate-600 mt-2">نطور ونساند البرمجيات الطبية بأعلى معايير الجودة والأمان</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition group">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
              🎨
            </div>
            <h3 className="text-xl font-bold text-slate-900">تصميم الواجهات الطبية (UI/UX)</h3>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              تصميم واجهات وسيطة للبوابات الطبية ولوحات التحكم تراعي سهولة الاستخدام السريع وتمنع الأخطاء البشرية.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition group">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
              🔗
            </div>
            <h3 className="text-xl font-bold text-slate-900">ربط الأنظمة (HIS Integration)</h3>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              ربط أنظمة الانتظار والموارد البشرية بنظام معلومات المستشفى الرئيسي ببروتوكولات آمنة وموثوقة.
            </p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-xl transition group">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
              🛠️
            </div>
            <h3 className="text-xl font-bold text-slate-900">الدعم الفني والصيانة</h3>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              عقود صيانة سنوية (SLA) تضمن استقرار السيرفرات والتحديثات المستمرة والتجاوب الفوري مع البلاغات.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Contact Form Block (Inspired by Landy Form) */}
      <section id="contact" className="py-20 bg-slate-900 text-white px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold">طلب عرض سعر أو تجربة</h2>
            <p className="text-slate-400 mt-4 leading-relaxed">
              تواصل معنا لتحديد متطلبات مستشفاك أو عيادتك، وسيقوم فريقنا التقني بإعداد عرض سعر مخصص وتقديم تجربة حية للأنظمة.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">الاسم الكامل</label>
              <input
                type="text"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm focus:border-blue-500 outline-none text-white"
                placeholder="أدخل اسمك"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">اسم المستشفى / العيادة</label>
              <input
                type="text"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm focus:border-blue-500 outline-none text-white"
                placeholder="مثال: مستشفى الحياة الطبية"
                value={formData.facility}
                onChange={(e) => setFormData({ ...formData, facility: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">البريد الإلكتروني / الهاتف</label>
              <input
                type="text"
                required
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm focus:border-blue-500 outline-none text-white"
                placeholder="contact@facility.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">تفاصيل الطلب</label>
              <textarea
                rows={3}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-3 text-sm focus:border-blue-500 outline-none text-white"
                placeholder="اكتب تفاصيل النظام المطلوب..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-blue-600/30"
            >
              إرسال الطلب
            </button>
          </form>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-slate-950 text-slate-500 py-8 text-center text-sm border-t border-slate-800">
        © {new Date().getFullYear()} كيرتيك للحلول البرمجية الطبية. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
}