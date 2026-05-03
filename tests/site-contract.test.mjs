import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";

const root = process.cwd();

const routes = [
  "app/page.tsx",
  "app/clarity-check/page.tsx",
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
