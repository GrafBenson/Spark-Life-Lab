"use client";

/**
 * EmberCursor v3
 *
 * A single fixed SVG carries both the comet trail and the spark head,
 * so trail and head share exactly the same coordinate space — no offset.
 *
 * Trail: smooth quadratic-bezier path (midpoint algorithm) + linearGradient
 * from transparent at the tail to ember at the head. One stroke call, no
 * per-segment opacity banding.
 *
 * Cursor hiding: adds `ember-cursor-active` to <html> when active; paired
 * CSS in globals.css forces cursor:none on every element including links
 * and buttons where the UA sheet would otherwise show pointer.
 *
 * Rules:
 * - Desktop only — disabled on touch, <768 px, prefers-reduced-motion
 * - pointer-events: none on the SVG — never blocks clicks
 * - Spark head: zero lag, direct pointermove tracking
 * - Hover reaction on clickable elements: subtle lerped SVG scale
 * - Hides on pointerleave / visibilitychange / window blur; clears trail
 * - Re-entry: snaps to current pointer, no fly-in from old position
 */

import { useEffect, useRef } from "react";

// ── Constants ─────────────────────────────────────────────────────────────────
const EMBER      = "#EF7C62";
const TRAIL_MS     = 500;   // ms — trail lifetime / fade duration
const TRAIL_PTS    = 28;    // history cap
const MAX_TRAIL_PX = 90;    // px — max rendered path length (keeps trail a short spark tail)
const PEAK_A       = 0.48;  // max stroke opacity at the head
const HOVER_SCL  = 1.22;    // spark scale multiplier on hover
const LERP_SCL   = 0.18;    // per-frame lerp speed for hover scale
const MIN_DIST   = 5;       // px — minimum travel before recording a new trail point
const MAX_GAP_MS = 100;     // ms — always record if this long has passed (slow movement)

const CLICKABLE =
  "a, button, [role='button'], input, textarea, select, summary, label, .clickable";

type Pt = { x: number; y: number; t: number };

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Fixed-point format — keeps path strings short. */
function f(n: number) { return n.toFixed(1); }

/**
 * Catmull-Rom → cubic bezier smoothing.
 * pts[0] = tail (oldest), pts[n-1] = head (current cursor, always appended
 * in the tick loop so the trail stays visually attached to the spark head).
 *
 * Tension 0.25 (looser than the standard 1/6 ≈ 0.167) produces more organic,
 * hand-drawn-feeling curves while still passing through every recorded point.
 * The result is C1-continuous everywhere — no visible corners at joints.
 */
function smoothPath(pts: Pt[]): string {
  const n = pts.length;
  if (n < 2) return "";
  if (n === 2) {
    return `M${f(pts[0].x)},${f(pts[0].y)}L${f(pts[1].x)},${f(pts[1].y)}`;
  }

  const T = 0.25; // tension — higher = more swoopy curves
  const parts: string[] = [];
  parts.push(`M${f(pts[0].x)},${f(pts[0].y)}`);

  for (let i = 0; i < n - 1; i++) {
    const p0 = pts[Math.max(0, i - 1)];
    const p1 = pts[i];
    const p2 = pts[i + 1];
    const p3 = pts[Math.min(n - 1, i + 2)];

    // Catmull-Rom tangent → cubic bezier control points
    const cp1x = p1.x + (p2.x - p0.x) * T;
    const cp1y = p1.y + (p2.y - p0.y) * T;
    const cp2x = p2.x - (p3.x - p1.x) * T;
    const cp2y = p2.y - (p3.y - p1.y) * T;

    parts.push(`C${f(cp1x)},${f(cp1y)} ${f(cp2x)},${f(cp2y)} ${f(p2.x)},${f(p2.y)}`);
  }

  return parts.join(" ");
}

// ── Component ─────────────────────────────────────────────────────────────────

export function EmberCursor() {
  // One ref on the outer SVG is sufficient — all inner elements are queried
  // from it via querySelector, which is more reliable than attaching refs to
  // server-rendered SVG children in React 19 / Next.js App Router.
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // ── Guards ────────────────────────────────────────────────────────────────
    if (window.matchMedia("(hover: none)").matches)                    return;
    if (window.innerWidth < 768)                                        return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)  return;

    const svgEl = svgRef.current;
    if (!svgEl) return;

    // Query inner elements from the live DOM — avoids React ref attachment
    // issues with SVG child elements on server-rendered markup.
    const trailEl = svgEl.querySelector<SVGPathElement>("path[stroke]");
    const gradEl  = svgEl.querySelector<SVGLinearGradientElement>("linearGradient");
    const headEl  = svgEl.querySelector<SVGGElement>("g");
    const s0El    = gradEl?.querySelectorAll("stop")[0] as SVGStopElement | undefined;
    const s1El    = gradEl?.querySelectorAll("stop")[1] as SVGStopElement | undefined;
    if (!trailEl || !gradEl || !headEl || !s0El || !s1El) return;

    // Activate CSS cursor-hiding class on <html>.
    // The paired rule in globals.css forces cursor:none on all elements,
    // including <a> and <button> where UA styles set cursor:pointer.
    document.documentElement.classList.add("ember-cursor-active");
    svgEl.style.opacity = "0";

    // ── State ─────────────────────────────────────────────────────────────────
    let mx       = -999;
    let my       = -999;
    let visible  = false;
    let hovering = false;
    let scale    = 1.0;
    let raf      = 0;
    const trail: Pt[] = [];

    // ── Helpers ───────────────────────────────────────────────────────────────
    const hide = () => {
      visible = false;
      trail.length = 0;
      svgEl.style.opacity = "0";
    };

    // ── Event handlers ────────────────────────────────────────────────────────
    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      hovering = !!(e.target as Element | null)?.closest(CLICKABLE);

      if (!visible) {
        // Re-entering: clear stale trail so no ghost segment flies in
        trail.length = 0;
        visible = true;
        svgEl.style.opacity = "1";
      }

      // Distance + time filter: skip micro-jitter, but always record if
      // enough time has passed so slow movement still refreshes freshness.
      const now = performance.now();
      const last = trail[trail.length - 1];
      const dx = last ? mx - last.x : Infinity;
      const dy = last ? my - last.y : Infinity;
      const moved = dx * dx + dy * dy >= MIN_DIST * MIN_DIST;
      const stale = !last || now - last.t >= MAX_GAP_MS;
      if (moved || stale) {
        trail.push({ x: mx, y: my, t: now });
        if (trail.length > TRAIL_PTS) trail.shift();
      }
    };

    const onLeave            = () => hide();
    const onVisibilityChange = () => { if (document.hidden) hide(); };
    const onBlur             = () => hide();

    document.addEventListener("pointermove",      onMove,            { passive: true });
    document.addEventListener("pointerleave",     onLeave,           { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);
    window.addEventListener("blur",               onBlur);

    // ── rAF aliases ───────────────────────────────────────────────────────────
    // Capture non-null aliases so TypeScript can prove non-nullability inside
    // the hoisted function declaration (closure analysis limitation).
    const svg_   = svgEl;
    const trail_ = trailEl;
    const grad_  = gradEl;
    const s0_    = s0El;
    const s1_    = s1El;
    const head_  = headEl;

    // ── Render loop ───────────────────────────────────────────────────────────
    function tick() {
      const now    = performance.now();
      const cutoff = now - TRAIL_MS;

      // Lerp hover scale — only the scale interpolates, not position
      scale += ((hovering ? HOVER_SCL : 1.0) - scale) * LERP_SCL;

      if (visible) {
        // ── Spark head — direct tracking, zero lag ──────────────────────────
        // SVG attribute `transform` positions the group origin at (mx, my)
        // then scales it there. All spark geometry is relative to (0,0).
        head_.setAttribute(
          "transform",
          `translate(${f(mx)},${f(my)}) scale(${scale.toFixed(4)})`
        );

        // ── Trail ───────────────────────────────────────────────────────────
        // Remove points older than TRAIL_MS (keeps at least 1 for continuity)
        while (trail.length > 1 && trail[0].t < cutoff) trail.shift();

        // Distance cap: trim oldest points until polyline length ≤ MAX_TRAIL_PX.
        // Computed in O(n) — total first, then trim one segment at a time.
        // Prevents fast sweeps from leaving a long trail across the screen.
        let trailLen = 0;
        for (let i = 1; i < trail.length; i++) {
          const dx = trail[i].x - trail[i - 1].x;
          const dy = trail[i].y - trail[i - 1].y;
          trailLen += Math.sqrt(dx * dx + dy * dy);
        }
        while (trail.length > 1 && trailLen > MAX_TRAIL_PX) {
          const dx = trail[1].x - trail[0].x;
          const dy = trail[1].y - trail[0].y;
          trailLen -= Math.sqrt(dx * dx + dy * dy);
          trail.shift();
        }

        if (trail.length >= 1) {
          const tail = trail[0];
          const lastPt = trail[trail.length - 1];

          // Freshness: how recent is the last recorded trail point?
          // Stays ≈1 while moving (with distance filter, at most MAX_GAP_MS stale).
          // Drops to 0 over TRAIL_MS after cursor stops → trail fades naturally.
          const freshness = Math.max(0, (lastPt.t - cutoff) / TRAIL_MS);
          const opacity   = freshness * PEAK_A;

          // Gradient from tail → exact cursor (mx, my) so the opaque end
          // always terminates at the spark head regardless of filter lag.
          grad_.setAttribute("x1", f(tail.x));
          grad_.setAttribute("y1", f(tail.y));
          grad_.setAttribute("x2", f(mx));
          grad_.setAttribute("y2", f(my));
          s0_.setAttribute("stop-opacity", "0");
          s1_.setAttribute("stop-opacity", opacity.toFixed(3));

          // Path: recorded history + current cursor as terminal anchor.
          // Appending (mx,my) guarantees the trail is always visually
          // attached to the spark head even between distance-filtered frames.
          const pathPts: Pt[] =
            trail.length >= 2
              ? [...trail, { x: mx, y: my, t: now }]
              : [trail[0], { x: mx, y: my, t: now }];

          const d = smoothPath(pathPts);
          if (d) {
            trail_.setAttribute("d", d);
            trail_.style.display = "";
          } else {
            trail_.style.display = "none";
          }
        } else {
          trail_.style.display = "none";
        }
      } else {
        trail_.style.display = "none";
      }

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("pointermove",      onMove);
      document.removeEventListener("pointerleave",     onLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("blur",               onBlur);
      document.documentElement.classList.remove("ember-cursor-active");
    };
  }, []);

  /*
   * Single fixed SVG — fills the viewport, pointer-events none.
   *
   * No viewBox → 1 SVG unit = 1 CSS logical pixel.
   * All SVG coordinates (trail path, head translate) use clientX/Y directly.
   * Trail and head therefore share the same coordinate space: zero offset.
   *
   * Gradient (gradientUnits="userSpaceOnUse") maps x1/y1 to x2/y2 in that
   * same coordinate space, so it always runs from trail tail to head.
   */
  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "100%",
        height:        "100%",
        pointerEvents: "none",
        zIndex:        9999,
        opacity:       0,
        overflow:      "visible",
        transition:    "opacity 200ms ease",
      }}
    >
      <defs>
        {/*
         * userSpaceOnUse gradient: x1/y1/x2/y2 are viewport px.
         * Updated each rAF frame to match the live trail extent.
         * Both stops start at opacity 0 and are hidden until the cursor enters.
         */}
        <linearGradient
          id="ember-trail-grad"
          gradientUnits="userSpaceOnUse"
          x1="0" y1="0" x2="1" y2="0"
        >
          <stop offset="0%"   stopColor={EMBER} stopOpacity="0" />
          <stop offset="100%" stopColor={EMBER} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/*
       * Trail — one smooth bezier path, one stroke call.
       * Gradient provides the fade from transparent → ember.
       * No per-segment colour differences → no opacity banding.
       */}
      <path
        fill="none"
        stroke="url(#ember-trail-grad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: "none" }}
      />

      {/*
       * Spark head — geometry centred at local (0,0).
       * Positioned via SVG `transform` attribute: translate(mx,my) scale(s).
       *   - translate: direct cursor tracking, zero lag
       *   - scale: lerped for a smooth hover reaction
       * This avoids CSS transform / SVG attribute composition ambiguity.
       */}
      <g>
        {/* Centre dot — asymmetric offset for hand-drawn feel */}
        <circle cx="0.4" cy="-0.4" r="2.2" fill={EMBER} />

        {/* Ray 1 — top, leans left */}
        <path d="M-0.2,-1 C-1,-3.5 -1.6,-6 -0.8,-9"
          stroke={EMBER} strokeWidth="1.25" strokeLinecap="round" />
        {/* Ray 2 — upper-right, longest */}
        <path d="M0.5,-0.8 C2.4,-2.5 4.6,-3.8 7,-5.6"
          stroke={EMBER} strokeWidth="1.05" strokeLinecap="round" />
        {/* Ray 3 — right, nearly horizontal, shortest */}
        <path d="M0.6,-0.2 C2.8,-0.5 4.6,-0.1 6.5,0.6"
          stroke={EMBER} strokeWidth="0.85" strokeLinecap="round" />
        {/* Ray 4 — lower-right */}
        <path d="M0.4,0.4 C1.8,2.2 3,4.4 4,7"
          stroke={EMBER} strokeWidth="1.00" strokeLinecap="round" />
        {/* Ray 5 — bottom, slightly right of vertical */}
        <path d="M0.1,0.5 C0.8,2.8 1.2,5.5 0.4,8.5"
          stroke={EMBER} strokeWidth="1.15" strokeLinecap="round" />
        {/* Ray 6 — lower-left */}
        <path d="M-0.4,0.4 C-2,1.8 -3.8,3 -6.2,4.4"
          stroke={EMBER} strokeWidth="0.95" strokeLinecap="round" />
        {/* Ray 7 — upper-left */}
        <path d="M-0.5,-0.6 C-2.4,-1.6 -4.8,-2.4 -7.2,-3.2"
          stroke={EMBER} strokeWidth="1.10" strokeLinecap="round" />
      </g>
    </svg>
  );
}
