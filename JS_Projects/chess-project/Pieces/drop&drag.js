// import {  infoDisplay ,playerDisplay,width, creatBoard } from "../chessBoard.js";
// import { checkIfValid } from "./validCheck.js";

// let playerGo = 'white';
// const allSquares = document.querySelectorAll('.square');

// allSquares.forEach(square => {
//     square.addEventListener('dragstart', dragStart);
//     square.addEventListener('dragover', dragOver);
//     square.addEventListener('drop', dragDrop);
// });

// let startSquareId;
// let draggedElement;

// function dragStart(e) {
// startSquareId = e.target.parentNode.getAttribute('square-id');
// draggedElement = e.target;
// }

// function dragOver(e){
//     e.preventDefault();
// }

// function dragDrop(e) {
//     e.stopPropagation();
//     const correctGo = draggedElement.classList;
//     console.log(correctGo);
//     // const correctGo = draggedElement.classList.contains(playerGo);
//     const taken = e.target.classList.contains('piece');
//     const valid = checkIfValid(e.target);
//     const opponentGo = playerGo === 'whitePiece' ? 'blackPiece' : 'whitePiece';
//     const takenByOpponent = e.target.firstChild?.classList.contains(opponentGo);

//     if(correctGo){
//         if(takenByOpponent && valid){
//             e.target.append(draggedElement);
//             e.target.remove();
//             changePlayer();
//             return;
//         }
//         if(taken && !takenByOpponent){
//             infoDisplay.textContent = 'wrong move!'
//             setTimeout(() => infoDisplay.textContent = '', 2000);
//             return;
//         }
//         if (valid){
//             e.target.append(draggedElement);
//             changePlayer();
//             return;
//         }
//     }
// }

// let changePlayer = () => {
//     if(playerGo === 'white'){
//         reverseIds();
//         playerGo = 'black';
//         playerDisplay.textContent = 'black';
//     } else {
//         revertIds();
//         playerGo = 'white';
//         playerDisplay.textContent = 'white';
//     }
// }

// let reverseIds = () => {
//     const allSquares = document.querySelectorAll('.square');
//     allSquares.forEach((square, i) => square.setAttribute('square-id', (width * width - 1) - i));
// }

// let revertIds = () => {
//     allSquares.forEach((square, i) => square.setAttribute('square-id', i));
// } 

// export {  allSquares ,startSquareId, draggedElement, changePlayer, reverseIds, revertIds }

