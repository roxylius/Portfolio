import type { NextConfig } from 'next';

const isProd = process.env.NODE_ENV ==='production';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* config options here */
    output: isProd ? 'export' : 'standalone',
    basePath: isProd ? '/Portfolio' : '',
    assetPrefix: isProd ? '/Portfolio/' : '',
    trailingSlash: true,
};

export default nextConfig;
