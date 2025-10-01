import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV ==='production';

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio/',
    trailingSlash: true,
};

export default nextConfig;
