# SparkLifeLab — V1.3 Client Revision Handoff

**Purpose:** Precise implementation handoff for Claude Code.  
**Scope:** Update the current SparkLifeLab website with the approved V1.3 client changes.  
**Mode:** Controlled revision, not redesign.  
**Website reference:** https://spark-life-lab.vercel.app/

---

## 0. Current website state to compare against

The current live site already has the overall structure and most visual direction in place. This update should refine and correct the current implementation, not rebuild it.

Current visible issues / differences from the approved V1.3 update include:
- Metadata/title still includes “Coaching” on the live page.
- Main nav currently still shows `Clarity Check`, `Identity Lab`, `Our Story`, plus CTA.
- Hero CTA still says `Download the Midlife Clarity Check — free`.
- Hero does not yet include the new descriptor line.
- Clarity Check section still mentions `3 scored profiles`.
- Clarity Check section still behaves like a CTA/action panel rather than direct homepage Kit-form placeholder.
- Identity Lab still says `First cohort launching May 2026. Places are limited.`
- Founder names currently do not show `PhD` for Bärbel and Gunther.
- Stakes copy still uses the older shorter wording.

---

## 1. Global implementation rules

Implement only the explicit tasks in this handoff.

Do not redesign the whole site.  
Do not change the current brand direction.  
Do not rewrite approved copy beyond the requested changes.  
Do not invent testimonials, legal data, claims, fake form behaviour, fake Kit logic, or fake integrations.  
Do not change unrelated sections.  
Do not alter desktop layouts when an instruction is explicitly mobile-only.  
Preserve the current visual quality and responsive behaviour unless the task explicitly asks to adjust it.

Run lint and build after implementation. If they pass, commit and push.

---

## 2. Files/assets expected on Desktop

Claude Code should check the Desktop for these files:

```txt
/Users/benjamintress/Desktop/SLL_V13_IMPLEMENT_NOW_HANDOFF.md
/Users/benjamintress/Desktop/Clarity-Check-cover-transparent.png
/Users/benjamintress/Desktop/sll-map-005.jpg
```

Copy the handoff into the repo for future context:

```txt
/docs/SLL_V13_IMPLEMENT_NOW_HANDOFF.md
```

Copy assets into:

```txt
/public/images/Clarity-Check-cover-transparent.png
/public/images/sll-map-005.jpg
```

Clarity Check cover asset handling:
- `Clarity-Check-cover-transparent.png` is the current correct Clarity Check cover asset.
- Preserve it as a transparent PNG. Do not convert it to JPG.
- Do not alter, regenerate, crop into the book content, or modify the cover artwork/text/logo.
- Display it as the document/book cover visual in the Midlife Clarity Check section.
- Add the visual shadow in CSS/component styling around the image, not by editing the image itself.
- Shadow should be soft, premium, subtle, and responsive; it should make the cover feel like a real document/book without adding a visible white background box.
- The transparent parts of the PNG should allow the underlying page background to show through.

If an image asset is missing:
- do not invent a replacement image
- use only a simple tasteful placeholder where needed
- report the missing file clearly

---

## 3. Active colour palette

Keep the current project-approved palette:

```txt
Ember: #EF7C62
Deep navy: #202841
Mid navy: #4D5772
Slate mist: #8B8FA6
Light lavender: #C5C7D3
Cream: #EEEAE5
Paper: #FEFDF8
```

Important:
- Do not change Cream back to `#EFEAD8`.
- `#EEEAE5` is the currently approved Cream value from the latest direct client correction.
- Keep colours controlled through global CSS variables where possible.
- Do not reintroduce old palette values.

---

## 4. Global website updates

### 4.1 Brand / meta / SEO

Remove the word **“Coaching”** from all:
- page title
- meta description
- Open Graph tags
- Twitter tags
- SEO metadata
- any visible metadata-like copy if present

Use these values globally where applicable:

```txt
Page title:
SparkLifeLab — Midlife Clarity & Guided Transformation

Meta description:
A calm, guided space for people in midlife who sense something has shifted. Take the free Midlife Clarity Check or explore the SparkLife Identity Lab.

OG:title:
SparkLifeLab — Find Your Way Through Midlife

OG:description:
A calm, guided space for people in midlife who sense something has shifted. Free Midlife Clarity Check and SparkLife Identity Lab.

Twitter:title:
SparkLifeLab — Find Your Way Through Midlife

Twitter:description:
SparkLifeLab walks alongside people in midlife — from their 40s through their 70s — who are ready to find clarity, reconnect with what matters, and step into what comes next.
```

### 4.2 Navigation

Update main nav to:

```txt
Identity Lab → /#identity-lab
Our Story → /#about
CTA button: Get the Midlife Clarity Check → /#clarity-check
```

Remove the duplicate text nav item:

```txt
Clarity Check
```

Important:
- Main nav text links should point to homepage anchors.
- CTA button should also point to homepage Clarity Check anchor.
- Do not add new nav items.
- Keep logo/nav position and current visual style.

### 4.3 CTA hierarchy

Apply/check this hierarchy:

```txt
Clarity Check CTAs = primary solid style
Nav CTA = ember red
Identity Lab CTA = secondary ghost / outline style
Our Story and LinkedIn = subtle text links only
```

Do not make Identity Lab visually compete with Clarity Check.

### 4.4 Typography/readability audit

Check current typography. If existing values already exceed these, do not shrink them.

Minimums:
- Body text: minimum `17px`, ideally `18px`
- Step card descriptions: `17–18px`
- Step card headings: `20–22px`
- Display headings: minimum `32px` desktop, no smaller than `26px` mobile
- Form labels and input text: minimum `16px`
- Footer text: minimum `14px`, preferably `15–16px` for nav links

Also ensure:
- left-aligned text where appropriate
- strong contrast
- generous line height
- enough padding in cards and form areas

### 4.5 Hero video/poster

Check if hero video assets exist.

If no video file exists:
- do not invent video
- leave current hero image setup intact
- report that video assets were not found

If a hero video exists:
- autoplay
- muted
- loop
- playsInline
- preload="auto"
- no visible controls
- no `controls` attribute
- controlsList="nodownload" if applicable
- object-fit: cover
- strong poster fallback
- poster filename: `sll-hero-sunrise-poster.jpeg` if available

### 4.6 Image system

Keep image system lean. Do not add images beyond:
- hero image/video/poster
- one “You don’t have to figure this out alone” image
- one “Why we built SparkLifeLab” image
- three founder photos
- Clarity Check visual
- Identity Map visual
- closing coastal-path image

Founder photos must render as true circles with consistent diameter.

---

## 5. Section-by-section tasks

### 5.1 Hero section

Keep:
- current colour palette
- logo/nav position
- main headline
- eyebrow
- overall layout
- ember-red primary CTA

Change secondary `Learn More`:
- remove button/frame treatment
- make it a light text link
- add a small downward arrow
- place it so it feels integrated, not floating

Add descriptor line between subheadline and CTA:

```txt
Start with the free Midlife Clarity Check — a 6-question self-assessment with personalised results.
```

Change hero CTA copy to:

```txt
Get my free Midlife Clarity Check →
```

Preserve CTA target behaviour: it should lead to `/#clarity-check` or `#clarity-check` depending on page context.

---

### 5.2 Midlife Fog section

Keep as-is:
- dark bluish background
- no image
- current copy and structure

Only fix if there is a clear bug.

---

### 5.3 “You don’t have to figure this out alone” / About positioning section

Keep:
- current heading
- current text direction
- current tone

Mobile-only change:
- image above text
- image in its own full-width band
- rebalance image/text alignment and scaling on mobile
- match the mobile logic of the next “Why we built SparkLifeLab” image section

Do not unnecessarily alter desktop layout.

---

### 5.4 “Why we built SparkLifeLab” section

Keep:
- current image
- current text structure
- current overall section logic

Do not add extra copy unless it is already present in the current approved site/source.

---

### 5.5 Founder cards section

Keep:
- current three-card layout
- current text structure
- LinkedIn links visible
- overall design

Update displayed founder names:
- `Bärbel Tress, PhD`
- `Gunther Tress, PhD`
- `Scott E. Burton`

Ensure:
- founder photos are true circles
- all founder photos have same diameter
- LinkedIn links remain subtle text links

---

### 5.6 “How SparkLifeLab works” section

Keep:
- 3-step structure
- distinction: `SparkLifeLab` = company, `SparkLife Identity Lab` = product
- cards not clickable
- CTA below cards

Readability updates:
- make step numbers visually large and dominant
- step labels minimum `20–22px`
- descriptions `17–18px`
- mobile stacks vertically
- keep step 2 visually featured
- add more internal padding in cards

Do not change the eyebrow wording.

---

### 5.7 Midlife Clarity Check section

This is the main conversion section.

Structural update:
- The Kit form should be represented directly on the homepage in this section.
- For now create only a cheap/simple visual placeholder for the future Kit form.
- Do not build real form logic.
- Do not fake successful submission.
- Do not make the placeholder submit anything.

Layout update:
- simplify right-hand action area heavily
- remove redundant explanatory text
- avoid “box inside a box”
- add Clarity Check PDF visual/mock cover
- desktop: visual beside form
- mobile: visual above form
- use `/public/images/Clarity-Check-cover-transparent.png` if available
- preserve the PNG transparency; do not add a white image background or wrapper that visually recreates the removed background
- add a soft CSS shadow around the transparent PNG so the cover still has depth on the website
- shadow should be subtle, premium, and should work on both light and dark/blue section backgrounds
- leave space for one future quote only if subtle and easy
- do not invent testimonial text

Remove:
- all mention of `3 scored profiles`
- all mention of `3 scored result profiles`

Replace section copy with exactly:

```txt
Eyebrow:
Free — your first honest step.

Heading:
The Midlife Clarity Check

Subheading:
A free self-reflection to help you locate yourself — and understand where you truly stand.

Intro body:
Many people in midlife sense that something has shifted — but can’t quite find words for it.
The Midlife Clarity Check gives you language and structure for that experience.
Six honest questions. About 20–30 minutes when done with care.

What you’ll discover:
1. Where you are in your midlife transition — from early fog to emerging clarity
2. Which area of your life feels most out of sync right now
3. A short, honest reflection on your current experience — written for where you are

Form label placeholder:
Get your free Midlife Clarity Check

Form fields placeholder:
First name | Email address

Submit button placeholder:
Send me the Midlife Clarity Check →

Reassurance text placeholder:
Free. No spam. Delivered to your inbox. Unsubscribe at any time.

Closing line:
It takes 20–30 minutes. It costs nothing. And it starts with honesty.
```

If the existing `/clarity-check/` subpage exists:
- do not delete it unless directly required
- do not make it primary in homepage CTA logic
- ensure homepage section is the primary action area

---

### 5.8 SparkLife Identity Lab section

Keep:
- secondary priority compared to Clarity Check
- lead to separate page for more information

Add visual:
- Identity Map visual beside text
- use `/public/images/sll-map-005.jpg` if available
- this visual is important for tangibility

CTA:
- link to `/identity-lab/`
- use visually secondary ghost/outline style

Replace fixed date/month line with:

```txt
Places are limited. Applications are now open.
```

Remove:
- `First cohort launching May 2026`
- other fixed month/date language

---

### 5.9 Stakes section

Replace copy fully.

Use:

```txt
Eyebrow:
A quiet truth worth naming.

Heading:
The fog doesn’t lift on its own.

Body:
The gap between who you are and how you’re living tends to widen, not close, without attention.
Not dramatically — just slowly, quietly.
And the longer the gap stays unnamed, the harder it becomes to cross.

Key statement:
The people who find their way through are rarely the ones who had all the answers.
They’re the ones who took one honest step.

Text link:
Start with the free Clarity Check →
```

Design:
- make this section feel like a distinct contemplative pause
- not just another paragraph band
- preserve calm/non-urgent tone

---

### 5.10 Final CTA section

Keep:
- coastal path / sunset image
- general section purpose
- supporting line in principle

Adjust:
- keep final CTA timeless and focused on the Clarity Check
- do not tie it to cohort dates
- increase visual emphasis on CTA or supporting line if needed

---

### 5.11 Footer

Keep:
- current structure
- 3-column layout

Add descriptor line under logo/wordmark if it fits cleanly:

```txt
A self-assessment, a guided transformation, and a community — for people ready to move forward.
```

Do not replace logo unless a final logo asset exists.

---

## 6. Build order

Do these first:
1. Remove “Coaching” from metadata/social/title fields.
2. Fix nav structure and anchors.
3. Remove duplicate Clarity Check nav text link.
4. Prepare/placeholder direct Kit form in Clarity Check homepage section.
5. Replace Clarity Check section copy with approved version.
6. Add hero descriptor line and revise hero CTA.
7. Revise Stakes section copy.
8. Revise About section mobile image placement.
9. Make Identity Lab CTA secondary and status line evergreen.
10. Check font sizes, mobile readability, circular founder images, and hero video behaviour.

---

## 7. QA checklist

After implementation, verify:
- `npm run lint` passes
- `npm run build` passes
- no “Coaching” remains in metadata/social/title fields
- nav is exactly Identity Lab, Our Story, CTA
- no duplicate Clarity Check text nav item
- Clarity Check homepage section uses placeholder Kit form
- placeholder form has no fake submission behaviour
- no “3 scored profiles” or “3 scored result profiles” remains
- Clarity Check cover mockup appears if asset is available
- Identity Map visual appears if asset is available
- founder names show PhD for Bärbel/Gunther
- founder photos are true circles and same diameter
- Identity Lab status line is exactly `Places are limited. Applications are now open.`
- Stakes copy is fully replaced
- About positioning image is above text on mobile
- no unrelated redesign occurred
- Desktop assets were copied if available
