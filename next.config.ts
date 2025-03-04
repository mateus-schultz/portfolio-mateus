import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["github.com"],
  },
  basePath: "/portfolio-mateus",
  output: "export",
};

export default nextConfig;
