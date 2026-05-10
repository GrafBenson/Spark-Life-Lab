/**
 * SparkHead
 *
 * Hand-drawn organic ember symbol.
 *
 * Visual identity rules:
 * - One flat ember colour #EF7C62 only — no gradients, no glow
 * - 7 irregular rays — odd count avoids geometric symmetry
 * - Ray lengths, thicknesses, and angles are deliberately uneven
 * - Slight curves on each ray via quadratic bezier paths
 * - Central circle is offset from origin for asymmetry
 * - Visual diameter ≈ 20px; the <g> is positioned via transform in GuidingSpark
 *
 * This component is pure SVG — no logic, no state, no effects.
 * It must be mounted inside an <svg> element.
 */
export function SparkHead() {
  return (
    <>
      {/* Centre — slightly off-origin for organic asymmetry */}
      <circle cx="0.5" cy="-0.5" r="2.4" fill="#EF7C62" />

      {/* Ray 1 — top, leans slightly left */}
      <path
        d="M -0.4,0 C -1.0,-3.0 -1.8,-6.2 -0.7,-9.6"
        stroke="#EF7C62"
        strokeWidth="1.30"
        strokeLinecap="round"
        fill="none"
      />

      {/* Ray 2 — upper-right, longest */}
      <path
        d="M 0.6,-0.5 C 3.0,-2.4 6.0,-4.0 9.2,-6.5"
        stroke="#EF7C62"
        strokeWidth="1.10"
        strokeLinecap="round"
        fill="none"
      />

      {/* Ray 3 — right, almost horizontal, shortest */}
      <path
        d="M 0.8,-0.1 C 3.4,0.4 5.6,-0.1 7.9,1.0"
        stroke="#EF7C62"
        strokeWidth="0.90"
        strokeLinecap="round"
        fill="none"
      />

      {/* Ray 4 — lower-right */}
      <path
        d="M 0.6,0.6 C 2.4,3.0 4.5,5.8 5.8,9.2"
        stroke="#EF7C62"
        strokeWidth="1.05"
        strokeLinecap="round"
        fill="none"
      />

      {/* Ray 5 — bottom, shifted slightly right of vertical */}
      <path
        d="M 0.2,0.5 C 1.2,3.5 1.8,7.0 0.6,10.0"
        stroke="#EF7C62"
        strokeWidth="1.20"
        strokeLinecap="round"
        fill="none"
      />

      {/* Ray 6 — lower-left */}
      <path
        d="M -0.5,0.5 C -2.4,2.4 -5.2,4.0 -8.0,5.8"
        stroke="#EF7C62"
        strokeWidth="1.00"
        strokeLinecap="round"
        fill="none"
      />

      {/* Ray 7 — upper-left, medium length, slightly curved */}
      <path
        d="M -0.6,-0.3 C -3.0,-1.6 -6.2,-2.8 -9.0,-3.8"
        stroke="#EF7C62"
        strokeWidth="1.15"
        strokeLinecap="round"
        fill="none"
      />
    </>
  );
}
