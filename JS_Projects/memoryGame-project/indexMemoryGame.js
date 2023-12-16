const gridContainer = document.querySelector(".container");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;


  axios.get("./data/cards.json")
  .then(response => {
  const data = response.data;
  cards = [...data, ...data];
  shuffleCards();
  generateCards();
  });

function shuffleCards() {
  let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
  }
}

function generateCards() {
  for (let card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-name", card.name);
    cardElement.innerHTML = `
      <div class="front">
        <img class="front-image" src=${card.image} />
      </div>
      <div class="back"></div>
    `;
    gridContainer.appendChild(cardElement);
    cardElement.addEventListener("click", flipCard);
  }
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flipped");

  if (!firstCard) {
    firstCard = this;
    return;
  }

  secondCard = this;
  lockBoard = true;

  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.name === secondCard.dataset.name;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flipped");
    secondCard.classList.remove("flipped");
    resetBoard();
  }, 1000);
}

function resetBoard() {
  firstCard = null;
  secondCard = null;
  lockBoard = false;
}

function restart() {
  resetBoard();
  shuffleCards();
  gridContainer.innerHTML = "";
  generateCards();
}


// [
//     {
//         "image": "../../../TigerImages/chili.png",
//         "name": "chili"
//     },
//     {
//         "image": "../../../TigerImages/grapes.png",
//         "name": "grapes"
//     },
//     {
//         "image": "../../../TigerImages/lemon.png",
//         "name": "lemon"
//     },
//     {
//         "image": "../../../TigerImages/orange.png",
//         "name": "orange"
//     },
//     {
//         "image": "../../../TigerImages/pineapple.png",
//         "name": "pineapple"
//     },
//     {
//         "image": "../../../TigerImages/strawberry.png",
//         "name": "strawberry"
//     },
//     {
//         "image": "../../../TigerImages/tomato.png",
//         "name": "tomato"
//     },
//     {
//         "image": "../../../TigerImages/watermelon.png",
//         "name": "watermelon"
//     },
//     {
//         "image": "../../../TigerImages/cherries.png",
//         "name": "cherries"
//     }
// ]