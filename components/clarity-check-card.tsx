/**
 * ClarityCheckCard — Kit form placeholder + transparent cover visual.
 *
 * Swap zone: when the real Kit embed is configured, replace the form
 * placeholder div with the Kit embed while keeping the surrounding
 * layout and cover image intact.
 *
 * Rules:
 * - Cover PNG preserves transparency (no white background box)
 * - Shadow is applied via CSS filter: drop-shadow (not box-shadow)
 *   so it follows the actual image outline, not the bounding rect
 * - Form does NOT submit — inputs are functional visuals only
 * - No fake success state, no submission handler
 */

import Image from "next/image";

export function ClarityCheckCard() {
  return (
    <div className="clarity-card-v2">
      {/* Cover visual — transparent PNG with soft depth shadow */}
      <div className="clarity-cover-wrap">
        <Image
          src="/images/Clarity-Check-cover-transparent.png"
          alt="The Midlife Clarity Check — a free personal self-assessment"
          width={480}
          height={640}
          className="clarity-cover-img"
          priority
        />
      </div>

      {/* Kit form placeholder — visual only, no submission logic */}
      <div className="clarity-form-placeholder">
        <p className="clarity-form-label">Get your free Midlife Clarity Check</p>

        <div className="clarity-form-fields">
          <input
            className="clarity-form-input"
            type="text"
            placeholder="First name"
            aria-label="First name"
            autoComplete="given-name"
          />
          <input
            className="clarity-form-input"
            type="email"
            placeholder="Email address"
            aria-label="Email address"
            autoComplete="email"
          />
        </div>

        {/* type="button" — does not trigger form submission */}
        <button type="button" className="clarity-form-submit">
          Send me the Midlife Clarity Check →
        </button>

        <p className="clarity-form-reassurance">
          Free. No spam. Delivered to your inbox. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
