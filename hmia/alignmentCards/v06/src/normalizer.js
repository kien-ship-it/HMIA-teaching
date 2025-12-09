import { CARD_FIELD_MAP, ROLE_KEY_MAP, CANON_QUAD, REF_SUFFIX, KNOWN_TOP_KEYS } from './schema.js';
import { norm, isNonEmpty, toArray } from './ui-core.js';

export function normalizeDeck({ cards = [], categories = [] } = {}) {
  return {
    categories: Array.isArray(categories) ? categories.map(normalizeCategory) : [],
    cards: toArray(cards).map(normalizeCard),
  };
}

export function normalizeCategory(raw) {
  if (!raw || typeof raw !== 'object') return { code: '', name: '', description: '', __raw: raw };
  const code = norm(raw.code).toLowerCase();
  return {
    code,
    name: norm(raw.name),
    description: norm(raw.description),
    color: norm(raw.color),
    pathology: norm(raw.pathology),
    __raw: raw
  };
}

/** Rewrite keys inside a quad object (and carry over *ref siblings) */
export function normalizeRoleBlock(obj, { refSuffix = REF_SUFFIX } = {}) {
  if (!obj || typeof obj !== 'object') return obj;
  const out = {};
  for (const [k, v] of Object.entries(obj)) {
    const key = String(k).toLowerCase();
    const canon = ROLE_KEY_MAP[key] || k;
    if (isNonEmpty(v) && out[canon] == null) out[canon] = v;
    const rkey = k + refSuffix;
    if (Object.prototype.hasOwnProperty.call(obj, rkey)) {
      const refVal = obj[rkey];
      if (isNonEmpty(refVal) && out[canon + refSuffix] == null) {
        out[canon + refSuffix] = refVal;
      }
    }
  }
  return out;
}

/** Move top-level alias props into canonical quad keys, carrying ...ref, then delete aliases. */
export function applyTopLevelRoleAliases(out, { refSuffix = REF_SUFFIX } = {}) {
  const lcIndex = new Map(Object.keys(out).map(k => [k.toLowerCase(), k]));
  for (const [alias, canon] of Object.entries(ROLE_KEY_MAP)) {
    if (!CANON_QUAD.has(canon)) continue;
    if (alias === canon) continue; // process only true aliases

    const aliasKey = lcIndex.get(alias);
    if (!aliasKey) continue;

    const aliasVal = out[aliasKey];
    if (isNonEmpty(aliasVal) && !isNonEmpty(out[canon])) {
      out[canon] = aliasVal;
    }
    const aliasRefKey = lcIndex.get(alias + refSuffix);
    if (aliasRefKey) {
      const canonRefKey = canon + refSuffix;
      if (isNonEmpty(out[aliasRefKey]) && !isNonEmpty(out[canonRefKey])) {
        out[canonRefKey] = out[aliasRefKey];
      }
    }
    delete out[aliasKey];
    if (aliasRefKey) delete out[aliasRefKey];
    lcIndex.delete(alias);
    lcIndex.delete(alias + refSuffix);
  }
}

export function normalizeCard(raw) {
  if (!raw || typeof raw !== 'object') return { name: 'Untitled card', category: [], __raw: raw };

  // 1) remap known top-level field aliases → canonical
  const out = {};
  for (const [k, v] of Object.entries(raw)) {
    const canon = CARD_FIELD_MAP[k] || k;
    out[canon] = v;
  }

  // 2) basics
  out.name = isNonEmpty(out.name) ? norm(out.name) : 'Untitled card';

  // 3) categories normalized → lower-cased string[]
  const cats = toArray(out.category).map(x => norm(String(x)).toLowerCase()).filter(Boolean);
  out.__cats = cats;
  out.category = cats;

  // 4) coerce expand/failureModes to objects if needed
  if (out.expand && typeof out.expand !== 'object') out.expand = { note: norm(out.expand) };
  if (out.failureModes && typeof out.failureModes !== 'object') out.failureModes = { note: norm(out.failureModes) };

  // 5) normalize role keys inside nested blocks
  out.expand       = normalizeRoleBlock(out.expand);
  out.failureModes = normalizeRoleBlock(out.failureModes);

  // 6) fold top-level role aliases (people -> human; professionals -> professional; etc.)
  applyTopLevelRoleAliases(out);

  // 7) done
  out.__raw = raw;
  return out;
}

/** Unknown fields helper (used by grid renderer) */
export function unknownTopLevelKeys(obj, { refSuffix = REF_SUFFIX } = {}) {
  return Object.keys(obj)
    .filter(k => !KNOWN_TOP_KEYS.has(k))
    .filter(k => !k.toLowerCase().endsWith(refSuffix));
}
