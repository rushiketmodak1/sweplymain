// /** @type {import('next').NextConfig} */
// module.exports = {
//   basePath: '/wallet',
//   transpilePackages: ["@repo/ui"],
// };

const {
    MASTER_URL = 'http://localhost:3000',
  } = process.env
  
  module.exports = {
    transpilePackages: ['@repo/ui'],
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: `/:path*`,
        },
        // master
        {
          source: '/master',
          destination: `${ MASTER_URL}/master`,
        },
        {
          source: '/master/:path*',
          destination: `${ MASTER_URL}/master/:path*`,
        },
      ]
    },
  }
  