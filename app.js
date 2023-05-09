// Clicking on Enter button
// New images displayed of hidden cards = creating board
// then game startes - shuffling board
    //define functions 
    // fit screen in css or late

    let shuffledCardArray = []

    let cardArray = [
        {name: "Yoda", id:"Yoda1", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ApB54YlPe5lmJ41Zo415suCA9sWim_aTHA&usqp=CAU", },
        {name: "Yoda", id:"Yoda2", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ApB54YlPe5lmJ41Zo415suCA9sWim_aTHA&usqp=CAU", },
        {name: "Grogu", id:"Grogu1", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JPwGc930J9FkQ2fxykEUWlUkCwtotSbmHg&usqp=CAU", },
        {name: "Grogu", id:"Grogu2", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JPwGc930J9FkQ2fxykEUWlUkCwtotSbmHg&usqp=CAU", },
        {name: "Darth Vader", id:"DarthVader1", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuxLoZiu9cyoCq5fwPK3W5pIqhFlAQeEcyA&usqp=CAU", },
        {name: "Darth Vader", id:"DarthVader2", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuxLoZiu9cyoCq5fwPK3W5pIqhFlAQeEcyA&usqp=CAU", },
        {name: "Darth Maul", id:"DarthMaul1", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wcFyVnejaqJWWu1940Nte5ifeKMiPbrlbA&usqp=CAU", },
        {name: "Darth Maul", id:"DarthMaul2", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wcFyVnejaqJWWu1940Nte5ifeKMiPbrlbA&usqp=CAU", },
        {name: "Jabba the Hutt", id:"JabbatheHutt1", img:"https://tinyurl.com/3m7kj4n7", },
        {name: "Jabba the Hutt", id:"JabbatheHutt2", img:"https://tinyurl.com/3m7kj4n7", },
        {name: "Hans Solo", id:"HansSolo1", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM7DA6gL2xgCP8lkybHNNImEMirwuX4zqyQ&usqp=CAU", },
        {name: "Hans Solo", id:"HansSolo2", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM7DA6gL2xgCP8lkybHNNImEMirwuX4zqyQ&usqp=CAU", },
        {name: "Kylo Ren", id:"KyloRen1", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6b1PyzX_LhHkeMykPjW2kBUQFGukAcT_3ew&usqp=CAU", },
        {name: "Kylo Ren", id:"KyloRen2", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6b1PyzX_LhHkeMykPjW2kBUQFGukAcT_3ew&usqp=CAU", },
        {name: "The Mandalorian", id:"TheMandalorian1", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKnm5e6G5H021X9UBvvaDR5-wWIbyAJ6m5A&usqp=CAU", },
        {name: "The Mandalorian", id:"TheMandalorian2", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKnm5e6G5H021X9UBvvaDR5-wWIbyAJ6m5A&usqp=CAU", },
        {name: "Barriss Offee", id:"BarrissOffee1", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6AfhevbacAZ9exIjIuZvyseziI6NE6T9eg&usqp=CAU", },
        {name: "Barriss Offee", id:"BarrissOffee2", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6AfhevbacAZ9exIjIuZvyseziI6NE6T9eg&usqp=CAU", },
        {name: "Ashoka Tano", id:"AshokaTano1", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmkuqrN4Dz80Qs5bbL4M5999OUNtXLIQRMA&usqp=CAU", },
        {name: "Ashoka Tano", id:"AshokaTano2", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmkuqrN4Dz80Qs5bbL4M5999OUNtXLIQRMA&usqp=CAU", },
       
    ];


    const boardContainer = document.getElementById("Board-container")


    // const game = {
    //     backImages: [cardArray],
    //     cardsSelected: [],
    //     cardsMatched: [],
    //     pendingMoves: 100, 
    //     shuffledBackImages: [],
    //     time: 0,
    //     timeInterval: 0
    // }
    
    //event listener for play button
const playButton = document.querySelector("#PLAY")
playButton.addEventListener('click', createBoard)

// document.getElementById('cards').appendChild(img)

function createBoard() {
    shuffleCards(cardArray);
	for (let x = 0; x < cardArray.length; x++) {
		// insert Hexagon background
		let img = document.createElement("img");
		img.src = "assets/pattern_hexagon-4_1_5_0-0_110_1__ffffff_868998.png";
	        img.style.width = "100px"
        img.style.height = "100px"

        // insert character background
        let img2 = document.createElement('img')
        img2.src = cardArray[x].img
        img2.style.width="100px"
        img2.style.height="100px"
        
	let card = document.createElement("div");
        // card.setAttribute("id", cardArray[x].id);
				card.setAttribute("data-name", cardArray[x].name);
				card.setAttribute("class", "each-card");
        card.append(img)
        card.append(img2)
        card.addEventListener('click', flipCard)
        boardContainer.append(card);
		// card.addEventListener("click", flipCard);
		//


		
	}
    // return boardContainer
}
    

    // Above was taken out of createBoard

    //       card.style.display = "none"
    // Unable to use this with front image url
      // const addCards = document.querySelector("addcards")

      //cardArray[x].name

              //body.style.frontImage=`url(${assets\pattern_hexagon-4_1_5_0-0_110_1__ffffff_868998.png})`;
        //card.style.backgroundImage = "url(" + cardArray[x].img + ")"
        // shuffleCards(cardArray)

     //   CHECK IF CODE BELOW FOR EVENT LISTENER IS CORRECT //
    // const shuffleCards = document.querySelector("#PLAY")
    // shuffleCards.addEventListener('click', shuffleCards)

    function shuffleCards(cardArray) {
        let currentIndex = cardArray.length,
          randomIndex,
          temporaryValue;

        while(currentIndex !==0) {
           randomIndex = Math.floor(Math.random() * currentIndex);
           currentIndex -= 1,
           temporaryValue = cardArray[currentIndex];
           cardArray[currentIndex] = cardArray[randomIndex];
           cardArray[randomIndex] = temporaryValue;
        }
                   }

                                  

//  //  getFrontImage() {
//    frontCard.src="assets\pattern_hexagon-4_1_5_0-0_110_1__ffffff_868998.png";
//   context.drawImage(frontCard,width,height);
//   return imageArray[]
    
//    }

// Write event listener for flipCard
// const playButton = document.querySelector("#PLAY")
// playButton.addEventListener('click', createBoard)
    
function flipCard () {
    console.log(this);
    if (this === firstCard) return;

    this.classList.add("flipped");

    if (!firstCard) {
        firstCard = this;
        return; 
    }
    secondCard = this;
    if (secondCard == firstCard) {
        matchCheck ();
    }
   
}

// CHECK IS THE BELOW EVENT LISTENER CORRECT??
// const matchCheck = document.querySelector("#flipCard")
// playButton.addEventListener('click', matchCheck)

function matchCheck () {
    let isMatch = firstCard.datasetname === secondCard.dataset.name;

    isMatch ? disableCards () : unflipCards();
}

// CHECK BELOW CODE:

//const disableCards = document.querySelector("#matchCheck")
// playButton.addEventListener('click', disableCards)


function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    resetBoard();
}

//Check below event listener - need assistance to fix this one:

//const matchCheck = document.querySelector("#flipCard")
// playButton.addEventListener('click', matchCheck)


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
    boardContainer.innerHTML = "";
    generateCards();
}
// following code above from https://youtu.be/xWdkt6KSirw


function checkWon() {
if (cardsWon == cardArray.length / 2) {
alert("You won") 
setTimeout(()=> popup.style.display = "flex" ,300); 
}
}


let firstCard, secondCard; 

// // https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKnm5e6G5H021X9UBvvaDR5-wWIbyAJ6m5A&usqp=CAU


// let grid = document.querySelector(".grid"); 
// let scoreBoard = document.querySelector(".scoreBoard"); 
// let popup = document.querySelector(".popup"); 
// let playAgain = document.querySelector(".playAgain"); 
// let clickBoard = document.querySelector(".clickBoard"); 
// let imgs; 
// let cardsId = []; 
// let cardsSelected = []; 
// let cardsWon = 0; 
// let clicks = 0;
//     //add a click function for images 
    
//     imgs = document.querySelectorAll("img");
//     Array.from(imgs).forEach(img => 
//     img.addEventListener("click", flipCard)
//     ) 
    
//     document.addEventListener("DOMContentLoaded", function () {
//     })

    
// const buttonsContainer = document.querySelector(".buttons-container");
// let cards = []

// let lockBoard = false; 
// let score = 0;

// document.querySelector(".score").textContent = score; 

// fetch("./data/cards.json")
// .then((res) => res.json())
// .then((data) => {
//     cards = [...data,...data];
//     shuffleCards();
//     generateCards();
// });

   // player.innerHTML = ''

     
        //remove event listener from play button once cards are added to the card holder
     