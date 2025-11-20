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
    let answer = prompt("Rock, Paper, or Scissors?")

    if (answer === null) {
        return "Not this time, Gamer!"
    } else if (answer.toLowerCase() === "rock") {
        return "Rock"
    } else if (answer.toLowerCase() === "paper") {
        return "Paper"
    } else if (answer.toLowerCase() === "scissors") {
        return "Scissors"
    }
}
