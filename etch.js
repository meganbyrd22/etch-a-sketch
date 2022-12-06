//add html elements
const gridContainer = document.getElementById("gridContainer");
const newGridButton = document.getElementById("newGridButton");
let numSquares = " " //add div in html?

//button function for prompt 
newGridButton.addEventListener('click', function(){let numSquares = prompt("Please enter the number of squares you'd like for each side of your grid")
    if (numSquares >= 100){
        return "Please enter a number that is less than 100"}
       else {createGrid(parseInt(numSquares))}
    })

//funtion to create grid
function createGrid(){
    //create grid
    for (let rows = 0; rows <16; rows++)
    {
    for (let columns = 0; columns < 16; columns++ ){

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

//function to change color 
function changeColor(e){
    e.target.style.backgroundColor = 'black';
}



//createNewGrid(numSquares); Do I need this if it's called in the else statement?

//function to create new grid from user response
//function createNewGrid(){
    //use original createGrid but input user # of squares for rows and columns
    //remove old grid with element.remove();
//}










    




