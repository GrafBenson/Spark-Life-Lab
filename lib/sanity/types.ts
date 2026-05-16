/**
 * Raw shapes returned from Sanity GROQ queries.
 *
 * Image-only MVP: only image-related types are actively used by the frontend.
 * All page text is hardcoded in page components.
 */

// ─── Images ────────────────────────────────────────────────────────────────

/** Raw Sanity image reference (compatible with @sanity/image-url). */
export type SanityImageRef = {
  _type: "image";
  asset?: {
    _ref?: string;
    _type?: string;
  };
  alt?: string;
  /** Sanity auto-generated base64 LQIP (Low Quality Image Placeholder) for blur-up loading. */
  lqip?: string;
};

/**
 * Homepage image field — image with embedded alt text and LQIP subfields.
 * Used for guidanceImage, travelersImage, identityMapImage, stakesImage.
 */
export type SanityImageField = {
  _type?: "image";
  asset?: {
    _ref?: string;
    _type?: string;
  };
  alt?: string;
  hotspot?: {
    x?: number;
    y?: number;
    height?: number;
    width?: number;
  };
  /** Sanity auto-generated base64 LQIP — passed as blurDataURL to next/image. */
  lqip?: string;
};

// ─── Documents ─────────────────────────────────────────────────────────────

/**
 * Homepage image slots — the only homepage fields fetched from Sanity.
 * Text is hardcoded in app/page.tsx.
 */
export type SanityHomepageImages = {
  _id?: string;
  _type?: string;
  guidanceImage?: SanityImageField;
  travelersImage?: SanityImageField;
  identityMapImage?: SanityImageField;
  stakesImage?: SanityImageField;
};

/**
 * Founder photo — the only founder field fetched from Sanity.
 * Name, role, bio, and LinkedIn URL are hardcoded in app/page.tsx.
 */
export type SanityFounderPhoto = {
  _id: string;
  /** Full name as entered in Sanity Studio — used as a secondary lookup key. */
  name?: string;
  photo?: SanityImageRef & { lqip?: string };
};

export type SanityLegalLink = {
  label?: string;
  href?: string;
};

export type SanitySiteSettings = {
  _id?: string;
  _type?: string;
  footerDescriptor?: string;
  contactEmail?: string;
  substackUrl?: string;
  legalLinks?: SanityLegalLink[];
};

/**
 * The merged, display-ready shape for the footer.
 */
export type FooterSettings = {
  footerDescriptor: string;
  contactEmail: string;
  substackUrl: string;
  legalLinks: { label: string; href: string }[];
};
