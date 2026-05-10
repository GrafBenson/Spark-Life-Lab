"use client";

/**
 * EmberCursor
 *
 * A custom cursor that replaces the system pointer on desktop with a small
 * hand-drawn ember spark symbol in SparkLifeLab ember (#EF7C62).
 *
 * Rules:
 * - Desktop only: disabled on touch devices and narrow viewports
 * - prefers-reduced-motion: disabled entirely
 * - pointer-events: none — never intercepts clicks
 * - Slight exponential smoothing (lag) for an editorial, unhurried feel
 * - No trails, no particles, no glow, no blur
 * - Hides the system cursor via `cursor: none` on <html> when active
 */

import { useEffect, useRef } from "react";

// ── Smoothing factor: 0 = instant, 1 = never arrives. 0.12 = subtle lag.
const LERP = 0.12;

export function EmberCursor() {
  const elRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // ── Guard: touch device or narrow viewport ──────────────────────────────
    const isTouch = window.matchMedia("(hover: none)").matches;
    const isMobile = window.innerWidth < 768;
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || isMobile || isReduced) return;

    const el = elRef.current;
    if (!el) return;

    // Hide system cursor globally while this cursor is active
    document.documentElement.style.cursor = "none";
    el.style.opacity = "0"; // starts invisible until first mouse move

    let cx = -100;
    let cy = -100;
    let tx = -100;
    let ty = -100;
    let raf = 0;
    let hasEntered = false;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!hasEntered) {
        // Snap to position on first move to avoid flying in from off-screen
        cx = tx;
        cy = ty;
        hasEntered = true;
        el.style.opacity = "1";
      }
    };

    const onLeave = () => {
      el.style.opacity = "0";
      hasEntered = false;
    };

    const onEnter = () => {
      if (hasEntered) el.style.opacity = "1";
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave, { passive: true });
    document.addEventListener("mouseenter", onEnter, { passive: true });

    function tick() {
      // Exponential ease toward target position
      cx += (tx - cx) * LERP;
      cy += (ty - cy) * LERP;

      // Centre the SVG on the cursor point (SVG is 28×28, origin at 14,14)
      if (el) {
        el.style.transform = `translate(${(cx - 14).toFixed(1)}px, ${(cy - 14).toFixed(1)}px)`;
      }

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.style.cursor = "";
    };
  }, []);

  return (
    /*
     * Fixed overlay: covers the full viewport, pointer-events none.
     * The SVG is 28×28 with the ember centred at (14,14).
     * Transform moves the whole SVG so the centre tracks the cursor.
     */
    <svg
      ref={elRef}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: 0,
        transition: "opacity 200ms ease",
        willChange: "transform",
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
    </svg>
  );
}
