import { VERSION } from './schema.js';
import { showFatal, norm } from './ui-core.js';
import { loadText } from './loader.js';
import { parseDeck } from './parser.js';
import { normalizeDeck } from './normalizer.js';
import * as Grid from './renderers/grid.js';
import * as Hier from './renderers/hier.js';
import * as Table from './renderers/table.js';

const RENDERERS = { grid: Grid, hier: Hier, table: Table };

window.onload = async function () {
  const params = new URLSearchParams(window.location.search);
  const user = params.get('user');                // GitHub user/org (if absent → local default.js)
  const file = params.get('file') || 'alignmentcards-v0';
  const style = (params.get('style') || 'grid').toLowerCase();
  const debug = params.get('debug') === '1';

  const pageTitle = document.getElementById('pageTitle');
  if (pageTitle) pageTitle.textContent += ` (v${VERSION})`;

  // category filter parsing
  const categorySet = new Set(
    (params.get('category') || '')
      .split(/[,|]/).map(s => s.trim().toLowerCase()).filter(Boolean)
  );

  const host = document.getElementById('card-grid-container');

  // 1) Load raw
  const loadRes = await loadText({ user, file });
  if (loadRes.status === 'not-found') {
    showFatal(`No such file (HTTP ${loadRes.httpStatus}). Check user/repo/branch/filename (no .js extension in param).`,
      { details: loadRes.httpStatusText || '', triedUrl: loadRes.sourceUrl, debug });
    return;
  }
  if (loadRes.status === 'network-error') {
    showFatal('Network error fetching the deck file.', {
      details: String(loadRes.error?.message || loadRes.error || ''), triedUrl: loadRes.sourceUrl, debug
    });
    return;
  }

  // 2) Parse
  let value;
  if (loadRes.status === 'ok-local') {
    value = loadRes.module;
  } else {
    const parseRes = await parseDeck({ text: loadRes.text, sourceUrl: loadRes.sourceUrl });
    if (parseRes.status !== 'ok') {
      showFatal(parseRes.reason === 'invalid-json' ? 'The file is not valid JSON.' : 'The file could not be loaded as an ES module.', {
        details: String(parseRes.error?.message || parseRes.error || ''), triedUrl: loadRes.sourceUrl, debug
      });
      return;
    }
    value = parseRes.value;
  }

  // 3) Extract cards/categories and normalize
  const cardsRaw = Array.isArray(value) ? value : (value.cards || []);
  const categoriesRaw = Array.isArray(value?.categories) ? value.categories : [];
  const { cards, categories } = normalizeDeck({ cards: cardsRaw, categories: categoriesRaw });

  if (!cards.length) {
    showFatal('I loaded your deck but found no recognizable cards to render.', { debug });
    return;
  }

  // 4) Filter by category param (works with normalized __cats)
  const filtered = categorySet.size
    ? cards.filter(c => (c.__cats || []).some(cat => categorySet.has(cat)))
    : cards;

  // 5) Pick renderer
  const renderer = RENDERERS[style] || RENDERERS.grid;
  try {
    renderer.render(host, filtered, categories, { style });
  } catch (e) {
    showFatal('I loaded your deck but hit an error while rendering it.', {
      details: String(e.stack || e.message || e), debug
    });
  }
};
