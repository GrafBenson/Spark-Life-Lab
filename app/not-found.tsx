import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-inner">
          <p className="eyebrow">Page not found</p>
          <h1>This page has not found its place yet.</h1>
          <p className="page-intro">
            Return to SparkLifeLab and explore the SparkLife Identity Lab.
          </p>
          <Link className="button button-primary" href="/identity-lab/">
            Explore the Identity Lab
          </Link>
        </div>
      </section>
    </main>
  );
}
