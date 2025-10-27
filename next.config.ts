import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    qualities: [50, 75, 100],
  },
};

export default nextConfig;
