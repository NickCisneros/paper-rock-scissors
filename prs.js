


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

console.log(getComputerChoice())
