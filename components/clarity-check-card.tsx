/**
 * ClarityCheckCard — premium resource preview for the Midlife Clarity Check.
 *
 * Renders a stylised visual of the assessment resource plus a single clear CTA.
 * The outer container is architected as a swap zone: when a KIT form or other
 * embedded integration is ready, only the inner content needs to change.
 * The surrounding layout and visual language stay intact.
 */

import Link from "next/link";

export function ClarityCheckCard() {
  return (
    <div className="clarity-card">
      {/* Resource mockup — visual representation of the assessment */}
      <div className="clarity-card-mockup" aria-hidden="true">
        <svg
          viewBox="0 0 280 196"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="clarity-card-svg"
          role="img"
          aria-label="Preview of the Midlife Clarity Check assessment"
        >
          {/* Shadow/depth layer */}
          <rect x="8" y="6" width="264" height="184" rx="5" fill="rgba(32,43,65,0.08)" />

          {/* Card body */}
          <rect x="4" y="2" width="264" height="184" rx="5" fill="#FEFDF8" />

          {/* Header band — deep navy */}
          <rect x="4" y="2" width="264" height="52" rx="5" fill="#202B41" />
          {/* Square off bottom corners of header */}
          <rect x="4" y="32" width="264" height="22" fill="#202B41" />

          {/* Ember accent rule under header */}
          <rect x="4" y="54" width="264" height="2" fill="#EF7C62" opacity="0.7" />

          {/* SparkLifeLab wordmark area */}
          <rect x="20" y="14" width="52" height="5" rx="2" fill="rgba(239,124,98,0.7)" />

          {/* "Midlife Clarity Check" title */}
          <rect x="20" y="26" width="148" height="8" rx="2" fill="rgba(255,255,255,0.9)" />
          <rect x="20" y="38" width="88" height="6" rx="2" fill="rgba(255,255,255,0.5)" />

          {/* Six question rows */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const widths  = [188, 164, 200, 152, 176, 144];
            const accents = [72,  56,  88,  48,  64,  52];
            return (
              <g key={i}>
                {/* Full row track */}
                <rect
                  x="20"
                  y={70 + i * 20}
                  width={widths[i]}
                  height="8"
                  rx="2"
                  fill="#EFEAD8"
                />
                {/* Ember fill — simulates a "response" or progress indicator */}
                <rect
                  x="20"
                  y={70 + i * 20}
                  width={accents[i]}
                  height="8"
                  rx="2"
                  fill="#EF7C62"
                  opacity="0.55"
                />
              </g>
            );
          })}

          {/* Profile indicator dots at bottom */}
          {[0, 1, 2].map((i) => (
            <circle
              key={i}
              cx={140 + (i - 1) * 20}
              cy={178}
              r="5"
              fill={i === 1 ? "#EF7C62" : "#EFEAD8"}
            />
          ))}

          {/* Small "free" badge — top right */}
          <rect x="228" y="14" width="32" height="16" rx="8" fill="rgba(239,124,98,0.2)" />
          <rect x="236" y="20" width="16" height="4" rx="1.5" fill="#EF7C62" opacity="0.9" />
        </svg>
      </div>

      {/* Label and CTA below the mockup */}
      <div className="clarity-card-body">
        <p className="clarity-card-label">
          6 questions &middot; 3 scored profiles &middot; 20–30 min &middot; free
        </p>
        <p className="clarity-card-desc">
          Enter your name and email and we&rsquo;ll send it straight to your inbox.
          No spam. No commitment.
        </p>
        {/*
          SWAP ZONE — future options:
          a) Keep as CTA link → /clarity-check/  (current)
          b) Replace with embedded KIT form when configured
          The container (.clarity-card) is stable either way.
        */}
        <Link className="button button-lavender clarity-card-cta" href="/clarity-check/">
          Get my free Midlife Clarity Check →
        </Link>
      </div>
    </div>
  );
}
