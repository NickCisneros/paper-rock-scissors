function getComputerChoice() {
    
    let a = Math.random()

    if (a >= .66) {
        return "Paper"
    } else if (a >= .33) {
        return "Rock"
    } else if (a >= 0) {
        return "Scissors"
    }
}

function getHumanChoice() {
    let answer = prompt("rock, paper, or scissors?")

    if (answer === null) {
        return "Come on, Gamer!"
    } else if (answer === "rock") {
        return "Rock"
    } else if (answer === "paper") {
        return "Paper"
    } else if (answer === "scissors") {
        return "Scissors"
    }
}

let humanScore = 0;
let computerScore = 0;