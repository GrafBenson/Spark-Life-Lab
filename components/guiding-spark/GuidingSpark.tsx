"use client";

/**
 * GuidingSpark — Phase 1
 *
 * One persistent scroll-linked ember that accompanies the visitor through
 * the homepage. Implemented as a fixed SVG overlay driven by a rAF loop.
 *
 * Phase 1 covers waypoints 1–3:
 *   1. Hero — lower-right of hero video
 *   2. Midlife Fog — left margin, base of blockquote accent line
 *   3. Guidance section — lower-right, beside group photo
 *
 * Architecture:
 * - Fixed overlay: pointer-events:none, z-index 50, aria-hidden
 * - DOM mutations go directly via setAttribute/style — zero React re-renders
 * - Waypoints resolved on window.load and again on resize (debounced)
 * - prefers-reduced-motion: component returns null (no element in DOM)
 * - Mobile (< 768px): same logic, tighter bezier curves (no wide arcs)
 *
 * This component does NOT:
 * - Use GSAP (no dependency needed for Phase 1)
 * - Emit scroll events or interfere with the scroll stack
 * - Add any visual state to React tree during animation
 */

import { useEffect, useRef } from "react";
import { SparkHead } from "./SparkHead";
import {
  buildSparkPath,
  computeSparkPosition,
  type SparkPath,
} from "./spark-path";

// ─── Utilities ────────────────────────────────────────────────────────────────

function debounce(fn: () => void, ms: number): () => void {
  let timer: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(fn, ms);
  };
}

// ─── Component ────────────────────────────────────────────────────────────────

export function GuidingSpark() {
  const headRef = useRef<SVGGElement>(null);
  const trailRef = useRef<SVGPathElement>(null);
  const sparkPathRef = useRef<SparkPath | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // ── Reduced-motion: mount nothing ─────────────────────────────────────
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let alive = true;

    // ── Path initialisation ───────────────────────────────────────────────
    // Runs after load so all images/fonts are sized and section heights
    // are stable.
    function init() {
      if (!alive) return;
      const path = buildSparkPath();
      if (!path) return;
      sparkPathRef.current = path;
      // Fade the spark head in once we know where it lives
      if (headRef.current) headRef.current.style.opacity = "1";
    }

    if (document.readyState === "complete") {
      init();
    } else {
      window.addEventListener("load", init, { once: true });
    }

    // ── Resize: rebuild path measurements ─────────────────────────────────
    const onResize = debounce(() => {
      if (!alive) return;
      const path = buildSparkPath();
      if (path) sparkPathRef.current = path;
    }, 300);
    window.addEventListener("resize", onResize, { passive: true });

    // ── rAF loop ──────────────────────────────────────────────────────────
    // Runs every frame (~16 ms). Work is: one scrollY read, pure math,
    // two DOM attribute writes. No layout reads inside the hot path.
    let prevResting = true;

    function tick() {
      if (!alive) {
        return;
      }

      const path = sparkPathRef.current;
      const head = headRef.current;
      const trail = trailRef.current;

      if (path && head && trail) {
        const scrollY = window.scrollY;
        const pos = computeSparkPosition(scrollY, path);

        // ── Spark head ────────────────────────────────────────────────────
        // Page-absolute Y → viewport Y by subtracting current scroll.
        head.setAttribute(
          "transform",
          `translate(${pos.x.toFixed(1)},${(pos.y - scrollY).toFixed(1)})`,
        );

        // ── Trail ─────────────────────────────────────────────────────────
        if (pos.isResting) {
          // Fade trail out on first resting frame; leave SVG path in place
          // so it fades from its last drawn position.
          if (!prevResting) {
            trail.style.opacity = "0";
          }
        } else {
          // Fade in on first moving frame
          if (prevResting) {
            trail.style.opacity = "1";
          }
          // Draw a short quadratic bezier from the trail-start to the head.
          // The midpoint serves as a soft control point — avoids a jagged line.
          const tvx = pos.trailX;
          const tvy = pos.trailY - scrollY;
          const vx = pos.x;
          const vy = pos.y - scrollY;
          const cpx = (tvx + vx) / 2;
          const cpy = (tvy + vy) / 2;
          trail.setAttribute(
            "d",
            `M${tvx.toFixed(1)},${tvy.toFixed(1)} Q${cpx.toFixed(1)},${cpy.toFixed(1)} ${vx.toFixed(1)},${vy.toFixed(1)}`,
          );
        }

        prevResting = pos.isResting;
      }

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    // ── Cleanup ────────────────────────────────────────────────────────────
    return () => {
      alive = false;
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 50,
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        {/* ── Trail ─────────────────────────────────────────────────────── */}
        {/* Fades in while moving, fades out on rest. CSS transition handles */}
        {/* the fade so we only need to set opacity once per state change.   */}
        <path
          ref={trailRef}
          stroke="#EF7C62"
          strokeWidth="1.4"
          fill="none"
          strokeLinecap="round"
          style={{
            opacity: 0,
            transition: "opacity 600ms ease",
            willChange: "opacity",
          }}
        />

        {/* ── Spark head ─────────────────────────────────────────────────── */}
        {/* Initially hidden (opacity 0) and off-screen via transform. Once */}
        {/* the path is resolved it fades in at Point 1.                    */}
        <g
          ref={headRef}
          style={{
            opacity: 0,
            transform: "translate(-999px, -999px)",
            transition: "opacity 400ms ease",
            willChange: "transform",
          }}
        >
          <SparkHead />
        </g>
      </svg>
    </div>
  );
}
