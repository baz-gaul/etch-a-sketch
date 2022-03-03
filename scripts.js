const grid = document.getElementById('grid');
const resetButton = document.getElementById('reset');
const color = document.getElementById('colorInput');
const range = document.getElementById('range');
const random = document.getElementById('random');

function resizeGrid(){
    // remove all current cells
    Array.from(grid.childNodes).forEach(x => x.remove());
    // have to use Array.from or it glitches because childNodes is a live
    const size = range.value;
    // create new cells
    for(let i = 0; i < Math.pow(size, 2); i++){
        const div = document.createElement('cell');
        div.style.backgroundColor = "white";
        grid.appendChild(div);
    }

    //add Event Listeners to cells, changes their padding to % of parent
    grid.childNodes.forEach(div => {
        div.addEventListener('mouseover', (e) => {
            if(random.checked === false){
            e.target.style.backgroundColor = color.value;
            }else{
                const rgbGen = () => Math.floor(Math.random() * 255);
                e.target.style.backgroundColor = `rgb(${rgbGen()}, ${rgbGen()}, ${rgbGen()})`;
            }
        });

    });
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function resetGridColor(){
    grid.childNodes.forEach(node => node.style.backgroundColor = "white");
}

resetButton.addEventListener('click', resetGridColor);
range.addEventListener('change', resizeGrid);
resizeGrid();