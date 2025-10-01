import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/Portfolio',
    assetPrefix: '/Portfolio/',
    trailingSlash: true,
    env: {
        NEXT_PUBLIC_BASE_PATH: '/Portfolio',
    },
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
