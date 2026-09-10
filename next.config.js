// ترقيع الشاشات القياسية لبيئات التشغيل الافتراضية
['stdout', 'stderr'].forEach((stream) => {
  if (process[stream]) {
    if (!process[stream]._handle) {
      process[stream]._handle = {};
    }
    process[stream]._handle.setBlocking = () => {};
  }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
