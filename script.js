const headerContainer = document.querySelector(".header");
const serialNumbersContainer = document.querySelector(".sno");
const mainContainer = document.querySelector(".main");
let columns = 26;
let rows = 100;

function createHeaderCells() {
    for (let i = 0; i <= columns; i++) {
        const headerCell = document.createElement("div");
        headerCell.className = "header-cell cell";
        if (i !== 0) {
            // i = 1 => Char A => 64 + 1 => 65
            headerCell.innerText = String.fromCharCode(64 + i);
        }
        headerContainer.appendChild(headerCell)
    }
}
function createSerialNumberCells() {
    for (let i = 1; i <= rows; i++) {
        const snoCell = document.createElement("div");
        snoCell.innerText = i;
        snoCell.className = "sno-cell cell"
        serialNumbersContainer.appendChild(snoCell);
    }
}
function createRow(rowNumber) {
    // creates a row and each row will have 26 columns
    const row = document.createElement("div");
    row.className = "row";
    for (let i = 1; i <= columns; i++) {
        const cell = document.createElement("div");
        cell.className = "main-cell cell";
        cell.contentEditable = true;
        row.appendChild(cell);
        cell.id = String.fromCharCode(64 + i) + rowNumber;

        // adding focus event for every cell.
        cell.addEventListener("focus", onCellFocus);
        // add input event as we need to record the inside the input 
        cell.addEventListener("input", onFormChange);
    }
    mainContainer.appendChild(row);
    
}
function buildMainSection() {
    // loop for 100 times
    for (let i = 1; i <= rows; i++) {
        createRow(i);
        console.log("inside me")
    }
}




createHeaderCells();
createSerialNumberCells();
buildMainSection();


const addsheet = document.querySelector(".btn");
const footerdown = document.querySelector(".abc");
const adsheet = document.querySelector(".add-sheet");
let j = 2;
function addnewsheet(){
    const newsheet = document.createElement("div");
    newsheet.className= "add-sheet";
    newsheet.innerText = "Sheet " + j;
    footerdown.appendChild(newsheet);
        j++;
}

addsheet.addEventListener('click', addnewsheet);