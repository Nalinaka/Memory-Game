document.addEventListener("DOMContentLoaded", function () {
    //define functions 
    
    createBoard(grid, cardArray); 
    arrangeCard();
    playAgain.addEventListener("click", replay); 
    
    //add a click function for images 
    
    imgs = document.querySelectorAll("img");
    Array.from(imgs).forEach(img => 
    img.addEventListener("click", flipCard)
    ) 
    });
    
const buttonsContainer = document.querySelector(".buttons-container");
let cards = []
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
    score = 0;
    document.querySelector(".score").textContent = score;
    gridContainer.innerHTML = "";
    generateCards();
}
// following code above from https://youtu.be/xWdkt6KSirw


function checkWon() {
if (cardsWon == cardArray.length / 2) {
alert("You won") 
setTimeout(()=> popup.style.display = "flex" ,300); 
}
}

let cardArray = [
    {name: "Yoda", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ApB54YlPe5lmJ41Zo415suCA9sWim_aTHA&usqp=CAU", },
    {name: "Yoda", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ApB54YlPe5lmJ41Zo415suCA9sWim_aTHA&usqp=CAU", },
    {name: "Grogu", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JPwGc930J9FkQ2fxykEUWlUkCwtotSbmHg&usqp=CAU", },
    {name: "Grogu", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JPwGc930J9FkQ2fxykEUWlUkCwtotSbmHg&usqp=CAU", },
    {name: "Darth Vader", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuxLoZiu9cyoCq5fwPK3W5pIqhFlAQeEcyA&usqp=CAU", },
    {name: "Darth Vader", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wcFyVnejaqJWWu1940Nte5ifeKMiPbrlbA&usqp=CAU", },
    {name: "Darth Maul", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wcFyVnejaqJWWu1940Nte5ifeKMiPbrlbA&usqp=CAU", },
    {name: "Darth Maul", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wcFyVnejaqJWWu1940Nte5ifeKMiPbrlbA&usqp=CAU", },
    {name: "Jabba the Hutt", img:"https://static.wikia.nocookie.net/disney/images/d/df/Profile_-_Jabba_the_Hutt.jpg/revision/latest?cb=20190728025948", },
    {name: "Jabba the Hutt", img:"https://static.wikia.nocookie.net/disney/images/d/df/Profile_-_Jabba_the_Hutt.jpg/revision/latest?cb=20190728025948", },
    {name: "Hans Solo", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM7DA6gL2xgCP8lkybHNNImEMirwuX4zqyQ&usqp=CAU", },
    {name: "Hans Solo", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM7DA6gL2xgCP8lkybHNNImEMirwuX4zqyQ&usqp=CAU", },
    {name: "Kylo Ren", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6b1PyzX_LhHkeMykPjW2kBUQFGukAcT_3ew&usqp=CAU", },
    {name: "Kylo Ren", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6b1PyzX_LhHkeMykPjW2kBUQFGukAcT_3ew&usqp=CAU", },
    {name: "The Mandalorian", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKnm5e6G5H021X9UBvvaDR5-wWIbyAJ6m5A&usqp=CAU", },
    {name: "The Mandalorian", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKnm5e6G5H021X9UBvvaDR5-wWIbyAJ6m5A&usqp=CAU", },
    {name: "Barriss Offee", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6AfhevbacAZ9exIjIuZvyseziI6NE6T9eg&usqp=CAU", },
    {name: "Barriss Offee", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6AfhevbacAZ9exIjIuZvyseziI6NE6T9eg&usqp=CAU", },
    {name: "Ashoka Tano", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmkuqrN4Dz80Qs5bbL4M5999OUNtXLIQRMA&usqp=CAU", },
    {name: "Ashoka Tano", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmkuqrN4Dz80Qs5bbL4M5999OUNtXLIQRMA&usqp=CAU", },
https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKnm5e6G5H021X9UBvvaDR5-wWIbyAJ6m5A&usqp=CAU
]

let grid = document.querySelector(".grid"); 
let scoreBoard = document.querySelector(".scoreBoard"); 
let popup = document.querySelector(".popup"); 
let playAgain = document.querySelector(".playAgain"); 
let clickBoard = document.querySelector(".clickBoard"); 
let imgs; 
let cardsId = []; 
let cardsSelected = []; 
let cardsWon = 0; 
let clicks = 0;