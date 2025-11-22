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

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie!";
    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
        computerScore++;
        console.log("Computer wins!");
        return "Computer wins!";
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        computerScore++;
        console.log("Computer wins!");
        return "Computer wins!";
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        computerScore++;
        console.log("Computer wins!");
        return "Computer wins!";
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        humanScore++;
        console.log("Human wins!");
        return "Human wins!";
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        humanScore++;
        console.log("Human wins!");
        return "Human wins!";
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        humanScore++;
        console.log("Human wins!");
        return "Human wins!";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection))




