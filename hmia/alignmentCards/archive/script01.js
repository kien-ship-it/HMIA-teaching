window.onload = function () {
  const container = document.getElementById('container');
  let currentCategory = ""; // This tracks the last category seen

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
