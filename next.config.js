/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: "build",
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
