//add html elements
const gridContainer = document.getElementById("gridContainer")
const cells = document.querySelectorAll("cells");


//funtion to create grid
function createGrid(){
    for (let rows = 0; rows <16; rows++)
    {
        for (let columns = 0; columns < 16; columns++ ){
        
        let cell = document.createElement("div"); gridContainer.appendChild(cell);
            
        cell.setAttribute('id', 'cells');
    } 
}
}

createGrid(16);

//add event listenter to each cell    
cells.forEach((cells) => 

cells.addEventListener('mouseover', changeColor)
)

//function to change color 
function changeColor(e){
    e.target.style.backgroundColor = 'black';
}


    




