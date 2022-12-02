//add html elements
const gridContainer = document.getElementById("gridContainer")
const cells = document.querySelectorAll("cells");


//funtion to create grid
function createGrid(){
    //create grid
    for (let rows = 0; rows <16; rows++)
    {
    for (let columns = 0; columns < 16; columns++ ){
    
    //create cell element    
    let cell = document.createElement("div");
    
     //name cell element       
    cell.setAttribute("id", "cells");

    cells.forEach((cells) => 

    cells.addEventListener('mouseover', changeColor)
    )

    gridContainer.appendChild(cell)
    } 
}
}

createGrid(16);

//add event listenter to each cell    


//function to change color 
function changeColor(e){
    e.target.style.backgroundColor = 'black';
}


    




