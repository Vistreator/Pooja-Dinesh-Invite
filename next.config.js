// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ✅ This skips type errors during build
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
