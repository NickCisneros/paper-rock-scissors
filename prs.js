function getComputerChoice() {
    
    let a = Math.random()

    if (a >= .66) {
        return "paper"
    } else if (a >= .33) {
        return "rock"
    } else if (a >= 0) {
        return "scissors"
    }
}

function getHumanChoice() {
    let answer = prompt("rock, paper, or scissors?")

    if (answer === "rock") {
        return "rock"
    } else if (answer === "paper") {
        return "paper"
    } else if (answer === "scissors") {
        return "scissors"
    } else { 
        return "I failed!" 
    }
}

let humanScore = 0;
let computerScore = 0;

function playground(humanChoice, computerChoice) {
    if (humanSelection === computerSelection) {
        return "Tie!"
    } else if ((humanSelection === "rock") && (computerSelection === "paper")) {
        return "Computer wins!"
    } else if ((humanSelection === "paper") && (computerSelection === "scissors")) {
        return "Computer wins!"
    } else if ((humanSelection === "scissors") && (computerSelection === "rock")) {
        return "Computer wins!"
    } else if ((humanSelection === "rock") && (computerSelection === "scissors")) {
        return "Human wins!"
    } else if ((humanSelection === "paper") && (computerSelection === "rock")) {
        return "Human wins!"
    } else if ((humanSelection === "scissors") && (computerSelection === "paper")) {
        return "Human wins!"
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playground(humanSelection, computerSelection))




