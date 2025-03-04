import type { NextConfig } from "next";
import { name } from "./package.json";

const nextConfig: NextConfig = {
  images: {
    domains: ["github.com"],
    unoptimized: true,
  },
  basePath: `/${name}`,
  output: "export",
};

export default nextConfig;
