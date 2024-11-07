/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lidarr-data.moodmnky.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
