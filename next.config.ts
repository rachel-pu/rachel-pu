import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/rachel-pu",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
