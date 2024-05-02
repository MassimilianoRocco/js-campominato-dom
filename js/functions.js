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
}


function piazzaBomba(){

    const square = document.getElementsByClassName('square');
    let casualSquare;
    const bombBox = [];

    while(bombBox.length < 16 ) {
        casualSquare = Math.floor(Math.random() * square.length);

        if(square[casualSquare].textContent !="BOMB"){
        square[casualSquare].innerHTML="BOMB";
        bombBox.push(casualSquare);
        }
    }
}