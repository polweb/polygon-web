import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    appIsrStatus: false,
  },
  /* config options here */
  env: {
    SERVICE_DOMAIN: process.env.SERVICE_DOMAIN,
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
