import type { Metadata } from "next";
import Link from "next/link";

import { brand } from "@/data/site";

export const metadata: Metadata = {
  title: "Resources — SparkLifeLab Essays",
  description:
    "Reflections and essays on midlife, clarity, and the threshold — published on Substack.",
};

const topics = [
  {
    title: "The Midlife Fog",
    teaser:
      "What it is, why it happens, and why naming it changes everything.",
  },
  {
    title: "Identity at the threshold",
    teaser:
      "How roles we have carried for decades can quietly become cages — and how to notice.",
  },
  {
    title: "The Clarity Check explained",
    teaser:
      "A deeper look at the six questions and what they reveal about where you are.",
  },
  {
    title: "Values work in practice",
    teaser:
      "Not a list exercise. A living conversation with what matters most to you now.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="section-pad" style={{ background: "var(--paper)" }}>
        <div className="container-narrow">
          <p className="kicker">Reflections for the threshold.</p>
          <span aria-hidden className="section-divider mt-4" />
          <h1 className="display-hero">
            Essays on midlife,
            <br />
            clarity, and becoming.
          </h1>
          <p className="lead-copy mt-6 max-w-lg">
            We write about the things that rarely get a serious hearing: the
            quiet disorientation of midlife, the courage it takes to look
            honestly at your life, and what becomes possible when you do.
          </p>
          <a
            href={brand.substackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-9"
          >
            Read our essays on Substack ↗
          </a>
        </div>
      </section>

      {/* ─── Topics we return to — step rows ─── */}
      <section className="section-pad section-soft">
        <div className="container-narrow">
          <p className="kicker">Themes we return to</p>
          <span aria-hidden className="section-divider mt-4" />
          <h2 className="display-section">What we write about</h2>

          <div className="mt-12">
            {topics.map((topic, i) => (
              <div key={topic.title} className="step-row">
                <div className="step-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="display-sub">{topic.title}</h3>
                  <p className="body-copy mt-3">{topic.teaser}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Substack CTA ─── */}
      <section className="section-pad section-lavender">
        <div className="container-narrow">
          <h2 className="display-section">Essays on Substack.</h2>
          <span aria-hidden className="section-divider mt-5" />
          <p className="body-copy max-w-prose">
            Our writing is published on Substack — a quiet place to think and
            reflect. No daily content. No noise. Just honest essays, written
            when we have something worth saying.
          </p>
          <blockquote className="pull-quote">
            Subscribe to receive new essays in your inbox.
          </blockquote>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href={brand.substackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Read on Substack ↗
            </a>
            <Link href="/clarity-check" className="btn-secondary">
              Take the free Clarity Check →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
