const instructionsContainer = document.querySelector(".instructions-container");
let cards [];
let firstCard, secondCard; 
let lockBoard = false; 
let score = 0;

document.querySelector(".score").textContent = score; 

fetch("./data/cards.json")
.then((res) => res.json())
.then((data) => {
    cards = [...data,...data];
    shuffleCards();
    generateCards();
});

function shuffleCards() {
    let currentIndex = cards.length,
    randomIndex,
    temporaryValue;
    while(currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
}

function generateCards() {
    for (let cards of cards) {
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
cardElement.addEventListener("click", flipcard);
}
}

function flipCard () {
    if(lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return; 

    secondCard = this;
    score ++;
    document.querySelector(".score").textContent = score;
    lockBoard = true;
    }
function matchCheck ();
  
}

function matchCheck () {
    let isMatch = firstCard.datasetname === secondCard.dataset.name;

    isMatch ? disableCards () : unflipCards();
}

// following code from https://youtu.be/xWdkt6KSirw