import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to out/ for Azure Static Web Apps. Every route
  // here is prerendered and there are no API routes, middleware or server
  // actions, so nothing needs a Node runtime.
  output: "export",

  // Required by output: "export" for next/image, and already how the original
  // deployment behaved — it served <img> tags with direct /public paths and no
  // /_next/image requests.
  images: { unoptimized: true },
};

export default nextConfig;
