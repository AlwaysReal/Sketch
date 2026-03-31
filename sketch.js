const container = document.querySelector("#container");

function makeDivs(numDivs){
    for (let i = 0; i <= numDivs; i++){
        let row = document.createElement("div");
        container.appendChild(row);
    }
}

makeDivs(256);