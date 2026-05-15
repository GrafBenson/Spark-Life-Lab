# SparkLifeLab — Sanity CMS Client Handoff

## What the client controls in Sanity

The Sanity Studio at [https://sparklifelab.sanity.studio](https://sparklifelab.sanity.studio) gives the client control over **site photos only**. All page text (headings, body copy, CTAs) is intentionally code-controlled and does not appear in Studio. This keeps the live site stable and the client workflow simple.

### What can be changed in Studio

| Studio section | What it controls |
|---|---|
| 📷 Homepage — Site Photos | The 4 section photos on the homepage |
| 👤 Founders | Founder headshot photos |
| ⚙️ Site Settings | Footer text, contact email, Substack URL |

### Client image workflow (step-by-step)

1. Go to [sparklifelab.sanity.studio](https://sparklifelab.sanity.studio)
2. Click **📷 Homepage — Site Photos**
3. Click the image field you want to update (e.g. "About Section — Photo")
4. Drag-and-drop a new photo or click to upload
5. Optionally update the Alt Text field (important for accessibility)
6. Click **Publish** (top-right green button)
7. The live website updates automatically within ~5 seconds via webhook

> **If the image does not appear after 30 seconds:** see Troubleshooting below.

---

## Architecture

```
Sanity Studio (client edits + publishes)
       │
       │ Sanity Webhook (POST on publish)
       ▼
https://spark-life-lab.com/api/revalidate
       │
       │ revalidatePath('/') + revalidateTag('sanity')
       ▼
Next.js ISR cache cleared → homepage re-fetches from Sanity CDN
       │
       ▼
Live site shows new image (no full rebuild required)
```

Images are served directly from **Sanity's global CDN** (`cdn.sanity.io`). The site uses a custom Next.js image loader that bypasses the Vercel image optimizer — removing one round-trip and serving images faster from Sanity's edge cache.

---

## Environment variables

These must be set in **Vercel → Project → Settings → Environment Variables** (Production + Preview):

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Sanity project ID: `53gmhbru` | Yes |
| `NEXT_PUBLIC_SANITY_DATASET` | Sanity dataset: `production` | Yes |
| `NEXT_PUBLIC_SANITY_API_VERSION` | API date: `2026-05-14` | Yes |
| `SANITY_API_READ_TOKEN` | Viewer-level token for draft mode | Yes |
| `SANITY_WEBHOOK_SECRET` | Shared secret for webhook HMAC validation | Yes (for auto-update) |

---

## One-time setup: Vercel Deploy Hook (fallback only)

> The Vercel Deploy Hook is a fallback. The primary auto-update mechanism is the Sanity Webhook → `/api/revalidate` route (much faster — no full rebuild needed).
> Only set this up if the `/api/revalidate` webhook cannot be used.

1. Go to **Vercel → Project → Settings → Git**
2. Scroll to **Deploy Hooks**
3. Click **Create Hook**
   - Name: `Sanity Content Update`
   - Branch: `main`
4. Copy the generated URL (looks like `https://api.vercel.com/v1/integrations/deploy/...`)
5. In Sanity: create a webhook pointing to that URL (see below)

---

## One-time setup: Sanity Webhook → `/api/revalidate` (recommended)

This is the primary auto-update mechanism. It triggers within seconds of publishing in Studio.

### Step 1 — Generate a webhook secret

Run this in your terminal (or use any strong random string):

```bash
openssl rand -hex 32
```

Copy the output. This is your `SANITY_WEBHOOK_SECRET`.

### Step 2 — Add the secret to Vercel

1. Go to **Vercel → Project → Settings → Environment Variables**
2. Add a new variable:
   - **Key:** `SANITY_WEBHOOK_SECRET`
   - **Value:** (paste the secret from Step 1)
   - **Environment:** Production + Preview
3. **Redeploy** the project once to pick up the new variable

### Step 3 — Create the Sanity Webhook

1. Go to [sanity.io/manage](https://sanity.io/manage)
2. Select the SparkLifeLab project (`53gmhbru`)
3. Go to **API → Webhooks**
4. Click **Create webhook**
5. Fill in:

| Field | Value |
|---|---|
| **Name** | `Trigger Vercel revalidation` |
| **URL** | `https://spark-life-lab.com/api/revalidate` |
| **Dataset** | `production` |
| **Trigger on** | Create, Update, Delete (check all; Publish is covered by these) |
| **Filter** | `_type in ["homepage", "founder", "siteSettings"]` |
| **Projection** | Leave blank (default) |
| **HTTP method** | `POST` |
| **Secret** | (paste the same secret from Step 1) |
| **API version** | `v2021-03-25` (or latest) |
| **Include drafts** | No |

6. Click **Save**

### Step 4 — Test the webhook

1. Publish any change in Sanity Studio
2. In Sanity Manage → API → Webhooks → click your webhook → **Activity**
3. You should see a `200 OK` response from `/api/revalidate`
4. Visit the live site — the change should be visible within seconds

---

## Troubleshooting

### Image published but not showing on site

1. Wait 30 seconds — the webhook may be in transit
2. Check Sanity Manage → API → Webhooks → Activity for your webhook:
   - If no attempt: the webhook may not be configured correctly (check the URL and filter)
   - If `401 Unauthorized`: the `SANITY_WEBHOOK_SECRET` in Vercel doesn't match the secret in Sanity
   - If `500 Internal Server Error`: check Vercel → Functions → `/api/revalidate` logs
3. If all else fails: manually trigger a Vercel redeploy (Vercel → Deployments → Redeploy)

### How to manually force a site update

Go to **Vercel → Project → Deployments** and click **Redeploy** on the latest production deployment. This is always safe and takes ~2 minutes.

### Draft changes visible in Studio but not on live site

This is intentional. Draft documents are not published. Only after clicking **Publish** in Studio does the change appear on the live site.

---

## What is intentionally code-controlled (not in Studio)

The following are hardcoded in the Next.js source code and require a developer to change:

- All page headings, subheadings, and body copy
- All CTA button text
- Navigation links
- Footer legal link text and URLs
- All other-page content (Identity Lab, About, Clarity Check, etc.)

This is intentional. It ensures the live site is always stable and the approved V1.3 copy is never accidentally overwritten.

To update any of this text, edit the relevant `app/.../page.tsx` file and push to `main`. Vercel will auto-deploy.

---

## Image technical notes

- All Sanity images are served directly from Sanity's global CDN (`cdn.sanity.io`)
- The Next.js site uses a custom Sanity image loader — images bypass Vercel's image optimizer and are served from Sanity's edge cache instead (faster, lower Vercel cost)
- Sanity auto-generates a Low Quality Image Placeholder (LQIP — a tiny blurred thumbnail) for every uploaded photo. This is used as the blur-up loading placeholder on the site.
- Recommended photo specs: JPEG or WebP, at least 1400px wide, under 10MB. Sanity CDN handles all resizing and format conversion automatically.
