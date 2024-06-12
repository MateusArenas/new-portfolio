/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com', 'raw.githubusercontent.com', 'github.com', 'github.com'],
  },
}

module.exports = nextConfig
