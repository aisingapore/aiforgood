import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The deployed build served <img> tags with direct /public paths and no
  // /_next/image requests, i.e. the optimizer was disabled.
  images: { unoptimized: true },
};

export default nextConfig;
