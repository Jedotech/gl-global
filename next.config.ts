import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disables Turbopack from running the malformed candidate glob in production builds
  turbopack: false,
};

export default nextConfig;