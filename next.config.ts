import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 keeps small UI text in case-study figures legible after re-encoding.
    qualities: [75, 90],
  },
};

export default nextConfig;
