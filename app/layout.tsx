import './globals.css';
import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';

// استدعاء خط عربي احترافي لشبكة الواجهات الطبية
const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'شفاء تك',
  description:
    'حلول برمجية متكاملة للمستشفيات والعيادات: نظام المواعيد، نظام الانتظار الذكي، أنظمة الموارد البشرية، وتصميم الواجهات الطبية بمختلف أنواعها.',
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
