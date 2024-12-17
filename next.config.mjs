/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['foodimages.store', 'd1imauelshvsi8.cloudfront.net'],
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*', // المسار الذي ستستخدمه في الكود
          destination: 'http://e-commerce-api.runasp.net/:path*', // رابط الـ API غير الآمن
        },
      ];
    },
  };
  
  export default nextConfig;
  