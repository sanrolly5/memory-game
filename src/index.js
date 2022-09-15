document.addEventListener('DOMContentLoaded', ()=>{
const cards =[
    {
        name: "messi",
        img: "src/images/messi.png"
    },
    {
        name: "bayern",
        img: "src/images/bayern.png"
    },
    {
        name: "paris",
        img:"src/images/paris.png"
    },
    {
        name:"dortmund",
        img:"src/images/dortmund.png"
    },
    {
        name:"messi2",
        img:"src/images/messi2.png"
    },
    {
        name:"santafe",
        img:"src/images/santafe.png"
    },
    {
        name:"realmadrid",
        img:"src/images/real-es.png"
    },
    {
        name: "barcaes",
        img:"src/images/barcaes.png"
    },
    {
        name: "messi",
        img: "src/images/messi.png"
    },
    {
        name: "bayern",
        img: "src/images/bayern.png"
    },
    {
        name: "paris",
        img:"src/images/paris.png"
    },
    {
        name:"dortmund",
        img:"src/images/dortmund.png"
    },
    {
        name:"messi2",
        img:"src/images/messi2.png"
    },
    {
        name:"santafe",
        img:"src/images/santafe.png"
    },
    {
        name:"realmadrid",
        img:"src/images/real-es.png"
    },
    {
        name: "barcaes",
        img:"src/images/barcaes.png"
    },
]
cards.sort(()=> 0.5-Math.random())
console.log(cards)

const grid = document.querySelector(".grid")
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []
const resultDisplay = document.querySelector("#result")

function createBoard(){
    for (let i =0; i < cards.length; i++){
        const card = document.createElement("img")
        card.setAttribute("src", "src/images/blank.png")
        card.setAttribute("data-id", i)
        card.addEventListener("click", turnArround)
        grid.appendChild(card)
    }
}


function turnArround(){
    let cardId = this.getAttribute("data-id")
    cardsChosen.push(cards[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute("src", cards[cardId].img)
    if (cardsChosen.length === 2){
    setTimeout(checkForMatch, 100)
}
}

function checkForMatch() {
    const allCards = document.querySelectorAll("img")
    const optiononeId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optiononeId === optionTwoId) {
        alert ("You have clicked the same image")
        allCards[optiononeId].setAttribute("src", "src/images/blank.png")
        allCards[optionTwoId].setAttribute("src", "src/images/blank.png")
    } else if (cardsChosen[0] === cardsChosen[1]) {
        alert("Nice, you just got a match!")
        allCards[optiononeId].setAttribute("src", "src/images/white.png")
        allCards[optionTwoId].setAttribute("src", "src/images/white.png")
        allCards[optiononeId].removeEventListener("click", turnArround)
        allCards[optionTwoId].removeEventListener("click", turnArround)
        cardsWon.push(cardsChosen)
    } else {
        allCards[optiononeId].setAttribute("src", "src/images/blank.png")
        allCards[optionTwoId].setAttribute("src", "src/images/blank.png")
        alert ("Not a match, but keep triying")
    }
    
        cardsChosen = []
        cardsChosenIds = []

        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cards.length / 2) {
        resultDisplay.textContent = " Lets go, Messi would be proud of you ;)"
        }


console.log(cardsChosen)
console.log(cardsWon)
}


createBoard()
})