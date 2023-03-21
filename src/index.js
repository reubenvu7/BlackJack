let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl= document.getElementById("sum-el")
let cardEl= document.getElementById("card-el")

let player = {
     name: "Reuben",
     chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


// Function declaration 
function getrandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if(randomNumber > 10) {
      return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
      return randomNumber
  }
}

function startGame () {
    if(confirm("Ready to start the game?")) {
    }
    isAlive = true
    let firstCard = getrandomCard ()
    let secondCard = getrandomCard ()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame ()
}
function renderGame() {
    cardEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i += 1) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

if (sum <= 20) {
    message  = "Do you want to draw a card?"
} else if (sum === 21) {
    message = "Blackjack"
    hasBlackJack = true
} else {
    message = "You are out of the game"
    isAlive = false
}
messageEl.textContent = message
}

function newCard () { 
    if(isAlive === true && hasBlackJack === false) {
    let card = getrandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}