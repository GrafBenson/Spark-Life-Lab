import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/breadcrumb-jsonld";
import { IdentityWaitlistKitForm } from "@/components/identity-waitlist-kit-form";

export const metadata: Metadata = {
  title: "Identity Lab Waitlist | SparkLifeLab",
  description:
    "Join the waitlist for the next Identity Lab cohort at SparkLifeLab.",
};

export default function IdentityLabWaitlistPage() {
  return (
    <>
      <BreadcrumbJsonLd page="Identity Lab Waitlist" href="/identity-lab/waitlist/" />
      <main className="identity-waitlist-page">
        <section className="section identity-waitlist-section">
          <div className="section-inner narrow identity-waitlist-inner">
            <p className="eyebrow">IDENTITY LAB</p>
            <h1>Join the waitlist for the next Identity Lab cohort</h1>
            <p className="identity-waitlist-intro">
              The Identity Lab is a guided journey for people in midlife who are ready to move from fog to grounded forward movement.
            </p>
            <p className="identity-waitlist-copy">
              Registration is currently closed. If you’d like to be the first to know when the next enrollment opens, join the waitlist below.
            </p>
            <p className="identity-waitlist-support">
              Add your name and email, and we’ll let you know as soon as registration opens again.
            </p>

            <IdentityWaitlistKitForm />

            <p className="identity-waitlist-note">
              We’ll only email you about the Identity Lab and related updates. No spam.
            </p>
            <p className="identity-waitlist-secondary">
              <Link className="button-text" href="/#clarity-check">
                Not ready yet? Start with the Midlife Clarity Check →
              </Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
