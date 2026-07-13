/*The user will play against the machine. Create a function that randomly displays rock/paper/scissor.*/

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock!";
    } else if (randomNumber === 1) {
        return "paper!";
    } else {
        return "scissors!";
    }
}

console.log(getComputerChoice());