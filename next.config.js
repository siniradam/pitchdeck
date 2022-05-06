/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  images: {
    domains: ["picsum.photos"],
  },
  experimental: { images: { layoutRaw: true } },
};

module.exports = nextConfig;
