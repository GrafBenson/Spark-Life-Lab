"use client";

/**
 * EmberCursor v2
 *
 * Custom cursor: hand-drawn ember spark head + comet-like trail.
 *
 * Rules:
 * - Desktop only — disabled on touch devices, narrow viewports, reduced-motion
 * - pointer-events: none on all elements — never blocks clicks
 * - Spark head tracks the real pointer with zero lag (no lerp)
 * - Canvas trail: short, fades by time + position, disappears ~600ms after stop
 * - Hover reaction on clickable elements: subtle scale-up via CSS transition
 * - Hides entirely on pointerleave / window blur / tab hidden
 * - Trail cleared on every hide so no ghost segment remains on re-entry
 * - Reappears at current pointer position on re-entry (no fly-in from old spot)
 */

import { useEffect, useRef } from "react";

// ── Trail constants ───────────────────────────────────────────────────────────
const EMBER_RGB    = "239, 124, 98";   // #EF7C62 as RGB
const TRAIL_MS     = 600;              // ms — how long a trail point lives
const TRAIL_PTS    = 48;              // rolling history cap
const TRAIL_ALPHA  = 0.55;            // peak opacity at the head end

// ── Selectors that trigger the hover state ────────────────────────────────────
const CLICKABLE =
  "a, button, [role='button'], input, textarea, select, summary, label, .clickable";

type TrailPt = { x: number; y: number; t: number };

export function EmberCursor() {
  const svgRef   = useRef<SVGSVGElement>(null);
  const groupRef = useRef<SVGGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // ── Guards ────────────────────────────────────────────────────────────────
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const svg    = svgRef.current;
    const group  = groupRef.current;
    const canvas = canvasRef.current;
    if (!svg || !group || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── DPR-aware canvas resize ───────────────────────────────────────────────
    let dpr = 1;
    const resizeCanvas = () => {
      dpr = window.devicePixelRatio || 1;
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas, { passive: true });

    // ── State ─────────────────────────────────────────────────────────────────
    let mx       = -999;
    let my       = -999;
    let visible  = false;
    let hovering = false;
    let raf      = 0;
    const trail: TrailPt[] = [];

    // ── Helpers ───────────────────────────────────────────────────────────────
    const hide = () => {
      visible = false;
      trail.length = 0;
      svg.style.opacity = "0";
    };

    // ── Event handlers ────────────────────────────────────────────────────────
    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;

      if (!visible) {
        // Re-entering: clear stale history, then snap head and show
        trail.length = 0;
        visible = true;
        svg.style.opacity = "1";
      }

      trail.push({ x: mx, y: my, t: performance.now() });
      if (trail.length > TRAIL_PTS) trail.splice(0, trail.length - TRAIL_PTS);

      // Hover detection — check target chain for clickable element
      hovering = !!(e.target as Element | null)?.closest(CLICKABLE);
    };

    const onLeave             = () => hide();
    const onVisibilityChange  = () => { if (document.hidden) hide(); };
    const onWindowBlur        = () => hide();

    // ── Initialise ────────────────────────────────────────────────────────────
    document.documentElement.style.cursor = "none";
    svg.style.opacity = "0";

    document.addEventListener("pointermove",       onMove,            { passive: true });
    document.addEventListener("pointerleave",      onLeave,           { passive: true });
    document.addEventListener("visibilitychange",  onVisibilityChange);
    window.addEventListener("blur",                onWindowBlur);

    // ── rAF render loop ───────────────────────────────────────────────────────
    // Alias refs captured after null-checks so TypeScript considers them
    // non-nullable inside the hoisted function declaration.
    const svgEl    = svg;
    const groupEl  = group;
    const ctxEl    = ctx;
    const canvasEl = canvas;

    function tick() {
      const now    = performance.now();
      const cutoff = now - TRAIL_MS;

      // 1. Move spark head — no lerp, direct tracking
      if (visible) {
        svgEl.style.transform = `translate(${(mx - 14).toFixed(1)}px,${(my - 14).toFixed(1)}px)`;
        // Hover scale — CSS transition on <g> handles smooth ease
        groupEl.style.transform = hovering ? "scale(1.28)" : "scale(1)";
      }

      // 2. Draw trail on canvas
      ctxEl.clearRect(0, 0, canvasEl.width, canvasEl.height);
      ctxEl.save();
      ctxEl.scale(dpr, dpr); // logical-pixel coordinates throughout

      if (visible && trail.length > 1) {
        // Trim head of array to keep only points within TRAIL_MS
        let start = 0;
        while (start < trail.length - 1 && trail[start].t < cutoff) start++;
        const pts = trail.slice(start);

        if (pts.length > 1) {
          const n = pts.length;
          ctxEl.lineCap = "round";

          for (let i = 1; i < n; i++) {
            const p0 = pts[i - 1];
            const p1 = pts[i];

            // posRatio: 0 at the oldest visible point, 1 at the head
            const posRatio = i / (n - 1);
            // ageRatio: 0 when at the cutoff threshold, 1 when brand-new
            const ageRatio = Math.max(0, (p0.t - cutoff) / TRAIL_MS);

            // Alpha: power curves give a sharp falloff at the tail
            const alpha = Math.pow(posRatio, 1.6) * Math.pow(ageRatio, 0.6) * TRAIL_ALPHA;
            if (alpha < 0.008) continue;

            // Width: 0.7px at tail → 1.8px at head
            const lw = 0.7 + posRatio * 1.1;

            ctxEl.beginPath();
            ctxEl.moveTo(p0.x, p0.y);
            ctxEl.lineTo(p1.x, p1.y);
            ctxEl.strokeStyle = `rgba(${EMBER_RGB},${alpha.toFixed(3)})`;
            ctxEl.lineWidth   = lw;
            ctxEl.stroke();
          }
        }
      }

      ctxEl.restore();
      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);

    // ── Cleanup ───────────────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("pointermove",      onMove);
      document.removeEventListener("pointerleave",     onLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.removeEventListener("blur",               onWindowBlur);
      window.removeEventListener("resize",             resizeCanvas);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    <>
      {/*
       * Trail canvas — full-viewport, below the spark head.
       * Width/height are set imperatively by resizeCanvas(); CSS
       * width/height are intentionally omitted so the canvas bitmap
       * drives the layout size (avoids DPR scaling artefacts).
       */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          pointerEvents: "none",
          zIndex:        9998,
        }}
      />

      {/*
       * Spark head SVG — 28×28, centred at (14, 14).
       * Transform positions the centre on the real cursor coordinate.
       * The inner <g> carries the CSS transition for hover scale.
       */}
      <svg
        ref={svgRef}
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{
          position:      "fixed",
          top:           0,
          left:          0,
          pointerEvents: "none",
          zIndex:        9999,
          opacity:       0,
          transition:    "opacity 200ms ease",
          willChange:    "transform",
        }}
      >
        {/*
         * Inner group — carries the hover scale.
         * transformOrigin centres the scale on the spark's visual centre (14,14).
         * CSS transition makes the hover reaction smooth without JS lerp.
         */}
        <g
          ref={groupRef}
          style={{
            transformOrigin: "14px 14px",
            transition:      "transform 150ms ease",
          }}
        >
          {/*
           * Hand-drawn ember spark centred at (14,14).
           * 7 rays — odd count prevents geometric symmetry.
           * Ray lengths, angles, and weights are deliberately uneven.
           * Bezier curves give each ray a slight organic bend.
           */}

          {/* Centre dot — offset slightly for asymmetry */}
          <circle cx="14.4" cy="13.6" r="2.2" fill="#EF7C62" />

          {/* Ray 1 — top, leans left */}
          <path d="M13.8,13 C13.0,10.5 12.4,8.0 13.2,5.0"
            stroke="#EF7C62" strokeWidth="1.25" strokeLinecap="round" />

          {/* Ray 2 — upper-right, longest */}
          <path d="M14.5,13.2 C16.4,11.5 18.6,10.2 21.0,8.4"
            stroke="#EF7C62" strokeWidth="1.05" strokeLinecap="round" />

          {/* Ray 3 — right, nearly horizontal, shortest */}
          <path d="M14.6,13.8 C16.8,13.5 18.6,13.9 20.5,14.6"
            stroke="#EF7C62" strokeWidth="0.85" strokeLinecap="round" />

          {/* Ray 4 — lower-right */}
          <path d="M14.4,14.4 C15.8,16.2 17.0,18.4 18.0,21.0"
            stroke="#EF7C62" strokeWidth="1.00" strokeLinecap="round" />

          {/* Ray 5 — bottom, slightly right of vertical */}
          <path d="M14.1,14.5 C14.8,16.8 15.2,19.5 14.4,22.5"
            stroke="#EF7C62" strokeWidth="1.15" strokeLinecap="round" />

          {/* Ray 6 — lower-left */}
          <path d="M13.6,14.4 C12.0,15.8 10.2,17.0 7.8,18.4"
            stroke="#EF7C62" strokeWidth="0.95" strokeLinecap="round" />

          {/* Ray 7 — upper-left */}
          <path d="M13.5,13.4 C11.6,12.4 9.2,11.6 6.8,10.8"
            stroke="#EF7C62" strokeWidth="1.10" strokeLinecap="round" />
        </g>
      </svg>
    </>
  );
}
