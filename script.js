// Select grid-container 
const container = document.querySelector(".grid");

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
