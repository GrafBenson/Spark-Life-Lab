export const PREFERENCE_STORAGE_KEY = "sll_cookie_preferences";
export const LEGACY_PREFERENCE_STORAGE_KEY = "sparklifelab-cookie-consent";
export const PREFERENCE_SCHEMA_VERSION = 1;

/**
 * @typedef {object} CookiePreferenceRecord
 * @property {1} version
 * @property {true} essential
 * @property {string} updatedAt
 * @property {string} expiresAt
 */

/**
 * @typedef {Pick<Storage, "getItem" | "setItem" | "removeItem">} PreferenceStorage
 */

/**
 * @param {Date} updatedAt
 * @returns {CookiePreferenceRecord}
 */
export function createPreferenceRecord(updatedAt = new Date()) {
  const expiresAt = new Date(updatedAt);
  expiresAt.setUTCMonth(expiresAt.getUTCMonth() + 6);

  return {
    version: PREFERENCE_SCHEMA_VERSION,
    essential: true,
    updatedAt: updatedAt.toISOString(),
    expiresAt: expiresAt.toISOString(),
  };
}

/**
 * @param {unknown} value
 * @returns {value is CookiePreferenceRecord}
 */
export function isPreferenceRecord(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const record = /** @type {Record<string, unknown>} */ (value);
  const recordKeys = Object.keys(record).sort();
  const expectedKeys = ["essential", "expiresAt", "updatedAt", "version"];
  if (
    recordKeys.length !== expectedKeys.length ||
    recordKeys.some((key, index) => key !== expectedKeys[index]) ||
    record.version !== PREFERENCE_SCHEMA_VERSION ||
    record.essential !== true ||
    typeof record.updatedAt !== "string" ||
    typeof record.expiresAt !== "string"
  ) {
    return false;
  }

  const updatedAt = Date.parse(record.updatedAt);
  const expiresAt = Date.parse(record.expiresAt);

  return (
    Number.isFinite(updatedAt) &&
    Number.isFinite(expiresAt) &&
    new Date(updatedAt).toISOString() === record.updatedAt &&
    new Date(expiresAt).toISOString() === record.expiresAt &&
    expiresAt > updatedAt
  );
}

/**
 * @param {string | null} rawValue
 * @param {Date} now
 * @returns {CookiePreferenceRecord | null}
 */
export function parsePreferenceRecord(rawValue, now = new Date()) {
  if (!rawValue) {
    return null;
  }

  try {
    const parsed = JSON.parse(rawValue);
    if (!isPreferenceRecord(parsed) || Date.parse(parsed.expiresAt) <= now.getTime()) {
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

/**
 * @param {string | null} rawValue
 * @returns {boolean}
 */
export function isValidLegacyPreference(rawValue) {
  if (!rawValue) {
    return false;
  }

  try {
    const parsed = JSON.parse(rawValue);
    return (
      parsed !== null &&
      typeof parsed === "object" &&
      !Array.isArray(parsed) &&
      ["essential", "all", "custom"].includes(parsed.mode) &&
      typeof parsed.analytics === "boolean" &&
      typeof parsed.marketing === "boolean"
    );
  } catch {
    return false;
  }
}

/**
 * Reads the current SparkLifeLab preference record and migrates the former
 * SparkLifeLab key when possible. This function intentionally never reads or
 * modifies Kit- or Cloudflare-controlled storage.
 *
 * @param {PreferenceStorage} storage
 * @param {Date} now
 * @returns {CookiePreferenceRecord | null}
 */
export function loadCookiePreferences(storage, now = new Date()) {
  const current = parsePreferenceRecord(storage.getItem(PREFERENCE_STORAGE_KEY), now);

  if (current) {
    if (storage.getItem(LEGACY_PREFERENCE_STORAGE_KEY) !== null) {
      storage.removeItem(LEGACY_PREFERENCE_STORAGE_KEY);
    }
    return current;
  }

  const legacy = storage.getItem(LEGACY_PREFERENCE_STORAGE_KEY);
  if (!isValidLegacyPreference(legacy)) {
    return null;
  }

  const migrated = createPreferenceRecord(now);
  storage.setItem(PREFERENCE_STORAGE_KEY, JSON.stringify(migrated));
  storage.removeItem(LEGACY_PREFERENCE_STORAGE_KEY);
  return migrated;
}

/**
 * @param {PreferenceStorage} storage
 * @param {Date} now
 * @returns {CookiePreferenceRecord}
 */
export function saveCookiePreferences(storage, now = new Date()) {
  const record = createPreferenceRecord(now);
  storage.setItem(PREFERENCE_STORAGE_KEY, JSON.stringify(record));
  storage.removeItem(LEGACY_PREFERENCE_STORAGE_KEY);
  return record;
}
