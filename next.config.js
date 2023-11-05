/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
            },
          ],
    },
    async rewrites() {
        return [
            {
                source: '/user',
                destination: '/user/profile'
            },
            {
                source: '/booking/success/:path*',
                destination: '/booking/success'
            }
        ]
    }
}

module.exports = nextConfig
