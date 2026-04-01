const container = document.querySelector("#container");

function makeDivs(gridSize){
    const cellSize = 100 / gridSize

    for (let i = 0; i < gridSize * gridSize; i++){
        let cell = document.createElement("div");
        cell.style.flex = `0 0 ${cellSize}%`;
        container.appendChild(cell);
    }
}

makeDivs(16);