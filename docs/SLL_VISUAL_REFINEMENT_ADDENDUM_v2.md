# SparkLifeLab — Visual Refinement Addendum V2

**Status:** Design refinement layer for implementation  
**Use with:** `/docs/SLL_V10_SOURCE_OF_TRUTH.md`  
**Supersedes:** `/docs/SLL_VISUAL_REFINEMENT_ADDENDUM.md` for visual styling guidance  
**Purpose:** Apply the client’s updated colour direction with a more premium, minimal, Apple-adjacent editorial website feel.

> This file does **not** replace V10 content, page structure, copy, narrative arc, CTA logic, legal requirements, Kit/ConvertKit rules, founder copy, route structure, SEO requirements, or accessibility requirements.  
> It **does** override colour use, visual weight, spacing, typography treatment, section styling, card treatment, button styling, and the general design feel.

---

## 1. Core Design Intent

The website should become noticeably more elegant, lighter, calmer, and more deliberately designed.

The intended direction is **Apple-adjacent**, not an Apple clone:

- more white / Paper space
- more restraint
- cleaner visual hierarchy
- fewer heavy colour blocks
- subtle borders instead of heavy cards
- elegant typography
- generous breathing room
- quiet confidence
- minimal but intentional details
- premium, calm, mature, and human

It must **not** look like Apple directly, copy Apple components, or become a tech/SaaS product page. The reference is only the level of restraint, clarity, spacing, and polish.

---

## 2. Binding Colour Palette

Use exactly this palette.

| Name | Hex | Role |
|---|---:|---|
| Deep navy | `#202841` | Main text, strongest brand anchor, main buttons, footer background |
| Mid navy | `#4D5772` | Secondary type, labels, subdued navigation/supporting text |
| Slate mist | `#8B8FA6` | Subtle dividers, quiet secondary accents |
| Light lavender | `#C5C7D3` | Calm section elements, soft panels, quiet truth area, step box tint |
| Cream | `#EFEAD8` | Warm secondary background, nav background, selected section background |
| Paper | `#FEFDF8` | Main page background, primary surface colour |
| Ember / Spark | `#EA7B5C` | Fine Spark accent only: small lines, dots, arrows, italic spark detail |

### Must Remove / Avoid

- Remove old gold `#BFA269` unless it appears only in old unused code.
- Remove old orange `#E07B39`.
- Replace old navy `#1B3A6B` and old text navy `#1B2A41` with the new palette where relevant.
- Avoid large Ember fills.
- Avoid heavy navy section blocks except footer and carefully reviewed Clarity Check treatment.
- Avoid gradients.
- Avoid overly saturated visual effects.

---

## 3. Apple-Adjacent Design Principles

Use these principles globally:

1. **More Paper background:** Let the website breathe. Default to `#FEFDF8` unless a section needs soft separation.
2. **Subtle separation, not blocks:** Prefer fine borders, hairline dividers, soft panels, and spacing over strong coloured rectangles.
3. **Elegant hierarchy:** Headings should be larger, more graceful, and more distinct. Body text should be readable and clearly subordinate.
4. **Minimal accents:** Ember should appear as a precise spark, not as a decoration system.
5. **High whitespace discipline:** Increase vertical padding and maintain balanced top/bottom spacing in every section.
6. **Soft cards:** Cards should feel like quiet surfaces, not boxes. Use Paper/Cream/Light Lavender fills, thin borders, and restrained shadows.
7. **Left alignment as default:** Use centered alignment only for final CTA or selected poetic statements.
8. **No generic template feel:** Avoid repeated identical card grids unless they genuinely clarify the content.
9. **Designed, not decorated:** Every line, dot, border, and image must have a clear visual role.
10. **Premium but human:** The site should feel mature and trustworthy, not cold, clinical, or luxury-fashion-like.

---

## 4. Typography Direction

Headings should feel more elegant and editorial.

Recommended direction:

- Use a refined serif for main headings if already available or easy to add safely.
- Keep body text in a highly readable sans-serif.
- Avoid tiny labels. Eyebrows must remain readable.
- Increase heading size and line-height discipline.
- Avoid cramped section headers.

Suggested typographic feel:

- H1: elegant serif, large, calm, confident, not dramatic.
- H2: elegant serif, clearly larger than body, strong section identity.
- Body: readable sans-serif, comfortable line-height.
- Eyebrows: small caps or letter-spaced, but not too tiny; use Mid navy or Ember only when subtle.

Do not add a font dependency if it creates implementation complexity or performance issues without clear value. If font choice is already pending client confirmation, use clean fallback stacks and leave TODO notes.

---

## 5. Buttons and Links

Primary buttons should mostly use:

- background: Deep navy `#202841`
- text: Paper `#FEFDF8`
- radius: modest, not pill-shaped
- shadow: very subtle or none
- hover: slightly lighter/darker navy, no transform animation

Secondary links:

- Deep navy text
- optional subtle underline
- optional small Ember arrow or hairline accent

Clarity Check section exception:

- If on Deep navy background, button uses Cream `#EFEAD8` with Deep navy text.

Avoid:

- large Ember buttons
- gold buttons
- loud hover effects
- bouncy animations
- thick borders

---

## 6. Section-by-Section Visual Rules

### Main Menu Bar

- Background: Cream `#EFEAD8`
- Logo/wordmark: Deep navy `#202841`
- Spark detail / italic spark element: Ember `#EA7B5C`
- Nav links: Deep navy `#202841`
- CTA button: Deep navy `#202841`, Paper text
- Overall feel: light, clean, calm, refined

### Hero

- Background: Paper `#FEFDF8`
- Keep existing hero photograph directly below/near menu in right column.
- Eyebrow/subheading: Mid navy `#4D5772`
- Heading: Deep navy `#202841`
- Body: Deep navy `#202841`
- Primary button: Deep navy with Paper text
- Optional micro-accent: very fine Ember line/dot only
- Visual feel: spacious, elegant, premium, not loud

### The Midlife Fog

- Background: Cream `#EFEAD8`
- Heading/body: Deep navy `#202841`
- Subheading: Deep navy or Mid navy
- Ember only for fine lines, section label line, quote line
- No heavy dark block treatment
- Feel: recognitional, calm, human, readable

### About + Founders

- Background: Paper `#FEFDF8`
- Text: Deep navy
- Eyebrow: Mid navy
- Founder cards:
  - background: Cream `#EFEAD8` or Paper with thin border
  - fine border using Slate mist or Light lavender at low opacity
  - generous padding
  - no heavy shadow
  - no bulky card styling
  - circular founder photos
  - co-founder label: Mid navy
  - body text: Deep navy
- Feel: human, refined, trustworthy, not résumé-heavy

### How SparkLifeLab Works

- Background: Cream `#EFEAD8`
- Step boxes: Light lavender `#C5C7D3` or very soft tinted surface
- All step boxes equal; no highlighted Step 2 navy block
- Numbers: Ember `#EA7B5C`
- Button: Deep navy with Paper text
- Feel: simple, structured, calm, balanced

### Midlife Clarity Check

- Test Deep navy `#202841`, but avoid making it too harsh.
- If Deep navy feels too heavy, prefer a lighter Paper/Cream section with a Deep navy text system and a subtle bordered/panel layout.
- If dark:
  - heading/body: Paper
  - button: Cream with Deep navy text
  - small arrows/lines: Ember
- Avoid one long text block.
- Use two-column layout or add a photograph/panel.
- Do not add homepage form.
- CTA still links to `/clarity-check/`.

### SparkLife Identity Lab

- Background: Cream `#EFEAD8`
- Text: Deep navy
- Eyebrow: Mid navy
- Button: Deep navy with Paper text
- Add a photograph or tasteful placeholder if suitable asset exists.
- Keep image calm, elegant, midlife-transformation aligned.
- Mention IdentityMap, preserve V10 content.
- Do not call it coaching or a course.

### A Quiet Truth Worth Naming / Stakes

- Background: Light lavender `#C5C7D3`
- Text: Deep navy
- Button/link: Deep navy with Paper text or subtle link treatment
- Optional smaller fog/fog-clearing image if asset exists.
- Feel: quiet, atmospheric, not fear-based.

### Closing CTA

- Background: Cream `#EFEAD8`
- Text: Deep navy
- Button: Deep navy with Paper text
- May remain centered if rhythm improves.
- Maintain large, calm spacing.
- Preserve tagline rule: tagline appears here and footer only.

### Footer

- Background: Deep navy `#202841`
- Main footer text: Paper `#FEFDF8`
- Footer headings: Slate mist or Cream, whichever is more elegant/readable
- Dividers: Mid navy or Slate mist at low visual weight
- Wordmark: Paper with Ember Spark detail
- Feel: dark but refined, quiet, premium

---

## 7. Image Direction

- Keep hero landscape image.
- Add or plan visual support for Midlife Clarity Check to avoid long text block.
- Add a photograph in Identity Lab if suitable asset exists.
- Consider small fog/fog-clearing landscape image in Stakes if suitable asset exists.
- Do not use generic corporate stock.
- Do not overfill the page with images.
- Images should feel calm, natural, mature, spacious, and quiet.

---

## 8. Implementation QA

After implementation, check:

- [ ] Old gold `#BFA269` removed from active styles
- [ ] Old orange `#E07B39` removed
- [ ] Old heavy navy section styling reduced
- [ ] New palette applied consistently
- [ ] Paper/Cream dominate the page backgrounds
- [ ] Ember appears only as small accent
- [ ] Nav is Cream, not dark navy
- [ ] Problem section is Cream, not dark navy
- [ ] Step boxes are equal and Light Lavender-based
- [ ] Headings are larger and more elegant
- [ ] Section vertical spacing is generous and balanced
- [ ] Text is mostly left-aligned
- [ ] Final CTA may remain centered
- [ ] Founder cards are light, refined, bordered, not heavy
- [ ] Homepage structure and V10 copy preserved
- [ ] No fake content added
- [ ] Build passes
