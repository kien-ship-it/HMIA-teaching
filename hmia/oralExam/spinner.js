// Expect data to be provided as window.spinnerProblems
const problems = window.spinnerProblems || [];

if (!problems.length) {
  console.error("spinner.js: No problems found. Did you load a data file first?");
}

// DOM references
const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");
const resultTitle = document.getElementById("result-title");
const resultDesc = document.getElementById("result-desc");
const resultAnalogs = document.getElementById("result-analogs");
const resultMech = document.getElementById("result-mech");
const resultPrompt = document.getElementById("result-prompt");

// Segment angle
const segmentAngle = 360 / problems.length;

// Colors for slices
const colors = [
  "#e0f7fa",
  "#ffe0b2",
  "#e1bee7",
  "#c8e6c9",
  "#fff9c4",
  "#bbdefb",
  "#ffccbc",
  "#d7ccc8",
  "#f8bbd0",
  "#d1c4e9",
  "#c5e1a5",
  "#ffe082"
];

// Build conic gradient dynamically
let gradientParts = [];
for (let i = 0; i < problems.length; i++) {
  const start = i * segmentAngle;
  const end = (i + 1) * segmentAngle;
  const color = colors[i % colors.length];
  gradientParts.push(`${color} ${start}deg ${end}deg`);
}
wheel.style.background = `conic-gradient(${gradientParts.join(",")})`;

// Read verbose flag from URL (?verbose=true)
const params = new URLSearchParams(window.location.search);
const verbose = params.get("verbose") === "true";

// Hide analogs & mechanisms containers by default if not verbose
if (!verbose) {
  resultAnalogs.style.display = "none";
  resultMech.style.display = "none";
}

// Create labels around the wheel, along the radius that cuts each segment
problems.forEach((p, i) => {
  const angle = i * segmentAngle + segmentAngle / 2; // center of segment
  const label = document.createElement("div");
  label.className = "segment-label";
  label.style.transform = `rotate(${angle}deg)`;

  const span = document.createElement("span");
  span.textContent = p.short;
  label.appendChild(span);
  wheel.appendChild(label);
});

let spinning = false;

function spin() {
  if (spinning) return;
  spinning = true;
  spinButton.disabled = true;

  const index = Math.floor(Math.random() * problems.length);
  const spins = 5 + Math.floor(Math.random() * 4); // 5–8 full rotations
  const targetAngle = index * segmentAngle + segmentAngle / 2;

  // Rotate so that chosen segment's center lands at 3 o'clock under pointer
  const finalRotation = spins * 360 - targetAngle;

  wheel.style.transition = "transform 4s cubic-bezier(0.19, 1, 0.22, 1)";
  wheel.style.transform = `translate(-50%, -50%) rotate(${finalRotation}deg)`;

  setTimeout(() => {
    const chosen = problems[index];
    resultTitle.textContent = chosen.full;
    resultDesc.textContent = chosen.generic;

    if (verbose) {
      // Hide prompts
      resultPrompt.style.display = "none";
      resultPrompt.innerHTML = "";

      // Show analogs
      resultAnalogs.style.display = "block";
      const a = chosen.analogs;
      resultAnalogs.innerHTML = `
        <span class="label">Analogs:</span>
        <ul>
          <li><strong>Human:</strong> ${a.human}</li>
          <li><strong>Organizational:</strong> ${a.organizational}</li>
          <li><strong>Expert:</strong> ${a.expert}</li>
          <li><strong>Machine:</strong> ${a.machine}</li>
        </ul>
      `;

      // Show mechanisms
      resultMech.style.display = "block";
      const lis = chosen.mechanisms.map(m => `<li>${m}</li>`).join("");
      resultMech.innerHTML = `
        <span class="label">Mechanisms:</span>
        <ul>${lis}</ul>
      `;
    } else {
      // Non-verbose: hide analogs/mechs, show exam prompt
      resultAnalogs.style.display = "none";
      resultAnalogs.innerHTML = "";
      resultMech.style.display = "none";
      resultMech.innerHTML = "";

      resultPrompt.style.display = "block";
      resultPrompt.innerHTML = `
        <ol>
          <li><strong>Explain</strong> this alignment problem by analogizing across <em>humans</em>, <em>organizations</em>, <em>experts</em>, and <em>machine</em> intelligence.</li>
          <li><strong>Describe one alignment mechanism</strong> that addresses this problem. Compare how it applies to <em>machine intelligence</em> and <em>one other context</em>.</li>
          <li><strong>Reflect</strong> on what these comparisons reveal about alignment in general.</li>
        </ol>
      `;
    }

    spinning = false;
    spinButton.disabled = false;
  }, 4100);
}

spinButton.addEventListener("click", spin);
