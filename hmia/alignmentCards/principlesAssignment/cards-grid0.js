// cards-grid.js  — v0.1 grid renderer for { name, definition, failureMode, example }

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
    // body.appendChild(block('Failure Mode', c.failureMode));
    // body.appendChild(block('Example', c.example));
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
  const userParam = params.get('user'); // e.g., Org/repo/branch/path/to/file.js
  //const deckURL = userParam ? `https://raw.githubusercontent.com/${userParam}` : null;
  const deckURL = userParam ? `https://raw.githubusercontent.com/${userParam}/alignment-cards/refs/heads/main/alignmentcards-v0.js` : null;

  async function loadDeck() {
    if (!deckURL) {
      // local fallback—expects: export const cards = [...]
      const module = await import('./default.js');
      return { cards: module.cards || [] };
    }
    try {
      const resp = await fetch(deckURL);
      const code = await resp.text();
      const blobURL = URL.createObjectURL(new Blob([code], { type: 'application/javascript' }));
      const mod = await import(blobURL);
      return { cards: mod.cards || [] };
    } catch (e) {
      console.error('Failed to load deck:', e);
      return { cards: [] };
    }
  }

  const { cards } = await loadDeck();
  renderCardGrid(cards);
};
