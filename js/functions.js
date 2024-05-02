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

    let contatoreBomba = 0;
    let randomBoolean;
    let square = document.getElementsByClassName('square');
    
    for(let x=1; x<=square.length; x++) {
         randomBoolean = Math.random() >= 0.5;
         

        if(randomBoolean == true && contatoreBomba <16){
            square[x].innerHTML = "BOMB"
            contatoreBomba++;
        }
    }
}