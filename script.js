// Select HTML elements
const gridForm = document.querySelector(".grid-form");
const container = document.querySelector(".grid");
const gridSquares = document.querySelectorAll(".grid__square"); // Returns a NodeList
const defaultBtn = document.querySelector(".sketch-menu__list__mode__button--default");
const randomBtn = document.querySelector(".sketch-menu__list__mode__button--random");
const transBtn = document.querySelector(".sketch-menu__list__mode__button--transparent");
const clearBtn = document.querySelector(".sketch-menu__list__mode__button--clear-grid");

// Function to create an n-by-n grid
function createGrid(n) {
  // Ensure reasonable range input
  if (n > 101) {
    n = 100;
  } else if (n < 1) {
    n = 1;
  }
  for (let i = 0; i < (n * n); i++) {
    container.style.setProperty('--grid-n', n);
    let square = document.createElement("div");
    container.appendChild(square).className = "grid__square";
  }
}

// Render the default grid onto the document
createGrid(16);

// Change the grid upon form submission
const changeGrid = (e) => {
  let gridSize = e.target.elements["grid-size"].value;
  container.innerHTML = '';
  createGrid(gridSize);
  e.preventDefault();
}

// Handle DOM events
gridForm.addEventListener("submit", changeGrid);