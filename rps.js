console.log("hello world")

let computerPlay = () => {
   let number = Math.floor(Math.random() * 3) + 1
    if (number === 1) {
        return "rock"
    } else if (number === 2) {
        return "paper"
    } else if (number === 3) {
        return "scissors"
    }
};

let playerSelection = "rock"
let computerSelection = computerPlay()
let yourScore = 0
let computerScore = 0


let playRound = (playerSelection,computerSelection) => {
    playerSelection = prompt().toLowerCase()
    computerSelection = computerPlay()
    if (playerSelection === "rock" && computerSelection === "rock"){
        return "its a tie"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "computer Won"
        computerScore++
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Won"
        yourScore++
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        return "its a tie"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "computer Won"
        computerScore++
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Won"
        yourScore++
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "its a tie"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "computer Won"
        computerScore++
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Won"
        yourScore++
    } 
}

let game = () => {
    for (let i = 0; i<5; i++){
        console.log(playRound(playerSelection,computerSelection))
    }
    }