import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use webpack for contentlayer compatibility (Turbopack doesn't support contentlayer yet)
  turbopack: {},
};

export default withContentlayer(nextConfig);
