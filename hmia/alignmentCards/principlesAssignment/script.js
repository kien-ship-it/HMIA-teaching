function renderFullCardList () {
  const container = document.getElementById('container');
  let currentCategory = ""; // This tracks the last category seen

  const version = 0.1;

  // Sort by category
  cards.sort((a, b) => a.category.localeCompare(b.category));

  //create category header if we have a new category
  cards.forEach(card => {
    if (card.category !== currentCategory) {
      currentCategory = card.category;
      const categoryDiv = document.createElement('div');
      categoryDiv.className = 'category';
      categoryDiv.textContent = currentCategory;
      const categoryDescription = document.createElement('div');
      categoryDescription.className = 'categoryDescription';
      const categoryInfo = categories.find(cat => cat.code === currentCategory);//?.description;
      if (categoryInfo) {
        categoryDiv.textContent = categoryInfo.name;
        categoryDescription.textContent = categoryInfo.description + `(pathology: ${categoryInfo.pathology})`;
      }
      //categoryDescription.textContent = categoryInfo.description;
      //console.log(categories.find(cat => cat.code === currentCategory)?.description);
      categoryDiv.appendChild(categoryDescription);
      container.appendChild(categoryDiv);
    }


    const cardRow = document.createElement('div');
    cardRow.className = 'card-row';
    cardRow.innerHTML = `
      <div class="card-name">${card.name}</div>
      <div class="card-definition">${card.definition}</div>
    `;
    container.appendChild(cardRow);


    const exampleHeaderRow = document.createElement('div');
    exampleHeaderRow.className = 'exampleHeaderRow';
    exampleHeaderRow.innerHTML = `
      <div class="examplesHeaderText">Examples</div>
      <div class="examplesHeaderText"></div>
    `;
    container.appendChild(exampleHeaderRow);    

    const exemplars = document.createElement('div');
    exemplars.className = 'exemplars';
    exemplars.innerHTML = `
      <div class="exemplar"><strong>Human</strong><br>${card.human}</div>
      <div class="exemplar"><strong>Organizational</strong><br>${card.organizational}</div>
      <div class="exemplar"><strong>Professional</strong><br>${card.professional}</div>
      <div class="exemplar"><strong>Machine</strong><br>${card.machine}</div>
    `;
    container.appendChild(exemplars);


    if (card.expand) {
      // Explanations Header
      const explanationsHeaderRow = document.createElement('div');
      explanationsHeaderRow.className = 'explanationsHeaderRow';
      explanationsHeaderRow.innerHTML = `
        <div class="explanationsHeaderText">Explanations</div>
        <div class="explanationsHeaderText"></div>
      `;
      container.appendChild(explanationsHeaderRow);    

      const expansion = document.createElement('div');
      expansion.className = 'explanations';
      expansion.innerHTML = `
        <div class="explanationsText">
          <p><strong>Human:</strong> ${card.expand.human}</p>
          <p><strong>Organizational:</strong> ${card.expand.organizational}</p>
          <p><strong>Professional:</strong> ${card.expand.professional}</p>
          <p><strong>Machine:</strong> ${card.expand.machine}</p>
        </div>
      `;
      container.appendChild(expansion);
    };
  });
};

// Function to extract URL parameter
function getCategoryFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('category');
}


window.onload = function () {
  const container = document.getElementById('container');
  const categoryFilter = getCategoryFromUrl();

  if (!categoryFilter) {
    // If no specific category filter, fall back to existing full list display
    renderFullCardList();
    return;
  }

  // Apply portrait-mode styling
  container.classList.add('portrait-mode');

  // Create a grid container
  const grid = document.createElement('div');
  grid.className = 'card-grid';

  const filteredCards = cards.filter(card => card.category === categoryFilter);
  //const bgColor = categoryColors[categoryFilter] || '#ffffff';
  const category = categories.find(cat => cat.code === categoryFilter);
  const bgColor = category?.color || '#ffffff';


  filteredCards.forEach(card => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'portrait-card';
    cardDiv.innerText = card.name;
    cardDiv.style.backgroundColor = bgColor;

    cardDiv.onclick = () => {
      container.innerHTML = '';
      const expanded = document.createElement('div');
      expanded.className = 'expanded-card';

      const title = document.createElement('h2');
      title.innerText = card.name;

      const def = document.createElement('p');
      def.className = 'definition';
      def.innerText = card.definition;

      const examples = document.createElement('div');
      examples.className = 'exemplars';
      examples.innerHTML = `
        <div class="exemplar"><strong>Human</strong><br>${card.human}</div>
        <div class="exemplar"><strong>Organizational</strong><br>${card.organizational}</div>
        <div class="exemplar"><strong>Professional</strong><br>${card.professional}</div>
        <div class="exemplar"><strong>Machine</strong><br>${card.machine}</div>
      `;

      const explanation = document.createElement('div');
      explanation.className = 'explanations';
      if (card.expand) {
        explanation.innerHTML = `
          <div class="explanationsText">
            <p><strong>Human:</strong> ${card.expand.human}</p>
            <p><strong>Organizational:</strong> ${card.expand.organizational}</p>
            <p><strong>Professional:</strong> ${card.expand.professional}</p>
            <p><strong>Machine:</strong> ${card.expand.machine}</p>
          </div>
        `;
      }

      expanded.appendChild(title);
      expanded.appendChild(def);
      expanded.appendChild(examples);
      expanded.appendChild(explanation);

      expanded.onclick = () => {
        container.innerHTML = '';
        container.appendChild(grid);
      };

      container.appendChild(expanded);
    };

    grid.appendChild(cardDiv);
  });

  container.appendChild(grid);
};