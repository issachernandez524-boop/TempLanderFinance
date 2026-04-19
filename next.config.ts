import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rtsinternational.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "www.bbcfactoring.com.mx",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
