import assert from "node:assert/strict";
import test from "node:test";
import {
  LEGACY_PREFERENCE_STORAGE_KEY,
  PREFERENCE_SCHEMA_VERSION,
  PREFERENCE_STORAGE_KEY,
  createPreferenceRecord,
  loadCookiePreferences,
  parsePreferenceRecord,
  saveCookiePreferences,
} from "../lib/cookie-preferences.mjs";

class MemoryStorage {
  constructor(initial = {}) {
    this.values = new Map(Object.entries(initial));
  }

  getItem(key) {
    return this.values.get(key) ?? null;
  }

  setItem(key, value) {
    this.values.set(key, String(value));
  }

  removeItem(key) {
    this.values.delete(key);
  }
}

const NOW = new Date("2026-07-19T12:00:00.000Z");

test("returns no preference for a fresh visitor", () => {
  assert.equal(loadCookiePreferences(new MemoryStorage(), NOW), null);
});

test("accepts a valid current preference record", () => {
  const record = createPreferenceRecord(NOW);
  const storage = new MemoryStorage({
    [PREFERENCE_STORAGE_KEY]: JSON.stringify(record),
  });

  assert.deepEqual(loadCookiePreferences(storage, NOW), record);
});

test("rejects an expired preference record", () => {
  const record = createPreferenceRecord(new Date("2025-01-15T12:00:00.000Z"));
  assert.equal(parsePreferenceRecord(JSON.stringify(record), NOW), null);
});

test("rejects corrupted JSON", () => {
  assert.equal(parsePreferenceRecord("{not-json", NOW), null);
});

test("rejects an invalid data shape", () => {
  const invalid = {
    version: PREFERENCE_SCHEMA_VERSION,
    essential: false,
    updatedAt: NOW.toISOString(),
    expiresAt: "2027-01-19T12:00:00.000Z",
  };
  assert.equal(parsePreferenceRecord(JSON.stringify(invalid), NOW), null);
});

test("rejects unexpected tracking or personal-data fields", () => {
  const invalid = {
    ...createPreferenceRecord(NOW),
    lastVisitedUrl: "https://example.com/private-page",
  };
  assert.equal(parsePreferenceRecord(JSON.stringify(invalid), NOW), null);
});

test("rejects unsupported schema versions", () => {
  const unsupported = {
    version: 2,
    essential: true,
    updatedAt: NOW.toISOString(),
    expiresAt: "2027-01-19T12:00:00.000Z",
  };
  assert.equal(parsePreferenceRecord(JSON.stringify(unsupported), NOW), null);
});

test("migrates the former SparkLifeLab preference key and removes it after writing", () => {
  const storage = new MemoryStorage({
    [LEGACY_PREFERENCE_STORAGE_KEY]: JSON.stringify({
      mode: "essential",
      analytics: false,
      marketing: false,
    }),
  });

  const migrated = loadCookiePreferences(storage, NOW);
  assert.deepEqual(migrated, createPreferenceRecord(NOW));
  assert.equal(storage.getItem(LEGACY_PREFERENCE_STORAGE_KEY), null);
  assert.equal(storage.getItem(PREFERENCE_STORAGE_KEY), JSON.stringify(migrated));
  assert.equal(storage.values.has("ckid"), false);
});

test("saves and reloads a preference without tracking fields", () => {
  const storage = new MemoryStorage();
  const saved = saveCookiePreferences(storage, NOW);
  const reloaded = loadCookiePreferences(storage, NOW);

  assert.deepEqual(reloaded, saved);
  assert.deepEqual(Object.keys(saved), ["version", "essential", "updatedAt", "expiresAt"]);
});

test("uses a six-calendar-month preference lifetime", () => {
  const record = createPreferenceRecord(NOW);
  assert.equal(record.updatedAt, "2026-07-19T12:00:00.000Z");
  assert.equal(record.expiresAt, "2027-01-19T12:00:00.000Z");
});
