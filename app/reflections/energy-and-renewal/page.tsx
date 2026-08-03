import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

// ─── Metadata ────────────────────────────────────────────────────────────────
// Subscriber-only reflection reached from Email 5 of the Midlife Clarity Check
// welcome sequence. Not linked from the header or footer, and kept out of
// search results and sitemap.xml while it is reserved for subscribers.
// Flip `noindex` to false (and add the route to app/sitemap.ts) to publish it.

export const metadata: Metadata = pageMetadata({
  title: "Energy & Renewal Reflection",
  description:
    "A short SparkLifeLab reflection to help you notice where your energy naturally returns and what you may want to make more room for.",
  path: "/reflections/energy-and-renewal/",
  noindex: true,
});

// ─── Reflection questions — approved copy ────────────────────────────────────

const QUESTIONS = [
  "When did I feel most alive or energised?",
  "What was I doing—and who was I with?",
  "What is one small thing I could make a little more room for in the coming week?",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EnergyAndRenewalReflectionPage() {
  return (
    <main className="reflection-page">
      <article className="reflection-shell">
        <div className="reflection-inner">

          <p className="eyebrow">A SparkLifeLab reflection</p>
          <h1 className="reflection-title">Energy &amp; Renewal</h1>
          <p className="reflection-standfirst">
            Your energy is often trying to tell you something
          </p>

          <p className="reflection-intro">
            Many of us assume that feeling tired simply means we need more rest. Sometimes
            that is true. But sometimes the deeper question is whether the way we are
            living still gives enough space to the things that genuinely bring us alive.
            Paying attention to your energy can reveal what matters long before your mind
            has found the words.
          </p>

          <section className="reflection-block">
            <h2 className="reflection-heading">A short reflection</h2>
            <p className="reflection-copy">
              Think back over the past two weeks. Then ask yourself:
            </p>

            <ol className="reflection-questions">
              {QUESTIONS.map((question) => (
                <li className="reflection-question" key={question}>
                  {question}
                </li>
              ))}
            </ol>
          </section>

          <section className="reflection-block">
            <h2 className="reflection-heading">What to notice</h2>
            <p className="reflection-copy">
              Don’t worry about changing your whole life. Look instead for small patterns.
              You may discover that renewal comes less from escaping your life than from
              reconnecting with the parts of it that already bring you energy, curiosity or
              quiet joy. Often, a small change repeated consistently has a greater impact
              than one dramatic decision.
            </p>
          </section>

          <section className="reflection-block">
            <h2 className="reflection-heading">Continue from here</h2>
            <p className="reflection-copy">
              Keep these reflections somewhere you can return to. They may help you
              recognise where your life naturally feels more alive and where you want to
              create a little more space for yourself in the months ahead.
            </p>
          </section>

          <p className="reflection-return">
            <Link className="button-text" href="/">
              Return to SparkLifeLab →
            </Link>
          </p>

        </div>
      </article>
    </main>
  );
}
