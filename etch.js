//add html elements
const gridContainer = document.getElementById("gridContainer")

//create cell element
//let cell = document.createElement("div");
//gridContainer.appendChild(cell);

//funtion to create grid
function createGrid(x){
    for (let rows = 0; rows <=x; rows++)
    {
        for (let columns = 0; columns < x; columns++ ){

        let cell = document.createElement("div"); 
        gridContainer.appendChild(cell);
    }
    createGrid(16);
}}