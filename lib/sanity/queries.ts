/**
 * GROQ queries for the SparkLifeLab frontend.
 *
 * Image-only MVP: all page text is hardcoded in page components.
 * Sanity is used exclusively for image replacement (homepage photos + founder photos).
 *
 * _id and _type are included so Sanity stega can embed document-identity metadata,
 * enabling VisualEditing click-to-edit outlines on the image fields.
 */

/**
 * Homepage image slots only.
 * Text fields are no longer fetched — they are hardcoded in app/page.tsx.
 *
 * "lqip": asset->metadata.lqip fetches Sanity's auto-generated base64 blur hash
 * (Low Quality Image Placeholder). Passed as blurDataURL to next/image for a
 * smooth blur-up reveal instead of a blank/cream placeholder while images load.
 */
export const homepageImagesQuery = `
  *[_type == "homepage" && _id == "singleton-homepage"][0]{
    _id,
    _type,
    guidanceImage    { asset, alt, "lqip": asset->metadata.lqip },
    travelersImage   { asset, alt, "lqip": asset->metadata.lqip },
    identityMapImage { asset, alt, "lqip": asset->metadata.lqip },
    stakesImage      { asset, alt, "lqip": asset->metadata.lqip },
  }
`;

/**
 * Founder photo fields only.
 * Name, role, bio, and LinkedIn URL are hardcoded in app/page.tsx.
 */
export const foundersQuery = `
  *[_type == "founder"] | order(order asc) {
    _id,
    name,
    photo { asset, "lqip": asset->metadata.lqip },
  }
`;

/**
 * Site settings singleton.
 * _id and _type included for stega footer click-to-edit.
 */
export const siteSettingsQuery = `
  *[_type == "siteSettings" && _id == "singleton-site-settings"][0]{
    _id,
    _type,
    footerDescriptor,
    contactEmail,
    substackUrl,
    legalLinks,
  }
`;
