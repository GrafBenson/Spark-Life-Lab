/**
 * ClarityCheckCard — live Kit form + transparent cover visual.
 *
 * - Cover PNG preserves transparency (no white background box)
 * - Shadow is applied via CSS filter: drop-shadow (not box-shadow)
 *   so it follows the actual image outline, not the bounding rect
 */

import Image from "next/image";
import { MidlifeClarityKitForm } from "@/components/midlife-clarity-kit-form";

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

      <div className="clarity-form-placeholder">
        <p className="clarity-form-label">Get your free Midlife Clarity Check</p>

        <MidlifeClarityKitForm />

        <p className="clarity-form-reassurance">
          Free. No spam. Delivered to your inbox. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
