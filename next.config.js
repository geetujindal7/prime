/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com","amazonuk.gcs-web.com"]
  }
}

module.exports = nextConfig
