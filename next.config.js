/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "res.cloudinary.com"
        ],
    },
    async rewrites() {
        return [
            {
                source: '/user',
                destination: '/user/profile'
            }
        ]
    }
}

module.exports = nextConfig
