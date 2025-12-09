import { DEFAULT_FIELDS } from '../schema.js';
import { norm } from '../ui-core.js';

export function render(root, cards, categories, opts = {}) {
  console.log('Styling output as a table.')
  root.innerHTML = '';
  const table = document.createElement('table');
  table.style.width = '100%';
  table.style.borderCollapse = 'collapse';

  const head = document.createElement('thead');
  const hr = document.createElement('tr');
  ['Name', 'Definition', ...DEFAULT_FIELDS.map(f => f.label)].flat().forEach(h => {
    const th = document.createElement('th');
    th.textContent = h; th.style.textAlign = 'left'; th.style.borderBottom = '1px solid #ccc'; th.style.padding = '6px';
    hr.appendChild(th);
  });
  head.appendChild(hr);

  const body = document.createElement('tbody');
  cards.forEach(c => {
    const tr = document.createElement('tr');
    const cells = [
      norm(c.name),
      norm(c.definition),
      ...DEFAULT_FIELDS.map(f => norm(c[f.key]))
    ];
    cells.forEach(val => {
      const td = document.createElement('td');
      td.textContent = val; td.style.padding = '6px'; td.style.borderBottom = '1px solid #eee';
      tr.appendChild(td);
    });
    body.appendChild(tr);
  });

  table.append(head, body);
  root.appendChild(table);
}
