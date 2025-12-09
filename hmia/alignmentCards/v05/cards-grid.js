// cards-grid.js — v0.5 (adapter + recursive fallback + category color hook)

const version = '0.5';

/* ========== Canonical shape & utilities ========== */

const DEFAULT_FIELDS = [
  { key: 'human',          label: 'Humans' },
  { key: 'organizational', label: 'Organizations' },
  { key: 'professional',   label: 'Experts' },
  { key: 'machine',        label: 'Machine' },
];

// Accept student variants and map → canonical keys
const CARD_FIELD_MAP = {
  // top-level
  title: 'name',
  label: 'name',
  desc: 'definition',
  definition: 'definition',
  category: 'category',
  categories: 'category',
  expand: 'expand',
  expanded: 'expand',
  failures: 'failureModes',
  failureModes: 'failureModes',
};

const norm = v => (v ?? '').toString().trim();
const isNonEmpty = v => norm(v).length > 0;
const isHttpUrl = s => /^https?:\/\//i.test(norm(s));
const toArray = v => Array.isArray(v) ? v : (v == null ? [] : [v]);

/* ========== Small DOM helpers ========== */

function block(label, content) {
  const wrap = document.createElement('div');
  wrap.className = 'kv'; // style in CSS

  const l = document.createElement('span');
  l.className = 'label';
  l.textContent = label;

  const v = document.createElement('div');
  v.className = 'value';

  if (content instanceof Node) v.appendChild(content);
  else v.textContent = (content ?? '').toString();

  wrap.appendChild(l);
  wrap.appendChild(v);
  return wrap;
}

function addWithRef(parent, label, obj, key, { refSuffix = 'ref', placeholder } = {}) {
  /* parent: Element; obj: object with key/value; refSuffix: e.g., 'ref' for 'human' + 'humanref' */
  const s = norm(obj?.[key]);
  const has = isNonEmpty(s);
  if (!has && placeholder == null) return false;

  const node = block(label, has ? s : String(placeholder ?? ''));
  const r = norm(obj?.[key + refSuffix]);

  if (isHttpUrl(r) && has) {
    const valueEl = node.querySelector('.value');
    valueEl.append(' (');
    const a = document.createElement('a');
    a.href = r; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = 'ref';
    valueEl.appendChild(a);
    valueEl.append(')');
  }

  parent.appendChild(node);
  return true;
}

function renderQuadSection(parent, {
  title,
  obj,
  fields = DEFAULT_FIELDS,
  labelSuffix = '',
  refSuffix = 'ref',
  onlyWhenAny = true,
  placeholder, // optional: show placeholders instead of skipping rows
} = {}) {
  if (!obj || typeof obj !== 'object') return false;
  const hasAny = fields.some(f => isNonEmpty(obj?.[f.key]));
  if (onlyWhenAny && !hasAny) return false;

  const h5 = document.createElement('h5');
  h5.textContent = title;
  parent.appendChild(h5);

  fields.forEach(f => {
    addWithRef(parent, `${f.label}${labelSuffix}`, obj, f.key, { refSuffix, placeholder });
  });
  return true;
}

/* ========== Adapter: normalize deck & cards ========== */

function normalizeDeck({ cards = [], categories = [] } = {}) {
  return {
    categories: Array.isArray(categories) ? categories : [],
    cards: toArray(cards).map(normalizeCard),
  };
}

function normalizeCard(raw) {
  if (!raw || typeof raw !== 'object') return { name: 'Untitled card', category: [], __raw: raw };

  // 1) remap known aliases → canonical
  const out = {};
  for (const [k, v] of Object.entries(raw)) {
    const canon = CARD_FIELD_MAP[k] || k; // keep unknowns as-is
    out[canon] = v;
  }

  // 2) fill basics
  out.name = isNonEmpty(out.name) ? norm(out.name) : 'Untitled card';

  // 3) normalize categories to lowercased string[]
  const cats = toArray(out.category).map(x => norm(String(x)).toLowerCase()).filter(Boolean);
  out.__cats = cats;
  // keep normalized version for display/logic
  out.category = cats;

  // 4) coerce expand/failureModes into objects if present but not objects
  if (out.expand && typeof out.expand !== 'object') out.expand = { note: norm(out.expand) };
  if (out.failureModes && typeof out.failureModes !== 'object') out.failureModes = { note: norm(out.failureModes) };

  // keep original for fallback rendering decisions
  out.__raw = raw;
  return out;
}

/* ========== Recursive fallback for unknown fields ========== */

const KNOWN_TOP_KEYS = new Set([
  'name','category','__cats','definition','human','organizational','professional','machine','expand','failureModes','__raw'
]);

function renderUnknownFields(parent, obj, { title = 'Other fields', refSuffix = 'ref' } = {}) {
  if (!obj || typeof obj !== 'object') return;

  // Collect unknown top-level keys (excluding *_ref and known)
  const keys = Object.keys(obj)
    .filter(k => !KNOWN_TOP_KEYS.has(k) && !k.toLowerCase().endsWith(refSuffix));

  if (!keys.length) return;

  const h5 = document.createElement('h5');
  h5.textContent = title;
  parent.appendChild(h5);

  // sort for stability
  keys.sort((a,b) => a.localeCompare(b));

  keys.forEach(k => {
    const v = obj[k];
    if (v == null) return;

    // Primitive-ish values => show with optional link
    if (typeof v !== 'object') {
      addWithRef(parent, prettifyKey(k), { [k]: v, [k + refSuffix]: obj[k + refSuffix] }, k, { refSuffix });
      return;
    }

    // Arrays => list items or recurse into objects
    if (Array.isArray(v)) {
      if (v.length === 0) return;
      const section = document.createElement('div');
      section.className = 'kv';
      const l = document.createElement('span'); l.className = 'label'; l.textContent = prettifyKey(k);
      const val = document.createElement('div'); val.className = 'value';
      const ul = document.createElement('ul');
      v.forEach(item => {
        const li = document.createElement('li');
        if (item && typeof item === 'object') {
          li.appendChild(renderInlineObject(item, refSuffix));
        } else {
          li.textContent = norm(item);
        }
        ul.appendChild(li);
      });
      val.appendChild(ul);
      section.appendChild(l); section.appendChild(val);
      parent.appendChild(section);
      return;
    }

    // Objects => recurse with a subheading
    const subTitle = document.createElement('h6');
    subTitle.textContent = prettifyKey(k);
    parent.appendChild(subTitle);

    // Render object as kv pairs (with ref handling)
    const subObj = v;
    const subKeys = Object.keys(subObj)
      .filter(sk => !sk.toLowerCase().endsWith(refSuffix))
      .sort((a,b) => a.localeCompare(b));

    subKeys.forEach(sk => {
      const sv = subObj[sk];
      if (sv && typeof sv === 'object') {
        const node = block(prettifyKey(sk), renderInlineObject(sv, refSuffix));
        parent.appendChild(node);
      } else {
        addWithRef(parent, prettifyKey(sk), subObj, sk, { refSuffix });
      }
    });
  });
}

function renderInlineObject(o, refSuffix = 'ref') {
  const frag = document.createDocumentFragment();
  const entries = Object.keys(o)
    .filter(k => !k.toLowerCase().endsWith(refSuffix))
    .map(k => [prettifyKey(k), o[k], o[k + refSuffix]])
    .filter(([_, v]) => isNonEmpty(v));

  if (!entries.length) { frag.append('(object)'); return frag; }

  entries.forEach(([k, v, ref], idx) => {
    if (idx) frag.append('; ');
    frag.append(`${k}: ${norm(v)}`);
    if (isHttpUrl(ref)) {
      frag.append(' (');
      const a = document.createElement('a');
      a.href = ref; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.textContent = 'ref';
      frag.append(a);
      frag.append(')');
    }
  });
  return frag;
}

function prettifyKey(k) {
  return k.replace(/([A-Z])/g, ' $1') // camelCase → camel Case
          .replace(/_/g, ' ')
          .replace(/\s+/g, ' ')
          .replace(/\bref\b/i, 'ref')
          .replace(/^\w/, c => c.toUpperCase());
}

/* ========== Main renderer ========== */

function renderCardGrid(rawCards, rawCategories = []) {
  // Show version
  const pageTitle = document.getElementById('pageTitle');
  if (pageTitle) pageTitle.textContent += ` (v${version})`;

  // Normalize once (adapter)
  const { cards, categories } = normalizeDeck({ cards: rawCards, categories: rawCategories });

  // Build a quick category index for color hook
  const catIndex = new Map(
    categories
      .filter(c => c && typeof c === 'object')
      .map(c => [norm(c.code).toLowerCase(), c])
  );

  const host = document.getElementById('card-grid-container');
  host.innerHTML = '';

  const grid = document.createElement('div');
  grid.className = 'card-grid';
  host.appendChild(grid);

  const val = v => (norm(v) || 'no data');

  cards.forEach(c => {
    const cardEl = document.createElement('article');
    cardEl.className = 'card';
    cardEl.setAttribute('role', 'group');
    cardEl.setAttribute('aria-label', val(c?.name));

    // category color hook (first category wins)
    const firstCode = (c.category?.[0] ?? '').toLowerCase();
    const meta = firstCode ? catIndex.get(firstCode) : null;
    if (meta?.color) {
      cardEl.style.setProperty('--card-accent', meta.color);
    }

    const title = document.createElement('h4');
    title.textContent = val(c?.name);

    const body = document.createElement('div');
    body.className = 'card-body';

    // Known sections (pretty)
    if (isNonEmpty(c?.definition)) {
      body.appendChild(block('Definition', norm(c.definition)));
    }

    // Core quad (top-level)
    renderQuadSection(body, {
      title: 'Core',
      obj: c, // reads human/organizational/professional/machine at top level
      onlyWhenAny: true,
    });

    // Expanded (adapter maps expanded→expand)
    renderQuadSection(body, {
      title: 'Expanded Definitions',
      obj: c?.expand,
      onlyWhenAny: true,
    });

    // Failure modes
    renderQuadSection(body, {
      title: 'Failure Modes',
      obj: c?.failureModes,
      labelSuffix: ' (failure)',
      onlyWhenAny: true,
    });

    // Fallback for any other student-provided data
    renderUnknownFields(body, c);

    cardEl.appendChild(title);
    cardEl.appendChild(body);
    grid.appendChild(cardEl);
  });
}

/* ========== Loader (unchanged except for calling our renderer) ========== */

window.onload = async function () {
  const params = new URLSearchParams(window.location.search);
  const userParam = params.get('user'); // GitHub user/org
  const fileParam = params.get('file'); // Module name (no .js)

  // --- Multi-category parsing: ?category=AP,TR,XYZ (case-insensitive) ---
  const catParam = params.get('category') || '';
  const categorySet = new Set(
    catParam
      .split(/[,|]/)
      .map(s => s.trim().toLowerCase())
      .filter(Boolean)
  );

  // --- Card style parameter (future)
  const styleParam = params.get('style') || '';

  // Use URL parameters or defaults if missing
  const user = userParam || 'djjr';
  const file = fileParam || 'alignmentcards-v0';

  const dataURL = userParam
    ? `https://raw.githubusercontent.com/${userParam}/alignment-cards/refs/heads/main/${file}.js`
    : null;

  async function loadDeck() {
    if (!dataURL) {
      // local fallback—expects: export const cards = [...] and categories = [...]
      const module = await import('./default.js');
      return {
        cards: module.cards || [],
        categories: module.categories || []
      };
    }
    try {
      const resp = await fetch(dataURL);
      const code = await resp.text();
      const blobURL = URL.createObjectURL(new Blob([code], { type: 'application/javascript' }));
      const mod = await import(blobURL);
      URL.revokeObjectURL(blobURL); // Cleanup
      return {
        cards: mod.cards || [],
        categories: mod.categories || []
      };
    } catch (e) {
      console.error('Failed to load deck:', e);
      return { cards: [], categories: [] };
    }
  }

  const { cards, categories } = await loadDeck();

  // Normalize each card's category to an array of lowercase strings (for filtering here)
  const normalized = (Array.isArray(cards) ? cards : []).map(c => {
    const cats = c?.category == null ? [] : (Array.isArray(c.category) ? c.category : [c.category]);
    const lcCats = cats.map(x => String(x).trim().toLowerCase()).filter(Boolean);
    return { ...c, __cats: lcCats };
  });

  // Filter by ?category= if provided
  const filtered = categorySet.size
    ? normalized.filter(c => (c.__cats || []).some(cat => categorySet.has(cat)))
    : normalized;

  // Render (the renderer will do its own light normalization/adapting)
  renderCardGrid(filtered, categories);
};
