//Get reference to html reference
const container = document.getElementById('container');

//Track if any mouse button is pressed
let mouseDown = 0;
document.body.onmousedown = function() { 
  mouseDown = 1;
}
document.body.onmouseup = function() {
  mouseDown = 0;
}

//Initialize grid size and brush color;
let input;
if (input == undefined) {
    input = 16;
}

let color;
if (color == undefined) {
    color = `black`;
}

//Get color from button
function getColor(str) {
    if (typeof str != 'string') {
        console.log('ERROR: color button doesnt return a string')
    } else {
        color = str;
        return color;
    }
}

//Set color of cube based off chosen color
function colorCube (e) {
    if (mouseDown>0)
    {
        this.setAttribute("style", `background-color: ${color};`);
    }
}

//Get grid size from form
function numSelector(){
    input = document.getElementById("userInput").value;
    if (input > 0) {
        createGrid(input);
        return;
    } else {
        return;
    }
}

//Function to create a grid
function createGrid(x) {
    if (x > 100) {
        return;
    }
    //If a grid already exists, clear it
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild)
    }

    container.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${x}, 1fr)`;

    for (let c = 0; c < (x*x); c++) {
        let cube = document.createElement('div');
        cube.classList.add('grid-item');
        cube.addEventListener('mouseover', colorCube);
        container.appendChild(cube);
    }
}

createGrid(input);