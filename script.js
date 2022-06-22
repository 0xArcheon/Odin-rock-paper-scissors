let playerSelection = getUserInput();
let computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case ((playerSelection === "Rock") && (computerSelection === "Rock")) :
            return `DRAW!`;
            break;
        case ((playerSelection === "Paper") && (computerSelection === "Paper")) :
            return `DRAW!`;
            break;
        case ((playerSelection === "Scissors") && (computerSelection === "Scissors")) :
            return `DRAW!`;
            break;
        case ((playerSelection === "Rock") && (computerSelection === "Paper")) :
            return `You LOSE! Paper beats Rock`;
            break;
        case ((playerSelection === "Rock") && (computerSelection === "Scissors")) :
            return `You WIN! Rock beats Scissors`;
            break;
        case ((playerSelection === "Paper") && (computerSelection === "Rock")) :
            return `You WIN! Paper beats Rock`;
            break;
        case ((playerSelection === "Paper") && (computerSelection === "Scissors")) :
            return `You LOSE! Scissors beat Paper`;
            break;
        case ((playerSelection === "Scissors") && (computerSelection === "Rock")) :
            return `You LOSE! Rock beats Scissors`;
            break;
        case ((playerSelection === "Scissors") && (computerSelection === "Paper")) :
            return `You WIN! Scissors beat Paper`;
            break;
        default : 
            return `Please enter a valid input`;
    }
}

function getUserInput() {
    let userInput = (prompt("Select Rock, Paper or Scissors")).toString();
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    return userInput;
}

function computerPlay() {
    let comInput = ["Rock", "Paper", "Scissors"];
    let randomIndex = (Math.floor(Math.random() * 3));
    return comInput[randomIndex];
}

                         
