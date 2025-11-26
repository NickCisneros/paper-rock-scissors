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

    if (answer.toLowerCase() === "rock") {
        return "rock"
    } else if (answer.toLowerCase() === "paper") {
        return "paper"
    } else if (answer.toLowerCase() === "scissors") {
        return "scissors"
    } else { 
        return "I failed!" 
    }
}


function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("Tie!");
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                computerScore++;
                console.log("Rock loses to paper! Computer wins!");
            } else if (computerChoice === "scissors") {
                humanScore++;
                console.log("Rock beats scissors! Human wins!");
            }   
        } else if (humanChoice === "paper") {
            if (computerChoice === "scissors") {
                computerScore++;
                console.log("Paper loses to scissors! Computer wins!");
            } else if (computerChoice === "rock") {
                humanScore++;
                console.log("Paper beats rock! Human wins!");
            }   
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                computerScore++;
                console.log("Scissors loses to rock! Computer wins!")
            } else if (computerChoice === "paper") {
                humanScore++;
                console.log("Scissors beats paper! Human wins!");
            }   
        }
    }
    
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    
    if (humanScore > computerScore) {
        console.log("Human wins the game! GG!")
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game! BG!")
    } else if (humanScore === computerScore) {
        console.log("Tie game! Try again!")
    }
}

playGame()