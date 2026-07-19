import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SparkLifeLab",
    short_name: "SparkLifeLab",
    description:
      "A calm, guided space for finding clarity and navigating what comes next in midlife.",
    start_url: "/",
    display: "standalone",
    background_color: "#4c6971",
    theme_color: "#4c6971",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
