// Select HTML elements
const gridForm = document.querySelector(".grid-form");
const container = document.querySelector(".grid");
const gridSquares = document.querySelectorAll(".grid__square"); // Returns a NodeList
const defaultBtn = document.querySelector(".sketch-menu__list__mode__button--default");
const randomBtn = document.querySelector(".sketch-menu__list__mode__button--random");
const transBtn = document.querySelector(".sketch-menu__list__mode__button--transparent");
const clearBtn = document.querySelector(".sketch-menu__list__mode__button--clear-grid");

// Function to create an n-by-n grid
function createGrid(n = 16) {
  // Ensure reasonable range input
  if (n > 101) {
    n = 100;
  } else if (n < 1) {
    n = 1;
  }
  for (let i = 0; i < (n * n); i++) {
    container.style.setProperty('--grid-n', n);
    const square = document.createElement("div");
    container.appendChild(square).className = "grid__square";
    square.addEventListener("mouseover", etchTheSketch);
  }
}

// Render the default grid onto the document
createGrid();

// Change the grid upon form submission
const changeGrid = (e) => {
  let gridSize = e.target.elements["grid-size"].value;
  container.innerHTML = '';
  createGrid(gridSize);
  e.preventDefault();
}

// Declare variables
let color = "default";

// Handle "brush" changes
const changeBrushes = (e) => {
  // TODO
}

// Handle "mouseover" events on the grid
function etchTheSketch(e) {
  e.target.style.backgroundColor = 'gray';
}

// Reset the canvas FIXME
const resetCanvas = (e) => gridSquares.forEach(square => square.style.backgroundColor = "var(--square-color)");

// Assign DOM event handlers
gridForm.addEventListener("submit", changeGrid);
clearBtn.addEventListener("click", resetCanvas);
