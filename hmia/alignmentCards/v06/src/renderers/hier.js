import { norm } from '../ui-core.js';
import { render as renderGrid } from './grid.js';

export function render(root, cards, categories, opts = {}) {
  root.innerHTML = '';
  const byCode = new Map();
  cards.forEach(c => (c.category || []).forEach(code => {
    if (!byCode.has(code)) byCode.set(code, []);
    byCode.get(code).push(c);
  }));

  const wrap = document.createElement('div');
  categories.forEach(cat => {
    const code = norm(cat.code).toLowerCase();
    const items = byCode.get(code) || [];
    const section = document.createElement('section');
    const h = document.createElement('h3');
    h.textContent = `${cat.name || code.toUpperCase()} (${items.length})`;
    const p = document.createElement('p');
    p.textContent = cat.description || '';
    const slot = document.createElement('div');

    h.style.cursor = 'pointer';
    h.onclick = () => {
      if (slot.childElementCount) { slot.innerHTML = ''; }
      else { renderGrid(slot, items, [cat]); }
    };

    section.append(h, p, slot);
    wrap.appendChild(section);
  });

  root.appendChild(wrap);
}
