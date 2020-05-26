// Function to create n by n grid
function createGrid(n) {
  const container = document.querySelector("#grid-container");
  for (let i = 0; i < n * n; i++) {
    let square = document.createElement("div");
    container.appendChild(square).className = "grid-square";
  }
}

createGrid(16);
