import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ["gsap"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
