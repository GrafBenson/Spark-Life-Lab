import type { Metadata } from "next";
import Link from "next/link";

// Next.js emits `noindex` for not-found automatically, so only the title is
// set here — adding a second robots directive would duplicate that tag.
export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Page not found</p>
          <h1>This page has not found its place yet.</h1>
          <p className="page-intro">
            Return to SparkLifeLab and start with the Midlife Clarity Check.
          </p>
          <Link className="button button-primary" href="/#clarity-check">
            Explore the Midlife Clarity Check
          </Link>
        </div>
      </section>
    </main>
  );
}
