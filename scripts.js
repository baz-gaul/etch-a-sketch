function createGrid(size){
    const divs = [];
    for(let i = 0; i < size * size; i++){
        divs.push(document.createElement('div'));
    }

    divs.forEach(div => div.classList.add('cell'));
    divs.forEach(div => div.innerText = "test");
    return divs;
}

function removeGrid(grid){
    return Array.from(grid.childNodes).map(cell => cell.remove());
    // return for debugging purposes
}

const grid = document.querySelector('#grid');

// input setup
document.querySelector('#resetGrid').addEventListener('click', () => {
    removeGrid(grid);
})
document.querySelector('#resizeGrid').addEventListener('click', () => {
    removeGrid(grid);
    grid.append(...createGrid(16));
})
grid.append(...createGrid(16));