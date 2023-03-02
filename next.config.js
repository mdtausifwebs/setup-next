/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"i.dummyjson.com"
      },
      {
        protocol:"https",
        hostname:"images/pexels.com"
      },
      {
        protocol:"https",
        hostname:"*.google.com"
      }
    ]
  }
}

module.exports = nextConfig
