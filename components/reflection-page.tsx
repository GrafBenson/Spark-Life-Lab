import type { ReactNode } from "react";
import Link from "next/link";

// Shared shell for the hidden subscriber reflection pages under /reflections/.
// Every topic renders through this component so the five pages cannot drift
// apart structurally — the handover notes require "exactly the same design
// language" across the series. Copy stays in each page file; only the
// structure lives here.

export type ReflectionPageProps = {
  /** Topic name, rendered as the h1. */
  title: ReactNode;
  /** Standfirst line under the heading. */
  standfirst: ReactNode;
  /** Opening paragraph. */
  intro: ReactNode;
  /** Lead-in above the questions. One paragraph per entry. */
  exerciseIntro: ReactNode[];
  /** Exactly three reflection questions — the visual centre of the page. */
  questions: string[];
  /** "What to notice" body copy. */
  notice: ReactNode;
  /** "Continue from here" body copy. */
  continueFromHere: ReactNode;
};

export function ReflectionPage({
  title,
  standfirst,
  intro,
  exerciseIntro,
  questions,
  notice,
  continueFromHere,
}: ReflectionPageProps) {
  return (
    <main className="reflection-page">
      <article className="reflection-shell">
        <div className="reflection-inner">

          <p className="eyebrow">A SparkLifeLab reflection</p>
          <h1 className="reflection-title">{title}</h1>
          <p className="reflection-standfirst">{standfirst}</p>

          <p className="reflection-intro">{intro}</p>

          <section className="reflection-block">
            <h2 className="reflection-heading">A short reflection</h2>
            {exerciseIntro.map((line, i) => (
              <p className="reflection-copy" key={i}>
                {line}
              </p>
            ))}

            <ol className="reflection-questions">
              {questions.map((question) => (
                <li className="reflection-question" key={question}>
                  {question}
                </li>
              ))}
            </ol>
          </section>

          <section className="reflection-block">
            <h2 className="reflection-heading">What to notice</h2>
            <p className="reflection-copy">{notice}</p>
          </section>

          <section className="reflection-block">
            <h2 className="reflection-heading">Continue from here</h2>
            <p className="reflection-copy">{continueFromHere}</p>
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
