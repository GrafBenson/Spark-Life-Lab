import type { Metadata } from "next";
import { ReflectionPage } from "@/components/reflection-page";
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

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CareerAndWorkReflectionPage() {
  return (
    <ReflectionPage
      title="Career & Work"
      standfirst="When your work no longer fits in quite the same way"
      intro="Feeling unsettled at work does not always mean you need a different job. Sometimes it means that your values, interests or priorities have changed, while your work still reflects an earlier version of who you were. Before making any decisions, it can help to notice what still feels meaningful and what no longer does."
      exerciseIntro={[
        "Take five minutes and answer these three questions without overthinking them:",
      ]}
      questions={[
        "Which part of my work gives me the greatest sense of energy or satisfaction?",
        "Which part do I continue mainly because I feel I should?",
        "If I could keep only one aspect of my current work, what would I definitely want to carry into the future?",
      ]}
      notice="Look for the pattern rather than a solution. Your answers may reveal what matters most to you now and which qualities you would want your future work—or another form of contribution—to preserve."
      continueFromHere="Keep your answers somewhere you can return to. They may become useful when you begin thinking more deeply about your strengths, values and what you want the next phase of your life to contain."
    />
  );
}
