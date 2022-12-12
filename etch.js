//add html elements
const gridContainer = document.getElementById("gridContainer");
const newGridButton = document.getElementById("newGridButton");
let numSquares = Number(" ")

//funtion to create grid
function createGrid(numSquares){
    //create grid
    for (let rows = 0; rows < numSquares; rows++)
    {
        for (let columns = 0; columns < numSquares; columns++){

    //create cell element    
    let cell = document.createElement("div");
    
     //name cell element       
    cell.setAttribute("id", "cell"); 

    cell.addEventListener('mouseover', changeColor)
   
    //append to DOM
    gridContainer.appendChild(cell)
    } 
}
}
createGrid(16); 
resizeGrid(numSquares);



//function to change color 
function changeColor(e){
    e.target.style.backgroundColor = 'black';
}

//button function for prompt 
newGridButton.addEventListener('click', function(){
    let numSquares = Number(prompt("Please enter the number of squares you'd like for each side of your grid"));
    removeGrid();
    createGrid(numSquares)
    resizeGrid(numSquares)})

//function to remove old grid 
function removeGrid(){
    gridContainer.replaceChildren();
}

//adjust size of squares based on input
function resizeGrid(){
    let cell = document.getElementById("cell");
    let numSquares = " ";

    if (1 < numSquares >25){
        cell.style.height = "75px";
        cell.style.width = "75px";}
    else if (26 < numSquares > 50){
        cell.style.height = "50px";
        cell.style.width = "50px";
    }
    else if (51 < numSquares > 75 ){
        cell.style.height = "50px";
        cell.style.width = "50px";
    }
    else if (76 < numSquares > 99){
        cell.style.height = "50px";
        cell.style.width = "50px";
    }
    gridContainer.setAttribute(`grid-template`, `repeat (${numSquares}, 1 fr)/ repeat(${numSquares}, 1 fr)`);
    }

















    




