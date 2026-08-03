import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";

// ─── Metadata ────────────────────────────────────────────────────────────────
// Subscriber-only reflection reached from Email 5 of the Midlife Clarity Check
// welcome sequence. Not linked from the header or footer, and kept out of
// search results and sitemap.xml while it is reserved for subscribers.
// Flip `noindex` to false (and add the route to app/sitemap.ts) to publish it.

export const metadata: Metadata = pageMetadata({
  title: "Career & Work Reflection",
  description:
    "A short SparkLifeLab reflection to help you notice what still feels meaningful in your work and what you may want to carry forward.",
  path: "/reflections/career-and-work/",
  noindex: true,
});

// ─── Reflection questions — approved copy ────────────────────────────────────

const QUESTIONS = [
  "Which part of my work gives me the greatest sense of energy or satisfaction?",
  "Which part do I continue mainly because I feel I should?",
  "If I could keep only one aspect of my current work, what would I definitely want to carry into the future?",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CareerAndWorkReflectionPage() {
  return (
    <main className="reflection-page">
      <article className="reflection-shell">
        <div className="reflection-inner">

          <p className="eyebrow">A SparkLifeLab reflection</p>
          <h1 className="reflection-title">Career &amp; Work</h1>
          <p className="reflection-standfirst">
            When your work no longer fits in quite the same way
          </p>

          <p className="reflection-intro">
            Feeling unsettled at work does not always mean you need a different job.
            Sometimes it means that your values, interests or priorities have changed,
            while your work still reflects an earlier version of who you were. Before
            making any decisions, it can help to notice what still feels meaningful and
            what no longer does.
          </p>

          <section className="reflection-block">
            <h2 className="reflection-heading">A short reflection</h2>
            <p className="reflection-copy">
              Take five minutes and answer these three questions without overthinking
              them:
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
              Look for the pattern rather than a solution. Your answers may reveal what
              matters most to you now and which qualities you would want your future
              work—or another form of contribution—to preserve.
            </p>
          </section>

          <section className="reflection-block">
            <h2 className="reflection-heading">Continue from here</h2>
            <p className="reflection-copy">
              Keep your answers somewhere you can return to. They may become useful when
              you begin thinking more deeply about your strengths, values and what you
              want the next phase of your life to contain.
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
