//add html elements
const gridContainer = document.getElementById("gridContainer")
const cells = document.querySelectorAll("cells");


//funtion to create grid
function createGrid(){
    for (let rows = 0; rows <16; rows++)
    {
        for (let columns = 0; columns < 16; columns++ ){
//create cells element 
        let cell = document.createElement("div"); cell.setAttribute('id', 'cells');
//add event listenter to each cell    
        cells.forEach((cell) => 

        cell.addEventListener("mouseover", changeColor)
        )
//append cell element to grid container
        (gridContainer).appendChild(cell);

        
    } 
}
}

createGrid(16);

//function to change color 
function changeColor(e){
    e.target.style.backgroundColor = 'black';
}


    




