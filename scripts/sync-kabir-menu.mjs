import { writeFile, mkdir } from "node:fs/promises";

const BASE_URL = "https://www.lokal-kabir.de/";

const CATEGORY_SELECT_REGEX =
  /<option value='\?Indisch Essen=([^']+)&seite=SpeiseN'[^>]*>([^<]+)<\/option>/g;

const ITEM_REGEX =
  /<table onclick=\"ZuWk\('([^']*)','([^']*)','([^']*)'\)\"; class=ho1 width='100%' cellspacing=0 cellpadding=0\s*><tr><td colspan=3><b>[^<]+<\/b><div style='float:right;' align=right><button>Zum Warenkorb <img width=16 src=img\/warenkorb.png> ([^<]+)<\/button><\/div><\/tr><tr><td colspan=3>(.*?)<div style='float:right;' align=right class=sm2>(.*?)<\/div><\/tr>/gs;

const HEADING_REGEX =
  /<td colspan=2 align=center><h1 style='color:#aa0000'>(.*?)<\/h1><\/td>/;

const INFO_REGEX =
  /<b style='color:#aa0000'><h3>(.*?)<\/h3><\/b><h4 style='color:#bb0000'>(.*?)<\/h4>/gs;

const CATEGORY_ORDER = [
  "Mittagstisch",
  "Suppen",
  "Empfehlung des Hauses",
  "Thalis",
  "Getränke",
  "Vorspeisen-Salate",
  "Biryani-Reis Spezialitäten",
  "Tandoor",
  "Fisch",
  "Curry Spezialitäten",
  "Vegetarische Spezialitäten",
  "Vegan",
  "Vegane Spezialitäten",
  "Beilagen",
  "Extra Sauce",
  "DESSERT",
  "Menü",
];

function encodeLatin1Query(params) {
  const entries = Object.entries(params).map(([key, value]) => {
    const encodedKey = latin1PercentEncode(key);
    const encodedValue = latin1PercentEncode(value);
    return `${encodedKey}=${encodedValue}`;
  });

  return entries.join("&");
}

function latin1PercentEncode(value) {
  const bytes = Buffer.from(value, "latin1");

  return [...bytes]
    .map((byte) => {
      const isAlphaNum =
        (byte >= 48 && byte <= 57) ||
        (byte >= 65 && byte <= 90) ||
        (byte >= 97 && byte <= 122);
      const isUnreserved = [45, 46, 95, 126].includes(byte);

      return isAlphaNum || isUnreserved
        ? String.fromCharCode(byte)
        : `%${byte.toString(16).toUpperCase().padStart(2, "0")}`;
    })
    .join("");
}

function decodeLegacyHtml(buffer) {
  return buffer.toString("latin1");
}

function cleanText(input, separator = " ") {
  return decodeEntities(
    input
      .replace(/<br\s*\/?>/gi, separator)
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function decodeEntities(input) {
  return input
    .replace(/&uuml;/g, "ü")
    .replace(/&Uuml;/g, "Ü")
    .replace(/&ouml;/g, "ö")
    .replace(/&Ouml;/g, "Ö")
    .replace(/&auml;/g, "ä")
    .replace(/&Auml;/g, "Ä")
    .replace(/&szlig;/g, "ß")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&euro;/g, "€");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function fetchPage(query) {
  const response = await fetch(`${BASE_URL}?${encodeLatin1Query(query)}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch ${response.url}: ${response.status}`);
  }

  return decodeLegacyHtml(Buffer.from(await response.arrayBuffer()));
}

async function main() {
  const categorySource = await fetchPage({ seite: "SpeiseN" });
  const seenLabels = new Set();
  const discoveredCategories = [];

  for (const match of categorySource.matchAll(CATEGORY_SELECT_REGEX)) {
    const [, rawCategory, label] = match;

    if (seenLabels.has(label)) continue;
    if (label === "Optionen") continue;

    seenLabels.add(label);
    discoveredCategories.push({ rawCategory, label });
  }

  const categoryMap = new Map(discoveredCategories.map((item) => [item.label, item]));
  const ordered = CATEGORY_ORDER.map((label) => categoryMap.get(label)).filter(Boolean);

  const categories = [];

  for (const category of ordered) {
    const html = await fetchPage({
      seite: "SpeiseN",
      "Indisch Essen": category.rawCategory,
    });

    const headingMatch = html.match(HEADING_REGEX);
    const infoBlocks = [...html.matchAll(INFO_REGEX)]
      .map((match) => ({
        title: cleanText(match[1]),
        text: cleanText(match[2], " / "),
      }))
      .filter((block) => block.title || block.text);

    const items = [...html.matchAll(ITEM_REGEX)].map((match) => ({
      legacyId: match[1],
      name: cleanText(match[2]),
      price: decodeEntities(match[4].replace("", "€")).trim(),
      description: cleanText(match[5], " / "),
      allergens: cleanText(match[6]),
      futureOrderable: true,
    }));

    categories.push({
      slug: slugify(category.label),
      label: category.label,
      heading: headingMatch ? cleanText(headingMatch[1]) : category.label,
      infoBlocks,
      items,
    });
  }

  await mkdir("data", { recursive: true });
  await writeFile("data/kabir-menu.json", JSON.stringify(categories, null, 2));

  console.log(
    `Wrote ${categories.length} categories and ${categories.reduce(
      (sum, category) => sum + category.items.length,
      0,
    )} items.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
