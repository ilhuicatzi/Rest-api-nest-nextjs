/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
            port: '',
            pathname: '/dtgxrnxer/image/upload/**/*',
          },
        ],
      },
};

export default nextConfig;
