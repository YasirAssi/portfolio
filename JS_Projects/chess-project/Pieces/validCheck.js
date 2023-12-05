// import { width, creatBoard } from "../chessBoard.js";
// import { startSquareId, draggedElement } from "./drop&drag.js";


// let checkIfValid = (target) => {
//     const targetId = +target.getAttribute('square-id') || +target.parentNode.getAttribute('square-id');
//     const startId = +startSquareId;
//     const piece = draggedElement.id;

//     switch(piece) {
//         case 'pawn' : 
//         const starterRow = [8, 9, 10, 11, 12 , 13, 14, 15];
//             if(
//                 starterRow.includes(startId) && startId + width * 2 === targetId ||
//                 startId + width === targetId ||
//                 startId + width - 1 === targetId && document.querySelector(`[square-id ="${startId + width - 1}"]`).firstChild ||
//                 startId + width * 2 - 1 === targetId && document.querySelector(`[square-id ="${startId + width * 2 - 1}"]`).firstChild ||
//                 startId + width + 1 === targetId && document.querySelector(`[square-id ="${startId + width + 1}"]`).firstChild 
//             ){
//                 return true;
//             }
//             break;
//     }
// }



// export { checkIfValid };

