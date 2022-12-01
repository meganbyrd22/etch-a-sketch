//add html elements
const gridContainer = document.getElementById("gridContainer")


//create cell element
//let cell = document.createElement("div");
//gridContainer.appendChild(cell);

//funtion to create grid
function createGrid(){
    for (let rows = 0; rows <16; rows++)
    {
        for (let columns = 0; columns < 16; columns++ ){

        let cell = document.createElement("div"); 
        (gridContainer).appendChild(cell);

        cell.setAttribute('id', 'cells')
    }
}
}

createGrid(16);



//event listener for hover and color change
const cells = document.querySelectorAll('cells');

cells.forEach((cell) => 

cell.addEventListener(mouseenter, ()=>
    cell.style.backgroundColor = "black")
)
    




