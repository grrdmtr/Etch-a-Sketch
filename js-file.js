let numOfSquares = 16;

// Initial 16x16 grid creator

const container = document.querySelector('#container');   

for (i=1; i <= numOfSquares; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (j=1; j <= numOfSquares; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        row.appendChild(square);
    }
}

const newBtn = document.querySelector('#btn-new');

newBtn.addEventListener('click', createNewGrid);

function createNewGrid () {
    numOfSquares = prompt("Set a new number of squares per side");
    if (numOfSquares <= 100) {
    deleteGrid();
    createGrid(numOfSquares);
    } else {
        numOfSquares = prompt("Set a number less than 100");
    }
}

const clearBtn = document.querySelector('#btn-clear');

clearBtn.addEventListener('click', clearGrid);

const randomBtn = document.querySelector('#btn-rdm');

randomBtn.addEventListener('click', hoverRandomColor);

const defaultBtn = document.querySelector('#btn-default');

defaultBtn.addEventListener('click', hover);

function createGrid(num) {
    for (i=1; i <= num; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (j=1; j <= num; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
    }
    hover();
}

function clearGrid () {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style['background'] = "none";
    })
}

function deleteGrid() {
    const rows = document.querySelectorAll('.row');
    rows.forEach((row) => {
        container.removeChild(row);      
    })
}

function hoverRandomColor() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener("mouseover", function(e) {
        var color = '#'+Math.floor(Math.random()*16777215).toString(16);
        var colorString = '0px 0px 30px 0px ' + color;
        this.style['background'] = color;
        
    }  , false));
}

function hover() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener("mouseover", function(e) {
        this.style['background'] = '#000000';
        
    }  , false));
}

const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.addEventListener("mouseover", function() {
        // highlight the mouseover target
        square.classList.add('hover');
    
        // reset the color after a short delay
        //setTimeout(function() {
        //    square.classList.remove('hover');
        //}, 500);
    }, false));