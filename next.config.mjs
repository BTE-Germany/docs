import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: ['d4rdaoypx775z.cloudfront.net'],
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/docs/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        permanent: true,
      }
    ]
  },
};

export default withMDX(config);
