import type { Metadata } from "next";
import { ReflectionPage } from "@/components/reflection-page";
import { pageMetadata } from "@/lib/seo";

// ─── Metadata ────────────────────────────────────────────────────────────────
// Subscriber-only reflection reached from Email 5 of the Midlife Clarity Check
// welcome sequence. Not linked from the header or footer, and kept out of
// search results and sitemap.xml while it is reserved for subscribers.
// Flip `noindex` to false (and add the route to app/sitemap.ts) to publish it.

export const metadata: Metadata = pageMetadata({
  title: "Meaning & Purpose Reflection",
  description:
    "A short SparkLifeLab reflection to help you notice where life already feels meaningful, before asking what your purpose is.",
  path: "/reflections/meaning-and-purpose/",
  noindex: true,
});

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MeaningAndPurposeReflectionPage() {
  return (
    <ReflectionPage
      title="Meaning & Purpose"
      standfirst="Sometimes meaning is quieter than we expect"
      intro="Many people imagine that purpose arrives as one big discovery. In reality, it often appears much more quietly. It shows up in the moments that leave us feeling fully present, genuinely useful, deeply interested, or quietly alive. Before asking what your purpose is, it can help to notice where life already feels meaningful."
      exerciseIntro={["Think back over the past month.", "Then ask yourself:"]}
      questions={[
        "When did I feel most alive or engaged?",
        "What was I doing—and who benefited from it?",
        "If I had more time and freedom, which of those moments would I gladly experience more often?",
      ]}
      notice="Don’t look for a perfect answer. Look for recurring themes. You may notice that meaning isn’t connected to achievement at all. It may come from creating something, helping someone, learning, building, exploring, or simply feeling fully yourself. Those patterns often point towards what matters most now."
      continueFromHere="Keep these reflections somewhere you can return to. They may help you recognise the kinds of experiences you want to invite more intentionally into the next chapter of your life."
    />
  );
}
