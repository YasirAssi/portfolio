import { king, queen, rook, bishop, knight, pawn } from "./Pieces/chessPieces.js";

const gameboard = document.getElementById('gameboard');
const playerDisplay = document.getElementById('player');
const infoDisplay = document.getElementById('info-display');
const width = 8;
let playerGo = 'white';
playerDisplay.textContent = 'white';

const startPieces = [
    rook, knight, bishop, king, queen, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn, 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    '', '', '', '', '', '', '', '', 
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, king, queen, bishop, knight, rook
];

let creatBoard = () => {
    startPieces.forEach((startPiece, i) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = startPiece;
        square.firstChild?.setAttribute('draggable', true);
        square.setAttribute('square-id', i);

        const row = Math.floor((63 - i) / 8) + 1;
        if(row % 2 === 0){
            square.classList.add(i % 2 === 0 ? 'beige': 'brown');
        } else {
            square.classList.add(i % 2 === 0 ? 'brown' : 'beige');
        }

        if (i <= 15) {
            square.firstChild.firstElementChild.classList.add('white');
        }
        if (i >= 48) {
            square.firstChild.firstElementChild.classList.add('black');
        }
        gameboard.appendChild(square);
    });
}
creatBoard();

const allSquares = document.querySelectorAll('.square');

allSquares.forEach(square => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragover', dragOver);
    square.addEventListener('drop', dragDrop);
});

let startSquareId;
let draggedElement;

function dragStart(e) {
startSquareId = e.target.parentNode.getAttribute('square-id');
draggedElement = e.target;
}

function dragOver(e){
    e.preventDefault();
}

function dragDrop(e) {
    e.stopPropagation();
    const correctGo = draggedElement.firstElementChild.classList.contains(playerGo);
    console.log(correctGo);
    const taken = e.target.classList.contains('piece');
    const valid = checkIfValid(e.target);
    const opponentGo = playerGo === 'white' ? 'black' : 'white';
    const takenByOpponent = e.target.classList.contains(opponentGo);
    // for some reason its not reading the firs child of square(e.target) 
    console.log(e.target);
    console.log(takenByOpponent);
    console.log(taken);

    if(correctGo){
        if(takenByOpponent && valid){
            e.target.append(draggedElement);
            e.target.remove();
            changePlayer();
            return;
        }
        if(taken && !takenByOpponent){
            infoDisplay.textContent = 'wrong move!'
            setTimeout(() => infoDisplay.textContent = '', 2000);
            return;
        }
        if (valid){
            e.target.append(draggedElement);
            changePlayer();
            return;
        } 
    }
}

let checkIfValid = (target) => {
    const targetId = +target.getAttribute('square-id') || +target.parentNode.getAttribute('square-id');
    const startId = +startSquareId;
    const piece = draggedElement.id;

    switch(piece) {
        case 'pawn' : 
        const starterRow = [8, 9, 10, 11, 12 , 13, 14, 15];
                if(
                    starterRow.includes(startId) && startId + width * 2 === targetId 
                    && !document.querySelector(`[square-id ="${startId + width * 2}"]`).firstElementChild ||
                    startId + width === targetId  
                    && !document.querySelector(`[square-id ="${startId + width}"]`).firstElementChild  || 
                    startId + width - 1 === targetId  && document.querySelector(`[square-id ="${startId + width - 1}"]`).firstElementChild ||
                    startId + width + 1 === targetId && document.querySelector(`[square-id ="${startId + width + 1}"]`).firstElementChild
                ){
                    return true;
                }
                break;
        case 'knight' :
                if(
                    startId + (width * 2 - 1) === targetId || startId + (width * 2 + 1) === targetId ||
                    startId - (width * 2 - 1) === targetId || startId - (width * 2 + 1) === targetId ||
                    startId + width - 2 === targetId || startId + width + 2 === targetId ||
                    startId - width - 2 === targetId || startId - width + 2 === targetId 
                ){
                    return true;
                }
            break;
        case 'bishop' : 
                if(
                    startId + width + 1 === targetId || startId + width * 2 + 2 && !document.querySelectorAll(`[square-id = "${startId + width + 1}"]`).firstElementChild||
                    startId + width * 3 + 3 === targetId || startId + width * 4 + 4 ===  targetId|| startId + width * 5 + 5 === targetId || startId + width - 1 === targetId || startId + width * 2 - 2 === targetId || startId + width * 3 - 3 === targetId || startId + width * 4 - 4 === targetId || startId + width * 4 - 5 === targetId ||
                    startId - width + 1 === targetId || startId - width * 2 + 2 === targetId ||
                    startId - width * 3 + 3 === targetId || startId - width * 4 + 4 === targetId|| startId - width * 5 + 5 === targetId || startId - width - 1 === targetId || startId - width * 2 - 2 === targetId || startId - width * 3 - 3 === targetId || startId - width * 4 - 4 === targetId || startId - width * 4 - 5 === targetId
                ){
                    return true;
                }
                break;
        case 'rook':
                if(
                    startId + 1 === targetId || startId + 2 === targetId || startId + 3 === targetId || startId + 4 === targetId || startId + 5 === targetId || startId + 6 === targetId || startId + 7 === targetId ||
                    startId - 1 === targetId || startId - 2 === targetId || startId - 3 === targetId || startId - 4 === targetId || startId - 5 === targetId || startId - 6 === targetId || startId - 7 === targetId ||
                    startId + width === targetId || startId + width * 2 === targetId || startId + width * 3 === targetId || startId + width * 4 === targetId || startId + width * 5 === targetId || startId + width * 6 === targetId || startId + width * 7 === targetId ||
                    startId - width === targetId || startId - width * 2 === targetId || startId - width * 3 === targetId || startId - width * 4 === targetId || startId - width * 5 === targetId || startId - width * 6 === targetId || startId - width * 7 === targetId
                ){
                    return true;
                }
                break;
                        // the queen moves like the (rook and bishop compined togather)
            case 'queen' :
                    if(
                        startId + 1 === targetId || startId + 2 === targetId ||startId + 3 === targetId || startId + 4 === targetId ||startId + 5 === targetId || startId + 6 === targetId ||startId + 7 === targetId ||
                        startId - 1 === targetId || startId - 2 === targetId || startId - 3 === targetId || startId - 4 === targetId || startId - 5 === targetId || startId - 6 === targetId || startId - 7 === targetId ||
                        startId + width === targetId || startId + width * 2 === targetId || startId + width * 3 === targetId || startId + width * 4 === targetId || startId + width * 5 === targetId || startId + width * 6 === targetId || startId + width * 7 === targetId ||
                        startId - width === targetId || startId - width * 2 === targetId || startId - width * 3 === targetId || startId - width * 4 === targetId || startId - width * 5 === targetId || startId - width * 6 === targetId || startId - width * 7 === targetId || startId + width + 1 === targetId || startId + width * 2 + 2 === targetId ||
                        startId + width * 3 + 3 === targetId || startId + width * 4 + 4 ===     targetId|| startId + width * 5 + 5 === targetId || startId + width - 1  === targetId || startId + width * 2 - 2 === targetId || startId +    width * 3 - 3 === targetId || startId + width * 4 - 4 === targetId ||  startId + width * 4 - 5 === targetId || startId - width + 1 === targetId || startId - width * 2 + 2 === targetId || startId - width * 3 + 3 === targetId || startId - width * 4 + 4 ===     targetId|| startId - width * 5 + 5 === targetId || startId - width - 1  === targetId || startId - width * 2 - 2 === targetId || startId -    width * 3 - 3 === targetId || startId - width * 4 - 4 === targetId ||  startId - width * 4 - 5 === targetId
                    ){
                        return true;
                    }
                    break;
            case 'king' :
                    if(
                        startId + 1 === targetId || startId - 1 === targetId || startId +width === targetId || startId - width === targetId || startId +width + 1 === targetId || startId + width - 1 === targetId ||startId - width + 1 === targetId || startId - width - 1 ===targetId
                        ){
                        return true;
                    }
                        break;
    }
}

let changePlayer = () => {
    if(playerGo === 'white'){
        reverseIds();
        playerGo = 'black';
        playerDisplay.textContent = 'black';
    } else {
        revertIds();
        playerGo = 'white';
        playerDisplay.textContent = 'white';
    }
}

let reverseIds = () => {
    const allSquares = document.querySelectorAll('.square');
    allSquares.forEach((square, i) => square.setAttribute('square-id', (width * width - 1) - i));
}

let revertIds = () => {
    allSquares.forEach((square, i) => square.setAttribute('square-id', i));
} 


