import './globals.css';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';

// استدعاء خط عربي احترافي لشبكة الواجهات الطبية
const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'صِحّة للحلول البرمجية | أنظمة إدارة المستشفيات والانتظار',
  description:
    'حلول برمجية متكاملة للمستشفيات والعيادات: نظام إدارة الانتظار الذكي، أنظمة الموارد البشرية، وتصميم الواجهات الطبية.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
