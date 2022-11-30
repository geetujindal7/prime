/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com","amazonuk.gcs-web.com"]
  },
  flags: {
    DEV_SSR: false,
  }
}

module.exports = nextConfig
