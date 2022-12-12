//add html elements
const gridContainer = document.getElementById("gridContainer");
const newGridButton = document.getElementById("newGridButton");

//funtion to create grid
function createGrid(numSquares){
    //create grid
    for (let rows = 0; rows < numSquares * numSquares; rows++)
    {
   
    //create cell element    
    let cell = document.createElement("div");
    
     //name cell element       
    cell.setAttribute("id", "cell"); 

    cell.addEventListener('mouseover', changeColor)
   
    //append to DOM
    gridContainer.appendChild(cell)
    } 

    //create grid template for even distribution of squares
    gridContainer.setAttribute('style',`grid-template: repeat(${numSquares}, 1fr) / repeat(${numSquares}, 1fr)`)
}

createGrid(16);

//function to change color 
function changeColor(e){
    e.target.style.backgroundColor = 'black';
}

//button function for prompt 
newGridButton.addEventListener('click', function(){
    let numSquares = Number(prompt("Please enter the number of squares you'd like for each side of your grid"));
    removeGrid();
    createGrid(numSquares)})

//function to remove old grid 
function removeGrid(){
    gridContainer.replaceChildren();
}
















    




