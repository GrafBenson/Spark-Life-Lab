/**
 * spark-path.ts
 *
 * Scroll-linked path model for the GuidingSpark system.
 *
 * Phase 1: Waypoints 1–3
 *   1. Hero — lower-right of hero video frame
 *   2. Midlife Fog — left side, base of blockquote accent line
 *   3. Guidance section ("You don't have to figure this out alone") — lower-right
 *
 * Architecture:
 * - Waypoints are resolved from live DOM measurements on mount/resize
 * - Transitions occupy a defined scroll-Y range between sections
 * - Outside those ranges the spark rests at a fixed page-absolute position
 * - All coordinates are page-absolute (Y is added to scrollY to get viewport Y)
 * - easeInOut applied within each transition range for organic deceleration
 *
 * No GSAP dependency — pure scroll math.
 */

export type SparkPosition = {
  /** Page-absolute X (equals viewport X for full-width sections) */
  x: number;
  /** Page-absolute Y — subtract window.scrollY to get viewport Y */
  y: number;
  /** Trail start: page-absolute coords of a point behind the spark head */
  trailX: number;
  trailY: number;
  /** True while the spark is stationary inside a section */
  isResting: boolean;
};

type Waypoint = { x: number; y: number };

type Segment = {
  from: Waypoint;
  to: Waypoint;
  /** Bezier control point 1 (cubic) */
  cp1: Waypoint;
  /** Bezier control point 2 (cubic) */
  cp2: Waypoint;
  /** scrollY at which the spark begins moving toward the next waypoint */
  transitionStart: number;
  /** scrollY at which the spark arrives at the next waypoint */
  transitionEnd: number;
};

export type SparkPath = {
  waypoints: Waypoint[];
  segments: Segment[];
};

// ─── Waypoint definitions ────────────────────────────────────────────────────
// xFracDk / yFracDk: fraction of (viewport width / section height) on desktop
// xFracMb / yFracMb: same for mobile — tighter horizontal range, no wide arcs

const WAYPOINT_DEFS = [
  // Point 1 — Hero: just below / at the lower edge of the hero video
  {
    sectionId: 'hero',
    xFracDk: 0.70, yFracDk: 0.90,
    xFracMb: 0.65, yFracMb: 0.88,
  },
  // Point 2 — Midlife Fog: left margin, aligned with blockquote accent line
  {
    sectionId: 'problem',
    xFracDk: 0.13, yFracDk: 0.82,
    xFracMb: 0.14, yFracMb: 0.80,
  },
  // Point 3 — Guidance section: lower-right, beside/below group photo
  {
    sectionId: 'about',
    xFracDk: 0.84, yFracDk: 0.88,
    xFracMb: 0.76, yFracMb: 0.84,
  },
] as const;

// How far back on the bezier (0–1) to start the trail
const TRAIL_BACK = 0.11;

// ─── Helpers ─────────────────────────────────────────────────────────────────

function getSectionMetrics(id: string): { top: number; height: number } | null {
  const el = document.getElementById(id);
  if (!el) return null;
  return {
    top: el.getBoundingClientRect().top + window.scrollY,
    height: el.offsetHeight,
  };
}

function cubic(
  p0: Waypoint,
  p1: Waypoint,
  p2: Waypoint,
  p3: Waypoint,
  t: number,
): Waypoint {
  const u = 1 - t;
  return {
    x: u * u * u * p0.x + 3 * u * u * t * p1.x + 3 * u * t * t * p2.x + t * t * t * p3.x,
    y: u * u * u * p0.y + 3 * u * u * t * p1.y + 3 * u * t * t * p2.y + t * t * t * p3.y,
  };
}

/** Smooth ease-in-out (quadratic) for within-segment easing */
function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Measures the DOM and returns the SparkPath for the current viewport.
 * Returns null if any required section element is missing.
 * Call once on mount (after load) and again on resize.
 */
export function buildSparkPath(): SparkPath | null {
  const vw = window.innerWidth;
  const isMobile = vw < 768;

  const sectionData = WAYPOINT_DEFS.map(def => ({
    def,
    metrics: getSectionMetrics(def.sectionId),
  }));

  if (sectionData.some(s => !s.metrics)) return null;

  const waypoints: Waypoint[] = sectionData.map(({ def, metrics }) => ({
    x: (isMobile ? def.xFracMb : def.xFracDk) * vw,
    y: metrics!.top + (isMobile ? def.yFracMb : def.yFracDk) * metrics!.height,
  }));

  const [m0, m1, m2] = sectionData.map(s => s.metrics!);
  const [p1, p2, p3] = waypoints;

  // ── Segment 1 → 2 ──────────────────────────────────────────────────────────
  // Transition starts when 58% of hero has scrolled past,
  // ends when 40% of the problem section is in view.
  const t1Start = m0.top + m0.height * 0.58;
  const t1End   = m1.top + m1.height * 0.40;

  const dy12 = p2.y - p1.y;
  // Desktop: gentle leftward descending arc.
  // CP1 keeps x near P1, pulls straight down first.
  // CP2 arrives from the right of P2 so the path curves in from that side.
  // Mobile: more vertical, minimal horizontal sweep.
  const seg1cp1 = isMobile
    ? { x: p1.x,        y: p1.y + dy12 * 0.32 }
    : { x: p1.x + 25,   y: p1.y + dy12 * 0.34 };
  const seg1cp2 = isMobile
    ? { x: p2.x + 35,   y: p2.y - dy12 * 0.12 }
    : { x: p2.x + 160,  y: p2.y - dy12 * 0.09 };

  // ── Segment 2 → 3 ──────────────────────────────────────────────────────────
  // Transition starts at 70% through problem, ends at 54% through about.
  const t2Start = m1.top + m1.height * 0.70;
  const t2End   = m2.top + m2.height * 0.54;

  const dy23 = p3.y - p2.y;
  const dx23 = p3.x - p2.x;
  // Desktop: broad rightward S-sweep as seen in sketch.
  // CP1 goes left and down from P2 (spark dips first, then sweeps right).
  // CP2 approaches P3 from below-left.
  // Mobile: gentle rightward curve, no wide arc.
  const seg2cp1 = isMobile
    ? { x: p2.x + dx23 * 0.18, y: p2.y + dy23 * 0.42 }
    : { x: p2.x - 25,           y: p2.y + dy23 * 0.44 };
  const seg2cp2 = isMobile
    ? { x: p3.x - dx23 * 0.12, y: p3.y - dy23 * 0.13 }
    : { x: p3.x - 75,           y: p3.y - dy23 * 0.15 };

  return {
    waypoints,
    segments: [
      {
        from: p1, to: p2,
        cp1: seg1cp1, cp2: seg1cp2,
        transitionStart: t1Start, transitionEnd: t1End,
      },
      {
        from: p2, to: p3,
        cp1: seg2cp1, cp2: seg2cp2,
        transitionStart: t2Start, transitionEnd: t2End,
      },
    ],
  };
}

/**
 * Given the current scrollY and the resolved SparkPath, returns the
 * spark's position and state. Pure function — no side effects.
 */
export function computeSparkPosition(
  scrollY: number,
  path: SparkPath,
): SparkPosition {
  const { waypoints, segments } = path;

  // ── Before first transition: resting at Point 1 ──────────────────────────
  if (scrollY < segments[0].transitionStart) {
    return {
      ...waypoints[0],
      trailX: waypoints[0].x,
      trailY: waypoints[0].y,
      isResting: true,
    };
  }

  for (let i = 0; i < segments.length; i++) {
    const seg = segments[i];

    // ── In transition i → i+1 ────────────────────────────────────────────────
    if (scrollY < seg.transitionEnd) {
      const rawT = (scrollY - seg.transitionStart) / (seg.transitionEnd - seg.transitionStart);
      const t = easeInOut(Math.max(0, Math.min(1, rawT)));
      const pos = cubic(seg.from, seg.cp1, seg.cp2, seg.to, t);
      const tTrail = Math.max(0, t - TRAIL_BACK);
      const trail = cubic(seg.from, seg.cp1, seg.cp2, seg.to, tTrail);
      return {
        x: pos.x, y: pos.y,
        trailX: trail.x, trailY: trail.y,
        isResting: false,
      };
    }

    // ── Resting at the destination of segment i ───────────────────────────
    const isLastSegment = i + 1 >= segments.length;
    const nextNotYetStarted = !isLastSegment && scrollY < segments[i + 1].transitionStart;
    if (isLastSegment || nextNotYetStarted) {
      const wp = waypoints[i + 1];
      return { ...wp, trailX: wp.x, trailY: wp.y, isResting: true };
    }
  }

  // ── Past all defined segments: rest at final waypoint ───────────────────
  const last = waypoints[waypoints.length - 1];
  return { ...last, trailX: last.x, trailY: last.y, isResting: true };
}
