// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ✅ Skip type errors during build
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;