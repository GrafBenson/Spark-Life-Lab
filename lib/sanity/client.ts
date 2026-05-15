import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "53gmhbru";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-05-14";

/** Published-only client — used for all production (non-draft) fetches. CDN-cached. */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

/**
 * Draft client — used when Next.js Draft Mode is active.
 * - Bypasses the CDN so unpublished drafts are visible.
 * - Requires SANITY_API_READ_TOKEN (viewer-level token, never exposed to the browser).
 * - Stega encoding is enabled: embeds hidden metadata strings so the Sanity
 *   Presentation Tool overlay can map clicked text back to the correct Studio field.
 */
export const draftClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
  perspective: "previewDrafts",
  stega: {
    enabled: true,
    studioUrl: process.env.NEXT_PUBLIC_SANITY_STUDIO_URL ?? "http://localhost:3333",
  },
});

/**
 * Safe fetch — returns null if Sanity is unreachable or returns nothing.
 * Pass `isDraft: true` when Next.js Draft Mode is active to use the draft client.
 */
export async function safeFetch<T>(
  query: string,
  params: Record<string, unknown> = {},
  isDraft = false,
): Promise<T | null> {
  const client = isDraft ? draftClient : sanityClient;
  try {
    const result = await client.fetch<T>(query, params);
    return result ?? null;
  } catch {
    // Network error, bad token, or build-time unavailability — fall back to null
    // so static hardcoded fallback content takes over.
    return null;
  }
}
