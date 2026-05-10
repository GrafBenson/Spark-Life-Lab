/**
 * IdentityMapSymbol — abstract topographic contour mark.
 *
 * Concentric organic rings drawn in navy with ember accent on the innermost
 * rings — a topographic metaphor for the journey inward toward clarity.
 * Represents the IdentityMap product delivered at the end of the Identity Lab.
 *
 * Renders as a decorative SVG with no semantic meaning (aria-hidden).
 * Place inside a Reveal wrapper — the parent fade handles visibility.
 */

type IdentityMapSymbolProps = {
  className?: string;
};

export function IdentityMapSymbol({ className = "" }: IdentityMapSymbolProps) {
  return (
    <span
      className={`identity-map-symbol ${className}`.trim()}
      aria-hidden="true"
    >
      <svg
        width="200"
        height="144"
        viewBox="0 0 200 144"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outermost contour — barely visible, anchors the form */}
        <ellipse cx="100" cy="72" rx="92" ry="63" stroke="#202B41" strokeWidth="0.75" opacity="0.10" />

        {/* Second ring */}
        <ellipse cx="100" cy="72" rx="74" ry="50" stroke="#202B41" strokeWidth="0.85" opacity="0.17" />

        {/* Third ring — slightly irregular for organic feel */}
        <path
          d="M38 72 Q54 28 100 24 Q150 20 165 72 Q150 118 100 121 Q46 118 38 72Z"
          stroke="#202B41" strokeWidth="0.95" opacity="0.23"
        />

        {/* Fourth ring */}
        <path
          d="M57 72 Q63 40 100 37 Q141 34 146 72 Q141 109 100 113 Q58 109 57 72Z"
          stroke="#202B41" strokeWidth="1.05" opacity="0.30"
        />

        {/* Fifth ring — ember begins */}
        <path
          d="M73 72 Q77 52 100 50 Q126 48 129 72 Q126 95 100 97 Q75 95 73 72Z"
          stroke="#EF7C62" strokeWidth="1.2" opacity="0.52"
        />

        {/* Sixth ring — ember, brighter */}
        <path
          d="M85 72 Q88 60 100 59 Q114 58 116 72 Q114 85 100 86 Q87 85 85 72Z"
          stroke="#EF7C62" strokeWidth="1.4" opacity="0.80"
        />

        {/* Center — the spark / point of self */}
        <circle cx="100" cy="72" r="3.5" fill="#EF7C62" />
        <circle cx="100" cy="72" r="7" fill="none" stroke="#EF7C62" strokeWidth="1" opacity="0.28" />

        {/* Quiet cardinal axes */}
        <line x1="100" y1="12" x2="100" y2="132" stroke="#202B41" strokeWidth="0.5" opacity="0.07" strokeDasharray="3 6" />
        <line x1="4" y1="72" x2="196" y2="72" stroke="#202B41" strokeWidth="0.5" opacity="0.07" strokeDasharray="3 6" />
      </svg>
    </span>
  );
}
