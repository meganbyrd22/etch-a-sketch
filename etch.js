//add html elements
const gridContainer = document.getElementById("gridContainer")
const cells = document.querySelectorAll("cells");

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
    //event listener for hover and color change

    cells.forEach((cell) => 

    cell.addEventListener(mouseenter, changeColor)
    )
}
}

createGrid(16);

//function to change color 
function changeColor(e){
    e.target.style.backgroundColor = 'black';
}


    




