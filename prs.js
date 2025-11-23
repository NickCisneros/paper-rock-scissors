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

/*
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
        computerScore++;
        console.log("Rock loses to paper! Computer wins!");
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        computerScore++;
        console.log("Paper loses to scissors! Computer wins!");
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        computerScore++;
        console.log("Scissors loses to rock! Computer wins!");
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        humanScore++;
        console.log("Rock beats scissors! Human wins!");
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        humanScore++;
        console.log("Paper beats rock! Human wins!");
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        humanScore++;
        console.log("Scissors beats paper! Human wins!");
    }
}
*/

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie!");
    } else if (humanChoice === "rock") {
        if (computerChoice === "paper") {
        console.log("Rock loses to paper! Computer wins!")
        } else if (computerChoice === "scissors") {
        console.log("Rock beats scissors! Human wins!")
        }   
    } else if (humanChoice === "paper") {
        if (computerChoice === "scissors") {
        console.log("Paper loses to scissors! Computer wins!")
        } else if (computerChoice === "rock") {
        console.log("Paper beats rock! Human wins!")
        }   
    } else if (humanChoice === "scissors") {
        if (computerChoice === "rock") {
        console.log("Scissors loses to rock! Computer wins!")
        } else if (computerChoice === "paper") {
        console.log("Scissors beats paper! Human wins!")
        }   
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)




