import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();

const routes = [
  "app/page.tsx",
  "app/identity-lab/page.tsx",
  "app/about/page.tsx",
  "app/resources/page.tsx",
  "app/contact/page.tsx",
  "app/privacy-policy/page.tsx",
  "app/terms-of-use/page.tsx",
  "app/cookie-policy/page.tsx",
  "app/impressum/page.tsx",
];

const read = (path) => readFileSync(join(root, path), "utf8");

test("creates the required public route files", () => {
  for (const route of routes) {
    assert.equal(existsSync(join(root, route)), true, `${route} should exist`);
  }
});

test("keeps the site grounded in the approved SparkLifeLab content", () => {
  const content = [read("app/page.tsx"), read("data/site.ts")].join("\n");
  assert.match(content, /SparkLifeLab/);
  assert.match(content, /Midlife Fog/);
  assert.match(content, /Midlife Clarity Check/);
  assert.match(content, /SparkLife Identity Lab/);
  assert.match(content, /Bärbel/);
  assert.match(content, /Gunther/);
  assert.match(content, /Scott/);
});

test("does not include unsupported social proof or fake claims", () => {
  const files = routes.map(read).join("\n");
  assert.doesNotMatch(files, /testimonial/i);
  assert.doesNotMatch(files, /press mention/i);
  assert.doesNotMatch(files, /certified/i);
  assert.doesNotMatch(files, /thousands of/i);
  assert.doesNotMatch(files, /clinically proven/i);
});

test("has explicit legal, cookie, and honest integration placeholders", () => {
  const layout = read("app/layout.tsx");
  const footer = [read("components/site-footer.tsx"), read("data/site.ts")].join("\n");
  const cookie = read("components/cookie-consent.tsx");
  const email = read("components/email-capture.tsx");

  assert.match(layout, /Organization/);
  assert.match(footer, /Privacy Policy/);
  assert.match(footer, /Terms of Use/);
  assert.match(footer, /Cookie Policy/);
  assert.match(footer, /Impressum/);
  assert.match(cookie, /Essential only/);
  assert.match(cookie, /Manage preferences/);
  assert.match(cookie, /Accept all/);
  assert.match(email, /consent/i);
  assert.match(email, /Privacy Policy/);
  assert.match(email, /Unsubscribe/);
});

test("keeps the mobile homepage hero text before the image", () => {
  const styles = read("app/globals.css");

  assert.doesNotMatch(styles, /\.hero-image-wrap\s*{\s*order:\s*-1;/);
});

test("keeps the footer anchored cleanly at the bottom of short mobile pages", () => {
  const styles = read("app/globals.css");

  assert.match(styles, /html\s*{[^}]*background:\s*var\(--navy\);/s);
  assert.match(styles, /body\s*{[^}]*background:\s*var\(--navy\);/s);
  assert.match(styles, /main\s*{[^}]*background:\s*var\(--page-bg\);/s);
  assert.match(styles, /body\s*{[^}]*display:\s*flex;[^}]*flex-direction:\s*column;[^}]*min-height:\s*100dvh;/s);
  assert.match(styles, /main\s*{[^}]*flex:\s*1\s+0\s+auto;/s);
});

test("keeps the mobile navigation dropdown visible below the header", () => {
  const styles = read("app/globals.css");
  const header = read("components/site-header.tsx");

  assert.match(styles, /@media \(max-width: 900px\)[\s\S]*\.site-header\s*{[\s\S]*overflow:\s*visible;/);
  assert.match(styles, /\.mobile-nav-panel\s*{[\s\S]*top:\s*100%;/);
  assert.match(header, /onClick=\{\(\) => setMenuOpen\(\(o\) => !o\)\}/);
  assert.match(header, /onClick=\{\(\) => setMenuOpen\(false\)\}/);
});

test("controls the closing tagline wrap point", () => {
  const home = read("app/page.tsx");
  const styles = read("app/globals.css");

  assert.match(home, /closing-tagline-lead/);
  assert.match(home, /closing-tagline-tail/);
  assert.match(styles, /\.closing-tagline span\s*{[\s\S]*white-space:\s*nowrap;/);
});

test("embeds the live Kit Midlife Clarity Check form in the existing card", () => {
  const card = read("components/clarity-check-card.tsx");
  const kitFormPath = "components/midlife-clarity-kit-form.tsx";
  const kitForm = existsSync(join(root, kitFormPath)) ? read(kitFormPath) : "";
  const componentSource = [card, kitForm].join("\n");
  const styles = read("app/globals.css");

  assert.match(card, /Get your free Midlife Clarity Check/);
  assert.match(card, /Free\. No spam\. Delivered to your inbox\. Unsubscribe at any time\./);
  assert.match(componentSource, /sll-midlife-kit-form/);
  assert.match(componentSource, /62b878a91d/);
  assert.match(componentSource, /https:\/\/sparklifelab\.kit\.com\/62b878a91d\/index\.js/);
  assert.match(componentSource, /First name/);
  assert.match(componentSource, /Email address/);
  assert.doesNotMatch(card, /clarity-form-input/);
  assert.doesNotMatch(card, /clarity-form-submit/);
  assert.match(styles, /\.sll-midlife-kit-form\s*{/);
  assert.match(styles, /\.sll-midlife-kit-form\s+\.formkit-fields/);
  assert.match(styles, /\.sll-midlife-kit-form\s+\.formkit-input/);
  assert.match(styles, /\.sll-midlife-kit-form\s+\.formkit-submit/);
  assert.match(styles, /\.sll-midlife-kit-form\s+\.formkit-submit > span\s*{[\s\S]*display:\s*block !important;/);
  assert.match(styles, /content:\s*"\\00a0→";/);
});

test("routes Identity Lab enrollment CTAs through pricing and waitlist", () => {
  const identityLab = read("app/identity-lab/page.tsx");

  assert.match(identityLab, /const INVESTMENT_HREF = "#identity-lab-investment";/);
  assert.match(identityLab, /const WAITLIST_HREF = "\/identity-lab\/waitlist\/";/);
  assert.match(identityLab, /id="identity-lab-investment"/);
  assert.equal((identityLab.match(/href=\{INVESTMENT_HREF\}/g) ?? []).length, 3);
  assert.equal((identityLab.match(/href=\{WAITLIST_HREF\}/g) ?? []).length, 1);
  assert.doesNotMatch(identityLab, /https?:\/\/[^\s"']*kajabi/i);
});

test("keeps the Identity Lab waitlist page hidden and Kit-powered", () => {
  const waitlistPath = "app/identity-lab/waitlist/page.tsx";
  const kitFormPath = "components/identity-waitlist-kit-form.tsx";
  assert.equal(existsSync(join(root, waitlistPath)), true, `${waitlistPath} should exist`);
  assert.equal(existsSync(join(root, kitFormPath)), true, `${kitFormPath} should exist`);

  const waitlist = read(waitlistPath);
  const kitForm = read(kitFormPath);
  const styles = read("app/globals.css");
  const navigation = [
    read("components/site-header.tsx"),
    read("components/site-footer.tsx"),
    read("data/site.ts"),
  ].join("\n");

  assert.match(waitlist, /IDENTITY LAB/);
  assert.match(waitlist, /Join the waitlist for the next Identity Lab cohort/);
  assert.match(waitlist, /The Identity Lab is a guided journey for people in midlife who are ready to move from fog to grounded forward movement\./);
  assert.match(waitlist, /Registration is currently closed\. If you’d like to be the first to know when the next enrollment opens, join the waitlist below\./);
  assert.match(waitlist, /Add your name and email, and we’ll let you know as soon as registration opens again\./);
  assert.match(waitlist, /We’ll only email you about the Identity Lab and related updates\. No spam\./);
  assert.match(waitlist, /Not ready yet\? Start with the Midlife Clarity Check →/);
  assert.match(waitlist, /href="\/#clarity-check"/);
  assert.doesNotMatch(waitlist, /next\/image/);
  assert.doesNotMatch(navigation, /\/identity-lab\/waitlist\//);
  assert.match(kitForm, /sll-identity-waitlist-kit-form/);
  assert.match(kitForm, /fed36a3d05/);
  assert.match(kitForm, /https:\/\/sparklifelab\.kit\.com\/fed36a3d05\/index\.js/);
  assert.match(styles, /\.sll-identity-waitlist-kit-form\s*{/);
  assert.match(styles, /\.sll-identity-waitlist-kit-form\s+\.formkit-fields/);
  assert.match(styles, /\.sll-identity-waitlist-kit-form\s+\.formkit-input/);
  assert.match(styles, /\.sll-identity-waitlist-kit-form\s+\.formkit-submit/);
  assert.match(read("components/midlife-clarity-kit-form.tsx"), /62b878a91d/);
  assert.doesNotMatch(kitForm, /62b878a91d/);
});
