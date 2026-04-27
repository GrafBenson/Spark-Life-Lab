import Link from "next/link";

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
          <Link className="button button-primary" href="/clarity-check/">
            Get the Clarity Check
          </Link>
        </div>
      </section>
    </main>
  );
}
