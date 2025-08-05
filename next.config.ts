import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  publicRuntimeConfig: {
    TEST_ENV: process.env.TEST_ENV,
    NEXT_PUBLIC_TEST_ENV: process.env.NEXT_PUBLIC_TEST_ENV,
  },
};

export default nextConfig;
