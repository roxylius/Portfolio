import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio/',
    trailingSlash: true,
     images: {
        unoptimized: true,
    },
};

export default nextConfig;
