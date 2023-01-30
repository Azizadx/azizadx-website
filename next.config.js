/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlas: true,
  images: {
    unoptimized: true
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  }
}

module.exports = nextConfig
