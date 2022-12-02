//add html elements
const gridContainer = document.getElementById("gridContainer")



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


    




