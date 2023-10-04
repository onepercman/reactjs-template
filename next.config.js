/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: false,
  trailingSlash: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
}

module.exports = config
