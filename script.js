let userScore = 0;
let computerScore = 0;
game();
function game() {
    for(let i = 0; i<5 ; i++)
    {
        let playerSelection = getUserInput();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
        console.log("You: "+userScore+ "\nComputer: "+computerScore);
    }
    if(userScore > computerScore) {
        console.log("CONGRATS! You win the game");
    }
    else {
        console.log("SORRY! You lost the game");
    }
}

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
            computerScore = computerScore + 1;
            return `You LOSE! Paper beats Rock`;
            break;
        case ((playerSelection === "Rock") && (computerSelection === "Scissors")) :
            userScore = userScore + 1;
            return `You WIN! Rock beats Scissors`;
            break;
        case ((playerSelection === "Paper") && (computerSelection === "Rock")) :
            userScore = userScore + 1;
            return `You WIN! Paper beats Rock`;
            break;
        case ((playerSelection === "Paper") && (computerSelection === "Scissors")) :
            computerScore = computerScore + 1;
            return `You LOSE! Scissors beat Paper`;
            break;
        case ((playerSelection === "Scissors") && (computerSelection === "Rock")) :
            computerScore = computerScore + 1;
            return `You LOSE! Rock beats Scissors`;
            break;
        case ((playerSelection === "Scissors") && (computerSelection === "Paper")) :
            userScore = userScore + 1;
            return `You WIN! Scissors beat Paper`;
            break;
        default : 
            return `Please enter a valid input`;
    }
}

function getUserInput() {
    // let userInput = (prompt("Select Rock, Paper or Scissors")).toString();
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    return userInput;
}

function computerPlay() {
    let comInput = ["Rock", "Paper", "Scissors"];
    let randomIndex = (Math.floor(Math.random() * 3));
    return comInput[randomIndex];
}

                         
