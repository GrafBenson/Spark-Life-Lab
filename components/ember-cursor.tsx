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
const TRAIL_MS   = 500;     // ms — how long trail points live / fade duration
const TRAIL_PTS  = 36;      // rolling history cap
const PEAK_A     = 0.48;    // max stroke opacity at the head
const HOVER_SCL  = 1.22;    // spark scale multiplier on hover
const LERP_SCL   = 0.18;    // per-frame lerp speed for hover scale

const CLICKABLE =
  "a, button, [role='button'], input, textarea, select, summary, label, .clickable";

type Pt = { x: number; y: number; t: number };

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Fixed-point format — keeps path strings short. */
function f(n: number) { return n.toFixed(1); }

/**
 * Midpoint-quadratic-bezier smoothing through an ordered point array.
 * pts[0] = trail tail (oldest), pts[n-1] = trail head (cursor now).
 * Returns a valid SVG path string, or "" if fewer than 2 points.
 *
 * The midpoint algorithm guarantees G1 continuity everywhere: the path
 * passes through the midpoints between history samples and uses each
 * recorded point as a quadratic bezier control point. This avoids the
 * segmented-line look and removes per-joint opacity banding.
 */
function smoothPath(pts: Pt[]): string {
  const n = pts.length;
  if (n < 2) return "";
  if (n === 2) {
    return `M${f(pts[0].x)},${f(pts[0].y)}L${f(pts[1].x)},${f(pts[1].y)}`;
  }

  const parts: string[] = [];
  // Start at the midpoint of the first pair so the path stays inside the data
  parts.push(
    `M${f((pts[0].x + pts[1].x) / 2)},${f((pts[0].y + pts[1].y) / 2)}`
  );
  for (let i = 1; i < n - 1; i++) {
    // Quadratic bezier: control = pts[i], endpoint = midpoint(pts[i], pts[i+1])
    const ex = (pts[i].x + pts[i + 1].x) / 2;
    const ey = (pts[i].y + pts[i + 1].y) / 2;
    parts.push(`Q${f(pts[i].x)},${f(pts[i].y)} ${f(ex)},${f(ey)}`);
  }
  // Terminate exactly at the head = current cursor position
  parts.push(`L${f(pts[n - 1].x)},${f(pts[n - 1].y)}`);
  return parts.join(" ");
}

// ── Component ─────────────────────────────────────────────────────────────────

export function EmberCursor() {
  const svgRef   = useRef<SVGSVGElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const gradRef  = useRef<SVGLinearGradientElement>(null);
  const stop0Ref = useRef<SVGStopElement>(null);
  const stop1Ref = useRef<SVGStopElement>(null);
  const headRef  = useRef<SVGGElement>(null);

  useEffect(() => {
    // ── Guards ────────────────────────────────────────────────────────────────
    if (window.matchMedia("(hover: none)").matches)                    return;
    if (window.innerWidth < 768)                                        return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)  return;

    const svgEl   = svgRef.current;
    const trailEl = trailRef.current;
    const gradEl  = gradRef.current;
    const s0El    = stop0Ref.current;
    const s1El    = stop1Ref.current;
    const headEl  = headRef.current;
    if (!svgEl || !trailEl || !gradEl || !s0El || !s1El || !headEl) return;

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

      if (!visible) {
        // Re-entering: clear stale trail so no ghost segment flies in
        trail.length = 0;
        visible = true;
        svgEl.style.opacity = "1";
      }

      trail.push({ x: mx, y: my, t: performance.now() });
      // Keep history bounded; shift() removes the oldest when over cap
      if (trail.length > TRAIL_PTS) trail.shift();

      hovering = !!(e.target as Element | null)?.closest(CLICKABLE);
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

        if (trail.length >= 2) {
          const tail = trail[0];
          const head = trail[trail.length - 1];

          // Peak opacity tracks the freshness of the newest point.
          // While moving: head.t ≈ now → freshness ≈ 1 → full opacity.
          // When stopped: head.t ages → freshness → 0 → trail fades out.
          const freshness = Math.max(0, (head.t - cutoff) / TRAIL_MS);
          const opacity   = freshness * PEAK_A;

          // Gradient runs from tail (transparent) to head (ember at `opacity`)
          // gradientUnits="userSpaceOnUse" so x1/y1/x2/y2 are SVG viewport px,
          // which equal clientX/Y since the SVG has no viewBox transform.
          grad_.setAttribute("x1", f(tail.x));
          grad_.setAttribute("y1", f(tail.y));
          grad_.setAttribute("x2", f(head.x));
          grad_.setAttribute("y2", f(head.y));
          s0_.setAttribute("stop-opacity", "0");
          s1_.setAttribute("stop-opacity", opacity.toFixed(3));

          // Build one smooth quadratic-bezier path; stroke it once.
          // Single stroke = no overlap banding, no segmented opacity steps.
          const d = smoothPath(trail);
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
          ref={gradRef}
          id="ember-trail-grad"
          gradientUnits="userSpaceOnUse"
          x1="0" y1="0" x2="1" y2="0"
        >
          <stop ref={stop0Ref} offset="0%"   stopColor={EMBER} stopOpacity="0" />
          <stop ref={stop1Ref} offset="100%" stopColor={EMBER} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/*
       * Trail — one smooth bezier path, one stroke call.
       * Gradient provides the fade from transparent → ember.
       * No per-segment colour differences → no opacity banding.
       */}
      <path
        ref={trailRef}
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
      <g ref={headRef}>
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
