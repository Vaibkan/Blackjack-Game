
let cards = []
let sum = 0
let messageel = document.getElementById("message-el")
let sumel = document.getElementById("sum-el")
let cardsel = document.getElementById("cards-el") 
let hasBlackjack = false
let isAlive = false

function getRandomCard() {
    let random = Math.floor(Math.random() * 13) + 1
    if (random > 10) {
        return 10
    } else if (random === 1){
        return 11
    } else {
        return random
    }

}

function startgame() {
    isAlive = true
    let firstCard = getRandomCard
    let secondCard = getRandomCard
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsel.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsel.textContent += cards[i] + " "
    }

    sumel.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack(You WON)!"
        hasBlackjack = true
    } else {
        message = "Whoops you're out of the game!"
        isAlive = false
    }
    messageel.textContent = message
}

function newcard() {
    if (isAlive === true && hasBlackjack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}