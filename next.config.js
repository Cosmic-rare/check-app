/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    ...require(`./env.${process.env.NODE_ENV}.js`),
  },
}

module.exports = nextConfig
