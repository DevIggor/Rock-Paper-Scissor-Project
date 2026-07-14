function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let humanChoice = window.prompt("Shoot your shot!");
    return humanChoice.trim().toLowerCase();
}

let humanScore = 0;
let machineScore = 0;

function playRound(humanChoice, machineChoice) {
    if (humanChoice === machineChoice) {
        return "It's a tie!";
    } else if (
        (humanChoice === "rock" && machineChoice === "scissors") ||
        (humanChoice === "scissors" && machineChoice === "paper") ||
        (humanChoice === "paper" && machineChoice === "rock")
    ) {
        humanScore++;
        return "Player wins!";
    } else {
        machineScore++;
        return "Machine wins!";
    }
}

function PlayTime() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice();
        let machineChoice = getComputerChoice();
        console.log(`Round ${i + 1}: you choose ${humanChoice}, machine choose ${machineChoice}`);
        console.log(playRound(humanChoice, machineChoice));
    }
    console.log(`FInal Score -> You: ${humanScore} | Machine: ${machineScore}`);
}

PlayTime();