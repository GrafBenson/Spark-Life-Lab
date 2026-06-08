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
      {
        source: "/impressum/",
        destination: "/legal-note/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
