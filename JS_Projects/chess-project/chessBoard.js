import { king, queen, rook, bishop, knight, pawn } from "./Pieces/chessPieces.js";
// import { changePlayer, reverseIds, revertIds } from "./Pieces/drop&drag.js";
// import { checkIfValid } from "./Pieces/validCheck.js";

const gameboard = document.getElementById('gameboard');
const playerDisplay = document.getElementById('player');
const infoDisplay = document.getElementById('info-display');
const width = 8;
let playerGo = 'white';
playerDisplay.textContent = 'white';

const startPieces = [
    rook, knight, bishop, king, queen , bishop, knight, rook,
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
        square.className = 'square';
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
            square.firstChild.classList.add('whitePiece');
        }

        if (i >= 48) {
            square.firstChild.classList.add('blackPiece');
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
    const correctGo = draggedElement.classList;
    console.log(correctGo);
    // const correctGo = draggedElement.classList.contains(playerGo);
    const taken = e.target.classList.contains('piece');
    const valid = checkIfValid(e.target);
    const opponentGo = playerGo === 'whitePiece' ? 'blackPiece' : 'whitePiece';
    const takenByOpponent = e.target.firstChild?.classList.contains(opponentGo);

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

    console.log(targetId);
    console.log(startId);
    console.log(piece);

    switch(piece) {
        case 'pawn' : 
        const starterRow = [8, 9, 10, 11, 12 , 13, 14, 15];
            if(
                starterRow.includes(startId) && startId + width * 2 === targetId ||
                startId + width === targetId ||
                startId + width - 1 === targetId && document.querySelector(`[square-id ="${startId + width - 1}"]`).firstChild ||
                startId + width * 2 - 1 === targetId && document.querySelector(`[square-id ="${startId + width * 2 - 1}"]`).firstChild ||
                startId + width + 1 === targetId && document.querySelector(`[square-id ="${startId + width + 1}"]`).firstChild 
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

// export { width, infoDisplay, playerDisplay, creatBoard };