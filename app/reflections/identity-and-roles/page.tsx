import type { Metadata } from "next";
import { ReflectionPage } from "@/components/reflection-page";
import { pageMetadata } from "@/lib/seo";

// ─── Metadata ────────────────────────────────────────────────────────────────
// Subscriber-only reflection reached from Email 5 of the Midlife Clarity Check
// welcome sequence. Not linked from the header or footer, and kept out of
// search results and sitemap.xml while it is reserved for subscribers.
// Flip `noindex` to false (and add the route to app/sitemap.ts) to publish it.

export const metadata: Metadata = pageMetadata({
  title: "Identity & Roles Reflection",
  description:
    "A short SparkLifeLab reflection to help you notice the roles you carry and the person living behind them.",
  path: "/reflections/identity-and-roles/",
  noindex: true,
});

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function IdentityAndRolesReflectionPage() {
  return (
    <ReflectionPage
      title="Identity & Roles"
      standfirst="When the roles you carry no longer tell the whole story"
      intro={
        <>
          Throughout life we take on many roles: professional, parent, partner,
          organiser, provider, friend. They matter, and many of them will always
          matter. But sometimes a role grows so large that we lose sight of the person
          living behind it. Midlife often invites us to ask a gentle question:{" "}
          <em>Who am I, beyond everything I do for everyone else?</em>
        </>
      }
      exerciseIntro={[
        "Think about the different roles you currently carry.",
        "Now ask yourself:",
      ]}
      questions={[
        "Which role occupies most of my time and attention?",
        "Which part of me receives far too little space because of that role?",
        "If that forgotten part of me had one extra hour each week, how would it choose to spend it?",
      ]}
      notice="There is no need to change anything today. Simply notice what appeared first. Often the answer is surprisingly small: a forgotten interest, a quality you miss in yourself, or a way of being that quietly wants to return. Those small signals often tell us more than dramatic plans ever could."
      continueFromHere="Keep your answers somewhere you can return to. They may become important as you continue discovering what still feels deeply true about who you are becoming."
    />
  );
}
