import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { draftClient } from "@/lib/sanity/client";

// This route is called by Sanity Presentation Tool to enable Next.js Draft Mode.
// The draftClient must have a token so validatePreviewUrl can verify the signed secret.
// Set SANITY_API_READ_TOKEN (viewer-level) in .env.local and in Vercel environment variables.
export const { GET } = defineEnableDraftMode({ client: draftClient });
