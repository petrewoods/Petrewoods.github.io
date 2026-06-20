import type { NextConfig } from "next";

// Fully static export for GitHub Pages (petrewoods.github.io is a user page → root basePath).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
