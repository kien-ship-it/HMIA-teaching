// cards-grid.js - v0.3 multi-category filter + default user "djjr"

function renderCardGrid(cards) {
  const host = document.getElementById('card-grid-container');
  host.innerHTML = '';

  const grid = document.createElement('div');
  grid.className = 'card-grid';
  host.appendChild(grid);

  cards.forEach(c => {
    const card = document.createElement('article');
    card.className = 'card';
    card.setAttribute('role', 'group');
    card.setAttribute('aria-label', c.name);

    const title = document.createElement('h4');
    title.textContent = c.name;

    const body = document.createElement('div');
    body.className = 'card-body';

    body.appendChild(block('Definition', c.definition));
    body.appendChild(block('Humans', c.human));
    body.appendChild(block('Organizations', c.organizational));
    body.appendChild(block('Experts', c.professional));
    body.appendChild(block('Machine', c.machine));

    const sectionTitle = document.createElement('h5');
    sectionTitle.textContent = 'FAILURE MODE EXAMPLES';
    body.appendChild(sectionTitle);

    body.appendChild(block('Humans', c.failureModes.human));
    body.appendChild(block('Organizations', c.failureModes.organizational));
    body.appendChild(block('Experts', c.failureModes.professional));
    body.appendChild(block('Machine', c.failureModes.machine));

    card.appendChild(title);
    card.appendChild(body);
    grid.appendChild(card);
  });

  function block(label, text) {
    const wrap = document.createElement('div');
    wrap.className = 'kv';

    const l = document.createElement('span');
    l.className = 'label';
    l.textContent = label;

    const v = document.createElement('div');
    v.className = 'value';
    v.textContent = text || '';

    wrap.appendChild(l);
    wrap.appendChild(v);
    return wrap;
  }
}

window.onload = async function () {
  const params = new URLSearchParams(window.location.search);

  // --- Default user to "djjr" if not supplied ---
  const ghUser = (params.get('user') || 'djjr').trim();

  // --- Multi-category parsing: ?category=AP,TR,XYZ (case-insensitive) ---
  // Accept commas or pipes as separators; ignore blanks.
  const catParam = params.get('category') || '';
  const categorySet = new Set(
    catParam
      .split(/[,|]/)
      .map(s => s.trim().toLowerCase())
      .filter(Boolean)
  );

  const deckURL = `https://raw.githubusercontent.com/${ghUser}/alignment-cards/refs/heads/main/alignmentcards-v0.js`;

  async function loadDeck() {
    try {
      const resp = await fetch(deckURL);
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
      const code = await resp.text();
      const blobURL = URL.createObjectURL(new Blob([code], { type: 'application/javascript' }));
      const mod = await import(blobURL);
      return { cards: mod.cards || [] };
    } catch (e) {
      console.error('Failed to load deck:', e);
      // local fallback—expects: export const cards = [...]
      try {
        const module = await import('./default.js');
        return { cards: module.cards || [] };
      } catch {
        return { cards: [] };
      }
    }
  }

  const { cards } = await loadDeck();

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

  renderCardGrid(filtered);
};
