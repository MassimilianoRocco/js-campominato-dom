let scelteSbagliate = 0;
let scelteGiuste = 0;
let numSquares = 0;

function createSquare(){

    removeSquare();
    const squaresContainer =  document.getElementById("squares-container");
    const  userNumber = document.getElementById("number-input").value;

    let square;
    for(let x=1; x<=userNumber; x++){

        square = document.createElement('div');
        square.classList.add('square');
        square.classList.add('border-on');
        square.innerHTML = x;
        squaresContainer.append(square);
        numSquares++;

        square.addEventListener("click", creaColoreEText);    
    }
    piazzaBomba();
}


function removeSquare(){

    let squares = document.getElementsByClassName('square');
    
    while(squares[0] != null) {
        squares[0].remove();
    }
}

function creaColoreEText(){
    this.classList.toggle("bg_linear_blue");
    scelteGiuste++;
    if (scelteGiuste == numSquares - 6){
        alert("Hai Vinto!!");
    }
}
function creaColoreRed(){
    this.classList.remove("bg_linear_blue");
    this.classList.toggle("bg_red");
    scelteSbagliate++;
    if(scelteSbagliate == 6 ){
        alert("Hai Perso!")
        removeSquare();
    }
}


function piazzaBomba(){

    const square = document.getElementsByClassName('square');
    let casualSquare;
    const bombBox = [];

    while(bombBox.length < 16 ) {
        casualSquare = Math.floor(Math.random() * square.length);

        if(square[casualSquare].textContent !="BOMB"){
        square[casualSquare].innerHTML="BOMB";
        square[casualSquare].addEventListener("click", creaColoreRed);
        bombBox.push(casualSquare);
        }
    }
}
