import { DEFAULT_FIELDS } from '../schema.js';
import { norm, isNonEmpty, block, addWithRef, renderQuadSection, prettifyKey } from '../ui-core.js';
import { unknownTopLevelKeys } from '../normalizer.js';

export function render(root, cards, categories, opts = {}) {
  root.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'card-grid';
  root.appendChild(grid);

  const catIndex = new Map(
    (categories || []).filter(c => c && typeof c === 'object')
      .map(c => [norm(c.code).toLowerCase(), c])
  );

  cards.forEach(c => {
    const cardEl = document.createElement('article');
    cardEl.className = 'card';
    cardEl.setAttribute('role', 'group');
    cardEl.setAttribute('aria-label', norm(c?.name) || 'Untitled');

    const firstCode = (c.category?.[0] ?? '').toLowerCase();
    const meta = firstCode ? catIndex.get(firstCode) : null;
    if (meta?.color) cardEl.style.setProperty('--card-accent', meta.color);

    const title = document.createElement('h4');
    title.textContent = norm(c?.name) || 'Untitled';

    const body = document.createElement('div');
    body.className = 'card-body';

    if (isNonEmpty(c?.definition)) body.appendChild(block('Definition', norm(c.definition)));

    renderQuadSection(body, { title: 'Core', obj: c, fields: DEFAULT_FIELDS, onlyWhenAny: true });
    renderQuadSection(body, { title: 'Expanded Definitions', obj: c?.expand, fields: DEFAULT_FIELDS, onlyWhenAny: true });
    renderQuadSection(body, { title: 'Failure Modes', obj: c?.failureModes, fields: DEFAULT_FIELDS, labelSuffix: ' (failure)', onlyWhenAny: true });

    // Research questions (array)
    if (Array.isArray(c.researchQuestions) && c.researchQuestions.length) {
      const h5 = document.createElement('h5'); h5.textContent = 'Research Questions';
      body.appendChild(h5);
      const ul = document.createElement('ul');
      c.researchQuestions.forEach(q => { const li = document.createElement('li'); li.textContent = norm(q); ul.appendChild(li); });
      body.appendChild(ul);
    }

    // Unknown top-level fields (best-effort)
    const unknowns = unknownTopLevelKeys(c);
    if (unknowns.length) {
      const h5 = document.createElement('h5'); h5.textContent = 'Other fields';
      body.appendChild(h5);
      unknowns.sort((a, b) => a.localeCompare(b)).forEach(k => {
        const v = c[k];
        if (v == null) return;
        if (typeof v !== 'object') {
          addWithRef(body, prettifyKey(k), { [k]: v, [k + 'ref']: c[k + 'ref'] }, k, {});
        } else {
          const node = block(prettifyKey(k), '[object]');
          body.appendChild(node);
        }
      });
    }

    cardEl.append(title, body);
    grid.appendChild(cardEl);
  });
}
