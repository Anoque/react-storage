/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/auth',
        destination: '/auth/login',
        permanent: true,
      },
      {
        source: '/storage/settings',
        destination: '/storage/settings/account',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
