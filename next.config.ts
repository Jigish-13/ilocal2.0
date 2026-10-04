import type { NextConfig } from 'next';
const config: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  turbopack: { root: process.cwd() },
  skipTrailingSlashRedirect: true,
  images: { formats: ['image/avif', 'image/webp'] },
  async redirects() {
    return [
      {
        source: '/industries/pharmacy/:path*',
        destination: '/who-we-serve#retail',
        statusCode: 301,
      },
      {
        source: '/industries/hospital/:path*',
        destination: '/who-we-serve#health-systems',
        statusCode: 301,
      },
      {
        source: '/industries/employer/:path*',
        destination: '/who-we-serve#employers',
        statusCode: 301,
      },
      { source: '/products/:path*', destination: '/technology#hardware', statusCode: 301 },
      { source: '/about/:path*', destination: '/company', statusCode: 301 },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};
export default config;
