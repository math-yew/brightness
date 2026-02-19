// import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages
  images: {
    unoptimized: true,
  },
  // If your site is at username.github.io/repo-name/, add:
  // basePath: '/repo-name',
};

export default nextConfig;