// cards-grid.js  — v0.3 grid renderer for { name, definition, failureMode, example }
/**
 * cards-grid.js — v0.3
 * Render “alignment cards” in a responsive grid from an ES module deck.
 *
 * Overview
 * --------
 * - Loads a deck module that exports `cards` (required) and `categories` (optional).
 * - Deck can be loaded remotely (GitHub raw) or locally (`./default.js` fallback).
 * - Filters cards by `?category=` query parameter (comma/pipe-separated, case-insensitive).
 * - Renders each card with core fields and failure-mode examples.
 * - Robust to missing/null/empty fields; displays "no data" as a default.
 *
 * Requirements
 * ------------
 * - An element with id `card-grid-container` must exist in the DOM.
 * - Deck modules are **ESM** with top-level exports.
 * - Modern browser (optional chaining `?.`, nullish coalescing `??`, dynamic import).
 *
 * URL Parameters
 * --------------
 * - user       : string | undefined
 *               GitHub user/org path used to form the raw URL.
 *               If present, remote loading is used; if absent, load `./default.js`.
 * - file       : string | undefined
 *               Module filename (no extension). Defaults to `alignmentcards-v0`.
 * - category   : string | undefined
 *               Comma/pipe-separated list of category codes to include (case-insensitive).
 *               Example: `?category=AP,TR` or `?category=AP|TR`.
 * - style      : string | undefined
 *               Reserved for future presentation variants (currently unused).
 *
 * Remote Load URL
 * ----------------
 * https://raw.githubusercontent.com/${user}/alignment-cards/refs/heads/main/${file}.js
 *
 * Data Shapes
 * -----------
 * type Category = {
 *   code        : string;         // e.g., "AP"
 *   name        : string;         // e.g., "Alignment Principles"
 *   pathology?  : string;
 *   color?      : string;         // e.g., "#E6FFE9" (can be used to style cards)
 *   description?: string;
 * };
 *
 * type Card = {
 *   category?     : string | string[]; // code(s) (case-insensitive); normalized internally
 *   name          : string;
 *   definition?   : string;
 *   human?        : string;
 *   organizational?: string;
 *   professional? : string;
 *   machine?      : string;
 *   expand: {
 *     human, organizational, professional, machine}
 *   failureModes? : {
 *     human?        : string;
 *     organizational?: string;
 *     professional? : string;
 *     machine?      : string;
 *   };
 *   // Additional fields are preserved and ignored by the renderer.
 * };
 *
 * Rendering Details
 * -----------------
 * - Each card → <article class="card" role="group" aria-label="{name}">
 * - Sections:
 *     • Definition
 *     • Humans / Organizations / Experts / Machine
 *     • “FAILURE MODE EXAMPLES” (same four sub-labels, suffixed “(failure)”)
 * - `val()` helper trims strings and substitutes "no data" for null/undefined/empty.
 * - Category metadata is accepted but not yet used for styling (hook in place).
 *
 * Filtering Logic
 * ---------------
 * - Query `?category=` builds a Set of requested codes (lowercased).
 * - Each card’s `category` is normalized to a lowercased string[] (`__cats`).
 * - Cards are kept if **any** `__cats` intersects the requested set.
 * - If no `?category=` is provided, all cards are shown.
 *
 * Error Handling & Robustness
 * ---------------------------
 * - Missing fields: optional chaining + defaults prevent runtime errors.
 * - Missing `failureModes`: safely handled via `c?.failureModes?.x`.
 * - Remote import uses Blob URL and revokes it after import to prevent leaks.
 * - On fetch/import failure, logs error and renders an empty grid.
 *

 * Accessibility
 * -------------
 * - Cards are groups with an `aria-label` set to the card name.
 * - Section headings use semantic <h4>/<h5>.
 * - Labels are textual; no information is conveyed by color alone.
 *
 * Usage
 * -----
 * <!-- Remote deck -->
 * <!-- /page.html?user=djjr&file=alignmentcards-v0&category=AP,TR&style=futureUse -->
 * <!-- Local fallback (no user param) loads ./default.js -->
 *
 * Extension Ideas / TODO
 * -----------------------
 * - Apply category colors (e.g., set `--card-accent` from first matching category).
 * - Add a legend or filters UI using `categories`.
 * - Implement `style` modes (compact/expanded/printable).
 * 
 */

const version = '0.4';

// --- module-level helpers (reusable) ---
const DEFAULT_FIELDS = [
  { key: 'human',          label: 'Humans' },
  { key: 'organizational', label: 'Organizations' },
  { key: 'professional',   label: 'Experts' },
  { key: 'machine',        label: 'Machine' },
];

//Clean up strings and missing data
const norm = v => (v ?? '').toString().trim();

/** Build a <div class="kv">...</div> block; accepts string or Node for content  */
/** since if we might add (ref) links to the end of text snippets we send a node */
function block(label, content) {
  const wrap = document.createElement('div');
  wrap.className = 'kv'; //tweak in CSS if desired

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

/** Append a labeled block with optional (ref) link if obj[key + refSuffix] exists */
/** Long but avoids allowing weird html injections from student data               */
function addWithRef(parent, label, obj, key, { refSuffix = 'ref' } = {}) {
  /* parent is element
     label is for block()
     obj is sub-object of card object
     key is context (human, org, etc.)
     refSuffix is suffix added to property name for reference URLs
  */
  const s = norm(obj?.[key]);
  if (!s) return false;

  const node = block(label, s);
  const r = norm(obj?.[key + refSuffix]);

  if (r) {
    const valueEl = node.querySelector('.value');
    valueEl.appendChild(document.createTextNode(' ('));
    const a = document.createElement('a');
    a.href = r;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = 'ref';
    valueEl.appendChild(a);
    valueEl.appendChild(document.createTextNode(')'));
  }

  parent.appendChild(node);
  return true;
}
/** Render the 4-row section; only adds heading if any row has content (default) */
function renderQuadSection(parent, {          //DOM object we are attaching to
  title,                                      //Text title of sub-section
  obj,                                        //Sub-object with data for sub-section
  fields = DEFAULT_FIELDS,                    //Can change, e.g., { key: 'human', label: 'People' }
  labelSuffix = '',                           //For example ' (failure)' after 'Human'
  refSuffix = 'ref',                          //Expected property name suffix for reference URL strings
  onlyWhenAny = true,  // <<-- trailing comma looks weird but is OK. Skip entire section if no data
  } = {}) {
  if (!obj) return false;
  const hasAny = fields.some(f => norm(obj?.[f.key]).length > 0);
  if (onlyWhenAny && !hasAny) return false;   //onlyWhenAny prints NOTHING if no data

  const h5 = document.createElement('h5');
  h5.textContent = title;
  parent.appendChild(h5);

  fields.forEach(f => addWithRef(parent, `${f.label}${labelSuffix}`, obj, f.key, { refSuffix }));
  return true;
}


function renderCardGrid(cards, categories = []) {

  //Save for Category work later
  //process category array, make robust for variations in case


  // show version
  const pageTitle = document.getElementById('pageTitle')
  if (pageTitle) pageTitle.innerHTML = pageTitle.innerHTML + ` (v${version})`

  const host = document.getElementById('card-grid-container');
  host.innerHTML = '';

  const grid = document.createElement('div');
  grid.className = 'card-grid';
  host.appendChild(grid);

  // helper function to use chaining operator to be robust to missing properties
  const val = v => (norm(v) || 'no data');

  cards.forEach(c => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'group');
    card.setAttribute('aria-label', val(c?.name));

    //FOR LATER: colors for categories

    const title = document.createElement('h4');
    title.textContent = val(c?.name);

    const body = document.createElement('div');
    body.className = 'card-body';

    body.appendChild(block('Definition', val(c?.definition)));
    addWithRef(body, 'Humans', c, 'human');
    addWithRef(body, 'Organizations', c, 'organizational');
    addWithRef(body, 'Experts', c, 'professional');
    addWithRef(body, 'Machine', c, 'machine');

    renderQuadSection(body, {
      title: 'Expanded Definitions',
      obj: c?.expand,
      fields: DEFAULT_FIELDS,
      labelSuffix: '',
      refSuffix: 'ref',
      onlyWhenAny: true,
    });
    
    renderQuadSection(body, {
      title: 'FAILURE MODE EXAMPLES',
      obj: c?.failureModes,
      fields: DEFAULT_FIELDS,
      labelSuffix: ' (failure)',
      refSuffix: 'ref',
      onlyWhenAny: true,
    });
   

    card.appendChild(title);
    card.appendChild(body);
    grid.appendChild(card);
  });



}

window.onload = async function () {
  const params = new URLSearchParams(window.location.search);
  const userParam = params.get('user'); // GitHub user whose file we will access
  const fileParam = params.get('file'); // Name of the file
  //const catParam  = params.get('category'); // Optional category - so we show only selected "suits"

  // --- Multi-category parsing: ?category=AP,TR,XYZ (case-insensitive) ---
  // Accept commas or pipes as separators; ignore blanks. No category means ALL.
  const catParam = params.get('category') || '';
  const categorySet = new Set(
    catParam
      .split(/[,|]/)
      .map(s => s.trim().toLowerCase())
      .filter(Boolean)
  );

  // --- Card style parameter for future development allowing different presentation modes
  const styleParam = params.get('style') || '';
  
  // Use URL parameters or defaults if missing
  const user = userParam || 'djjr';
  const file = fileParam || 'alignmentcards-v0';

  const dataURL = userParam ? `https://raw.githubusercontent.com/${userParam}/alignment-cards/refs/heads/main/${file}.js` : null;

  async function loadDeck() {
    if (!dataURL) {
      // local fallback—expects: export const cards = [...]
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
      return { cards: [] , categories: [] };
    }
  }

  const { cards, categories } = await loadDeck();

  // Normalize each card's category to an array of lowercase strings
  const normalized = cards.map(c => {
    const cats = c.category == null
      ? []
      : Array.isArray(c.category)
        ? c.category
        : [c.category];
    const lcCats = cats.map(x => String(x).trim().toLowerCase()).filter(Boolean);
    return { ...c, __cats: lcCats };
  });

  // If categories provided, keep cards that match ANY provided category; else keep all.
  const filtered = categorySet.size
    ? normalized.filter(c => c.__cats.some(cat => categorySet.has(cat)))
    : normalized;



  renderCardGrid(filtered, categories);
};
