/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: false,
  trailingSlash: true,
  swcMinify: true,
  distDir: "/dist",
  output: "standalone",
}

module.exports = config
