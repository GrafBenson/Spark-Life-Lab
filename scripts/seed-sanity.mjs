/**
 * Seed script — creates minimal Sanity document stubs for SparkLifeLab.
 *
 * Image-only MVP: this script only creates document stubs so clients can
 * upload photos via Sanity Studio. All page text is hardcoded in the frontend
 * and is NOT seeded here.
 *
 * Uses createIfNotExists (not createOrReplace) so that client-uploaded images
 * are never overwritten by a re-run of this script.
 *
 * Usage:
 *   node scripts/seed-sanity.mjs
 *
 * Requires SANITY_API_READ_TOKEN in .env.local with write permission
 * (editor-level or higher). Viewer tokens are read-only.
 */

import { createClient } from "@sanity/client";
import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
config({ path: resolve(__dirname, "../.env.local") });

if (!process.env.SANITY_API_READ_TOKEN) {
  console.error("✗ SANITY_API_READ_TOKEN is not set in .env.local. Aborting.");
  process.exit(1);
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "53gmhbru",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2026-05-14",
  token: process.env.SANITY_API_READ_TOKEN,
  useCdn: false,
});

// ─── Document stubs ───────────────────────────────────────────────────────────
//
// Minimal documents — just enough for Studio to show the image upload fields.
// Text copy is hardcoded in the frontend and intentionally absent here.

const documents = [

  // ── Homepage image slots ────────────────────────────────────────────────────
  // Stub only — clients upload photos via Studio. Text is hardcoded in code.
  {
    _id: "singleton-homepage",
    _type: "homepage",
  },

  // ── Site settings — structural fields used by the footer ───────────────────
  {
    _id: "singleton-site-settings",
    _type: "siteSettings",
    footerDescriptor:
      "A self-assessment, a guided transformation, and a community — for people ready to move forward.",
    contactEmail: "hello@spark-life-lab.com",
    substackUrl: "https://sparklifelab.substack.com/",
    clarityCheckCtaText: "Get my free Midlife Clarity Check →",
    identityLabCtaText: "Apply for the Identity Lab →",
    legalLinks: [
      { _key: "privacy", label: "Privacy Policy", href: "/privacy-policy/" },
      { _key: "terms", label: "Terms of Use", href: "/terms-of-use/" },
      { _key: "cookies", label: "Cookie Policy", href: "/cookie-policy/" },
      { _key: "impressum", label: "Impressum", href: "/impressum/" },
    ],
  },

  // ── Our Story page image slots ──────────────────────────────────────────────
  // Stub only — clients upload photos via Studio.
  {
    _id: "singleton-our-story-page-photos",
    _type: "ourStoryPagePhotos",
  },

  // ── Identity Lab page image slots ───────────────────────────────────────────
  // Stub only — clients upload photos via Studio.
  {
    _id: "singleton-identity-lab-page-photos",
    _type: "identityLabPagePhotos",
  },

  // ── Founder stubs — clients upload photos via Studio ───────────────────────
  // Name and order are seeded so Studio can identify each document.
  // Bio text is hardcoded in the frontend.
  {
    _id: "founder-barbel",
    _type: "founder",
    name: "Bärbel Tress, PhD",
    role: "Co-founder",
    linkedinUrl: "https://www.linkedin.com/in/baerbeltress",
    order: 1,
  },
  {
    _id: "founder-gunther",
    _type: "founder",
    name: "Gunther Tress, PhD",
    role: "Co-founder",
    linkedinUrl: "https://www.linkedin.com/in/gunthertress",
    order: 2,
  },
  {
    _id: "founder-scott",
    _type: "founder",
    name: "Scott E. Burton",
    role: "Co-founder",
    linkedinUrl: "https://www.linkedin.com/in/scotteburton",
    order: 3,
  },
];

// ─── Seed ─────────────────────────────────────────────────────────────────────

async function seed() {
  console.log(`Seeding ${documents.length} document stubs to project 53gmhbru / production…\n`);
  console.log("Using createIfNotExists — existing documents (including uploaded images) are never overwritten.\n");
  let ok = 0;
  let skip = 0;
  let fail = 0;

  for (const doc of documents) {
    try {
      const result = await client.createIfNotExists(doc);
      if (result._id === doc._id) {
        console.log(`  ✓ created  ${result._id}  (${result._type})`);
        ok++;
      } else {
        console.log(`  – skipped  ${doc._id}  (already exists)`);
        skip++;
      }
    } catch (err) {
      console.error(`  ✗ ${doc._id}: ${err.message}`);
      fail++;
    }
  }

  console.log(`\n${ok} created, ${skip} already existed, ${fail} failed.`);
  if (fail === 0) {
    console.log("\nDone. Open Sanity Studio → Homepage to upload site photos.");
    console.log("Open Sanity Studio → Founders to upload founder headshots.");
  }
}

seed();
