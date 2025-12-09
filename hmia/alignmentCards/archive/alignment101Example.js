/**
 * Alignment Card Renderer — Simple Schema
 * ---------------------------------------
 * Loads and renders cards from either:
 *   - A GitHub raw JS module via ?deck=Org/repo/branch/path/to/file.js
 *   - A local fallback (studentData.js) if no deck is specified
 *
 * Expected data shape:
 *   export const cards = [
 *     { name, definition, failureMode, example }
 *   ]
 *
 * Notes:
 *   - The prior category-based views are removed (no category filter in this schema).
 *   - If ?category=... is present, it is ignored gracefully.
 */

function renderSimpleCardList(cards) {
  const container = document.getElementById('container');
  container.innerHTML = '';

  // Header (optional—remove if you don’t want it)
  const header = document.createElement('div');
  header.className = 'list-header';
  header.textContent = 'Alignment Cards';
  container.appendChild(header);

  cards.forEach(card => {
    const cardBlock = document.createElement('div');
    cardBlock.className = 'card-block';

    const title = document.createElement('div');
    title.className = 'card-name';
    title.textContent = card.name;

    const def = document.createElement('div');
    def.className = 'card-definition';
    def.innerHTML = `<strong>Definition:</strong> ${card.definition}`;

    const failure = document.createElement('div');
    failure.className = 'card-failure';
    failure.innerHTML = `<strong>Failure Mode:</strong> ${card.failureMode}`;

    const example = document.createElement('div');
    example.className = 'card-example';
    example.innerHTML = `<strong>Example:</strong> ${card.example}`;

    cardBlock.appendChild(title);
    cardBlock.appendChild(def);
    cardBlock.appendChild(failure);
    cardBlock.appendChild(example);

    container.appendChild(cardBlock);
  });
}

window.onload = async function () {
  const params = new URLSearchParams(window.location.search);
  const deckParam = params.get("deck");
  // Only build a deckURL if a deck param was supplied
  const deckURL = deckParam ? `https://raw.githubusercontent.com/${deckParam}` : null;

  async function loadDeck() {
    // Local fallback if no deck param is provided
    if (!deckParam) {
      const module = await import('./studentData.js');
      return { cards: module.cards || [] };
    }

    try {
      const response = await fetch(deckURL);
      const code = await response.text();

      const blobURL = URL.createObjectURL(new Blob([code], {
        type: 'application/javascript'
      }));

      const module = await import(blobURL);
      return { cards: module.cards || [] };
    } catch (err) {
      console.error("Failed to load remote deck:", err);
      return { cards: [] };
    }
  }

  const { cards } = await loadDeck();
  renderSimpleCardList(cards);
};
