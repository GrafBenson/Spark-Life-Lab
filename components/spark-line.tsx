/**
 * SparkLine — premium ember accent motif.
 *
 * A restrained SVG stroke that draws in when its parent `.reveal.is-in`
 * becomes active in the viewport. Pure CSS animation — no JS needed.
 *
 * Variants:
 *   underline  — gentle undulating stroke beneath a heading (default)
 *   arc        — ascending arc used near CTAs and section transitions
 *   tagline    — wider, bolder stroke for the closing tagline moment
 */

type SparkLineProps = {
  variant?: "underline" | "arc" | "tagline";
  className?: string;
};

export function SparkLine({
  variant = "underline",
  className = "",
}: SparkLineProps) {
  if (variant === "tagline") {
    return (
      <span className={`spark-line spark-line--tagline ${className}`.trim()} aria-hidden="true">
        <svg width="120" height="10" viewBox="0 0 120 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 7 Q20 3 40 6 Q60 9 80 5 Q100 1 118 5"
            stroke="var(--ember)"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </span>
    );
  }

  if (variant === "arc") {
    return (
      <span className={`spark-line spark-line--arc ${className}`.trim()} aria-hidden="true">
        <svg width="56" height="12" viewBox="0 0 56 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2 10 Q14 4 28 7 Q42 10 54 4"
            stroke="var(--ember)"
            strokeWidth="1.4"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </span>
    );
  }

  // Default: underline
  return (
    <span className={`spark-line spark-line--underline ${className}`.trim()} aria-hidden="true">
      <svg width="72" height="8" viewBox="0 0 72 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 5.5 Q18 2 36 5.5 Q54 9 70 4.5"
          stroke="var(--ember)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  );
}
