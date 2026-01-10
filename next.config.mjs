import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use webpack for contentlayer compatibility (Turbopack doesn't support contentlayer yet)
  turbopack: {},

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.trypoise.app' }],
        destination: 'https://trypoise.app/:path*',
        permanent: true,
      },
    ];
  },
};

export default withContentlayer(nextConfig);
