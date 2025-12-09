const buttonBar = document.getElementById("buttonBar");
const iframe = document.getElementById("cardFrame");

const descriptionDiv = document.createElement("div");
descriptionDiv.id = "description";
document.body.insertBefore(descriptionDiv, iframe);

window.addEventListener("DOMContentLoaded", () => {
  const script = document.createElement("script");
  script.src = "../original/data.js";
  script.onload = () => {
    if (typeof categories !== 'undefined') {
      categories.forEach(cat => {
        const button = document.createElement("button");
        button.innerText = cat.name;
        button.onclick = () => {
          iframe.src = `../original/index.html?category=${encodeURIComponent(cat.code)}`;
          descriptionDiv.innerText = cat.description + ` (Pathology: ${cat.pathology})`;
          
        };
        buttonBar.appendChild(button);
      });
    } else {
      console.error("categories not found in data.js");
    }
  };
  document.body.appendChild(script);
});