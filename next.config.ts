import type { NextConfig } from "next";

/**
 * Static export — deploy `out/` folder to Vercel, Netlify, or GitHub Pages.
 * For GitHub Pages at username.github.io/REPO-NAME, set before build:
 *   NEXT_PUBLIC_BASE_PATH=/REPO-NAME
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
