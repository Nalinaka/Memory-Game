// Clicking on Enter button
// New images displayed of hidden cards = creating board
// then game startes - shuffling board
    //define functions 
    // fit screen in css or late

    let lightScore = 0

    let darkScore = 0

    let weight = 11

    let shuffledCardArray = []

    let cardArray = [
        {name: "Yoda", id:"Yoda1", allegiance: "light-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ApB54YlPe5lmJ41Zo415suCA9sWim_aTHA&usqp=CAU", },
        {name:"Yoda", id:"Yoda2", allegiance: "light-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ApB54YlPe5lmJ41Zo415suCA9sWim_aTHA&usqp=CAU", },
        {name: "Grogu", id:"Grogu1", allegiance: "light-side", flipped: false,  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JPwGc930J9FkQ2fxykEUWlUkCwtotSbmHg&usqp=CAU", },
        {name: "Grogu", id:"Grogu2", allegiance: "light-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2JPwGc930J9FkQ2fxykEUWlUkCwtotSbmHg&usqp=CAU", },
        {name: "Darth Vader", id:"DarthVader1", allegiance: "dark-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuxLoZiu9cyoCq5fwPK3W5pIqhFlAQeEcyA&usqp=CAU", },
        {name: "Darth Vader", id:"DarthVader2", allegiance: "dark-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZuxLoZiu9cyoCq5fwPK3W5pIqhFlAQeEcyA&usqp=CAU", },
        {name: "Darth Maul", id:"DarthMaul1", allegiance: "dark-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wcFyVnejaqJWWu1940Nte5ifeKMiPbrlbA&usqp=CAU", },
        {name: "Darth Maul", id:"DarthMaul2", allegiance: "dark-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1wcFyVnejaqJWWu1940Nte5ifeKMiPbrlbA&usqp=CAU", },
        {name: "Jabba the Hutt", id:"JabbatheHutt1", allegiance: "dark-side", flipped: false, img:"https://tinyurl.com/3m7kj4n7", },
        {name: "Jabba the Hutt", id:"JabbatheHutt2", allegiance: "dark-side", flipped: false, img:"https://tinyurl.com/3m7kj4n7", },
        {name: "Hans Solo", id:"HansSolo1", allegiance: "light-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM7DA6gL2xgCP8lkybHNNImEMirwuX4zqyQ&usqp=CAU", },
        {name: "Hans Solo", id:"HansSolo2", allegiance: "light-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM7DA6gL2xgCP8lkybHNNImEMirwuX4zqyQ&usqp=CAU", },
        {name: "Kylo Ren", id:"KyloRen1", allegiance: "dark-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6b1PyzX_LhHkeMykPjW2kBUQFGukAcT_3ew&usqp=CAU", },
        {name: "Kylo Ren", id:"KyloRen2", allegiance: "dark-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6b1PyzX_LhHkeMykPjW2kBUQFGukAcT_3ew&usqp=CAU", },
        {name: "The Mandalorian", id:"TheMandalorian1", allegiance: "light-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKnm5e6G5H021X9UBvvaDR5-wWIbyAJ6m5A&usqp=CAU", },
        {name: "The Mandalorian", id:"TheMandalorian2", allegiance: "light-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNKnm5e6G5H021X9UBvvaDR5-wWIbyAJ6m5A&usqp=CAU", },
        {name: "Barriss Offee", id:"BarrissOffee1", allegiance: "dark-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6AfhevbacAZ9exIjIuZvyseziI6NE6T9eg&usqp=CAU", },
        {name: "Barriss Offee", id:"BarrissOffee2", allegiance: "dark-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6AfhevbacAZ9exIjIuZvyseziI6NE6T9eg&usqp=CAU", },
        {name: "Ashoka Tano", id:"AshokaTano1", allegiance: "light-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmkuqrN4Dz80Qs5bbL4M5999OUNtXLIQRMA&usqp=CAU", },
        {name: "Ashoka Tano", id:"AshokaTano2", allegiance: "light-side", flipped: false, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmkuqrN4Dz80Qs5bbL4M5999OUNtXLIQRMA&usqp=CAU", },
       
    ];

    let allCards = 0

    const boardContainer = document.getElementById("Board-container")

    
    //event listener for play button
const playButton = document.querySelector("#PLAY")
playButton.addEventListener('click', createBoard)

// document.getElementById('cards').appendChild(img)

function createBoard() {
    shuffleCards(cardArray);
    // remove existing divs with class of each card, so it doesn't create board twice once click enter, add light side and dark side
   //  document.querySelector('.each-card').remove()
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
		
	}
}


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
                  
let firstCard, secondCard;
                               


function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
    resetBoard();
    
}
function flipCard () {
    console.log(this);
    if (this === firstCard) return;
    
    this.classList.add("flipped");
    
    if (!firstCard) {
        firstCard = this;
        return; 
    }
    secondCard = this;
    if (secondCard.getAttribute('data-name') === firstCard.getAttribute('data-name')) {
        // console.log(firstCard,secondCard);
        firstCard.flipped = true;    
        secondCard.flipped = true;
        addWeightedValue(secondCard)
        console.log(firstCard.flipped)
        console.log(weight)
        console.log(lightScore)
        console.log(darkScore)
        
        disableCards ();
        
    } else {
        unflipCards ();
        firstCard.flipped = false;
        secondCard.flipped = false;
    }
}

function addWeightedValue(winningCard) {
    if (winningCard.allegiance === "light-side") {
        console.log(winningCard.allegiance)
        return (lightScore +=( 1 * weight));
    } else if(winningCard.allegiance ==="dark-side"){
        return (darkScore += ( 1 * weight));
    }
    weight--;
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

// function restart() {
//     resetBoard();
//     shuffleCards();
//     score = 0;
//     document.querySelector(".score").textContent = score;
//     boardContainer.innerHTML = "";
//     generateCards();
// }
// following code above from https://youtu.be/xWdkt6KSirw


function checkWon() {
    for (let i = 0; i < cardArray.length; i++) {

    if (cardArray[i].flipped = true) {  
        allCards++
        if ((allCards===20) && (lightScore > darkScore)){
            alert("You are a Jedi!")
        
            } else if((allCards===20) && (lightScore < darkScore)){
            alert("You are a Sith!")
        }
    }
    
}
}

    // Initially used: 

    // function checkWon() {
    //     if (cardsWon == cardArray.length / 2) {
    //     alert("You won") 
    //     setTimeout(()=> popup.style.display = "flex" ,300); 
    //     }
    //     }

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
     