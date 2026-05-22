import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/clarity-check/",
        destination: "/identity-lab/",
        permanent: true,
      },
      {
        source: "/terms-of-use/",
        destination: "/terms-and-conditions/",
        permanent: true,
      },
    ];
  },
  // next-sanity is pure ESM (type: module). Without transpilePackages, Turbopack's
  // dev server can't resolve the next-sanity/visual-editing subpath export at
  // runtime (production builds are unaffected). Transpiling it avoids the
  // CJS/ESM boundary and makes both dev and prod consistent.
  transpilePackages: ["next-sanity"],
  images: {
    remotePatterns: [
      {
        // Sanity CDN — for founder photos and other images managed via Sanity Studio
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
};

export default nextConfig;
