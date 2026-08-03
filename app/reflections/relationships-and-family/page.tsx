import type { Metadata } from "next";
import { ReflectionPage } from "@/components/reflection-page";
import { pageMetadata } from "@/lib/seo";

// ─── Metadata ────────────────────────────────────────────────────────────────
// Subscriber-only reflection reached from Email 5 of the Midlife Clarity Check
// welcome sequence. Not linked from the header or footer, and kept out of
// search results and sitemap.xml while it is reserved for subscribers.
// Flip `noindex` to false (and add the route to app/sitemap.ts) to publish it.

export const metadata: Metadata = pageMetadata({
  title: "Relationships & Family Reflection",
  description:
    "A short SparkLifeLab reflection to help you notice which relationships give you connection and where a little more attention could help.",
  path: "/reflections/relationships-and-family/",
  noindex: true,
});

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RelationshipsAndFamilyReflectionPage() {
  return (
    <ReflectionPage
      title="Relationships & Family"
      standfirst="The people around us shape the life we experience"
      intro="Midlife often changes our relationships. Children become more independent, parents may need more support, friendships evolve, and partnerships sometimes deepen while at other times they quietly drift into familiar routines. In the middle of caring for others, it is easy to lose sight of the kinds of relationships that help us feel most alive and understood."
      exerciseIntro={[
        "Think about the people you spend the most time with.",
        "Then ask yourself:",
      ]}
      questions={[
        "Which relationship currently gives me the greatest sense of connection?",
        "Which relationship would benefit most from a little more time, attention, or honesty?",
        "What is one small step I could take this week to strengthen that connection?",
      ]}
      notice="You do not need to solve every relationship. Simply notice where warmth already exists and where a little more attention could make a meaningful difference. Often, lasting change begins with one honest conversation, one act of appreciation, or simply making time for someone who matters."
      continueFromHere="Keep these reflections somewhere you can return to. They may help you become more intentional about the relationships you want to nurture as your next chapter unfolds."
    />
  );
}
