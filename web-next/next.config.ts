import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  webpack: (config) => {
    config.resolve.alias['@shared'] = require('path').resolve(__dirname, '../shared');
    return config;
  }
};

export default nextConfig;
