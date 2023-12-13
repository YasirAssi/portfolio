const gameBoard = document.getElementById('gameBoard');
const resetBtn = document.getElementById('reset');
let playerTurn = 'X';
const displayTurn = document.getElementById('displayTurn');
displayTurn.innerHTML = `Current Turn: ${playerTurn}`;
displayTurn.style.backgroundColor = 'rgb(94, 166, 217)';

const boardShapes = [
    '','','',
    '','','',
    '','',''
];

let createBoardShape = () => {
    boardShapes.forEach((boardShape,i) => {
        const square = document.createElement('div');
        square.className = 'square';
        square.innerHTML = `${i+1}`
        square.setAttribute('square-id', i);
        gameBoard.appendChild(square);
    });  
};

createBoardShape();

let allSquares = Array.from(document.querySelectorAll('.square'));

const xBtn = document.getElementById('xBtn');
const oBtn = document.getElementById('oBtn');
oBtn.disabled = true;

xBtn.onclick = () => {
    let chooseXSquare = prompt('choose from 1-9');
    if(!chooseXSquare || isNaN(chooseXSquare) || chooseXSquare < 1 || chooseXSquare > 9) {
        alert ('plaese pick your square');
        return;
    } else if(allSquares[chooseXSquare - 1].innerText != 'X' && allSquares[chooseXSquare - 1].innerText != 'O'){
        oBtn.disabled = false;
        allSquares[chooseXSquare - 1].innerHTML = 'X';
        allSquares[chooseXSquare - 1].style.color = 'rgb(94, 166, 217)';
        if(winTheGame()){
        xBtn.disabled = true;
        oBtn.disabled = true;
        displayTurn.style.textDecoration = 'line-through';
        }
        xBtn.disabled = true;
        playerTurn = playerTurn === 'X' ? 'O' : 'X';
        displayTurn.style.backgroundColor = 'orange';
        displayTurn.innerHTML = `Current Turn: ${playerTurn}`; 
        } else {
        alert('Square already filled. Choose another square!')
    }   
};

oBtn.onclick = () => {
    let chooseOSquare = prompt('choose from 1-9');

    if(!chooseOSquare || isNaN(chooseOSquare) || chooseOSquare < 1 || chooseOSquare > 9) {
        alert ('plaese pick your square');
        return;

    } else if(allSquares[chooseOSquare - 1].innerText != 'X' && allSquares[chooseOSquare - 1].innerText != 'O') {
        xBtn.disabled = false;
        allSquares[chooseOSquare - 1].innerHTML = 'O';
        allSquares[chooseOSquare - 1].style.color = 'orange';
        if(winTheGame()){
        xBtn.disabled = true;
        oBtn.disabled = true;
        displayTurn.style.textDecoration = 'line-through';
        }
        oBtn.disabled = true;
        playerTurn = playerTurn === 'X' ? 'O' : 'X';
        displayTurn.style.backgroundColor = 'rgb(94, 166, 217)';
        displayTurn.innerHTML = `Current Turn: ${playerTurn}`;   
        } else {
        alert('Square already filled. Choose another square!');
        }
};

let winTheGame = () => {
    
    for (let i = 0; i < 9; i += 3) {
        if (
            allSquares[i].innerHTML !== '' &&
            allSquares[i].innerHTML === allSquares[i + 1].innerHTML &&
            allSquares[i].innerHTML === allSquares[i + 2].innerHTML
        ) {
            alert(`player with '${playerTurn}' wins, good job start new round!`);
            return true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (
            allSquares[i].innerHTML !== '' &&
            allSquares[i].innerHTML === allSquares[i + 3].innerHTML &&
            allSquares[i].innerHTML === allSquares[i + 6].innerHTML
        ) {
            alert(`player with '${playerTurn}' wins, good job start new round!`);
            return true; 
        }
    }

    if (
        allSquares[0].innerHTML !== '' &&
        allSquares[0].innerHTML === allSquares[4].innerHTML &&
        allSquares[0].innerHTML === allSquares[8].innerHTML
    ) {
        alert(`player with '${playerTurn}' wins, good job start new round!`);
        return true;
    }

    if (
        allSquares[2].innerHTML !== '' &&
        allSquares[2].innerHTML === allSquares[4].innerHTML &&
        allSquares[2].innerHTML === allSquares[6].innerHTML
    ) {
        alert(`player with '${playerTurn}' wins, good job start new round!`);
        return true; 
    }

    return false;
}

resetBtn.addEventListener('click', resetGame);

function resetGame (){
    setTimeout(location.reload(), 1000);
        oBtn.disabled = true;
        xBtn.disabled = true;
};













