console.log("Welcome to Rock Paper Scissors Game!")
console.log("type game() to play!")

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
    playerSelection = prompt("Choose rock,paper or scissors").toLowerCase()
    computerSelection = computerPlay()
    if (playerSelection === "rock" && computerSelection === "rock"){
        yourScore++
        computerScore++
        return "Rock to Rock"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++
        return "Paper beats Rock!"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        yourScore++
        return "Rock beats Scissors!"
    } else if (playerSelection === "paper" && computerSelection === "paper"){
        yourScore++
        computerScore++
        return "Paper to Paper"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++
        return "Scissors beats Paper!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        yourScore++
        return "Paper Beats Rock!"
    } else if (playerSelection === "scissors" && computerSelection === "scissors"){
        yourScore++
        computerScore++
        return "Scissors to Scissors"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++
        return "Rock beats Scissors!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        yourScore++
        return "Scissors beats Paper"
    } 
}

let game = () => {
    for (let i = 0; i<5; i++){
        console.log(playRound(playerSelection,computerSelection))
        console.log(`computer score is ${computerScore}`)
        console.log(`your score is ${yourScore}`)
    }
    if (computerScore > yourScore) {
        console.log("Computer Won,better luck next time!")
    } else if (yourScore > computerScore) {
        console.log("Congratulations You Won!")
    } else {
        console.log("Its a Tie!")
    }
    };