const container = document.querySelector("#container");
const userInput = document.querySelector(".userInput");

function makeDivs(gridSize){
    const cellSize = 100 / gridSize

    for (let i = 0; i < gridSize * gridSize; i++){
        let cell = document.createElement("div");
        cell.style.flex = `0 0 ${cellSize}%`;
        container.appendChild(cell);
    }
}

makeDivs(16);

container.addEventListener('mouseover', function(e){
    if(e.target.matches('#container div')){
        e.target.classList.toggle('coloredBox');
    }
});

userInput.textContent = "Click me to change grid size";
userInput.addEventListener('click', function(e){
    let newGrid = prompt("Enter grid size:");
    
    if (newGrid === null) return;

    newGrid = Number(newGrid);

    if (newGrid > 100 || newGrid <= 0){
        alert("Please enter a number between 1 and 100");
        handleClick();
        return;
    }
    container.innerHTML = "";
    makeDivs(newGrid);
    }
);

