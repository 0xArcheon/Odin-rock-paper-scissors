let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let ScissorsBtn = document.querySelector(".scissors");
let option = document.querySelectorAll(".option");
let modalbg = document.querySelector(".modal-bg");
let close = document.querySelector(".close");
let modalMText = document.querySelector(".msg");
let modalSText = document.querySelector(".sub-msg");
let againBtn = document.querySelector(".play-again");
let userScoreTbl = document.querySelector(".userScore");
let cpuScoreTbl = document.querySelector(".cpuScore");

let userInput;
let userScore = 0;
let computerScore = 0;

close.addEventListener("click", function(){
    modalbg.classList.remove("active");
});
againBtn.addEventListener("click", function(){
    modalbg.classList.remove("active");
});
option.forEach((btn)=>{
    btn.addEventListener("click", function () {
        modalbg.classList.add("active");
        userInput = btn.id;
        userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
        game();
    });
});
function game() {
    
        let playerSelection = userInput;
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection,computerSelection));
        console.log("You: "+userScore+ "\nComputer: "+computerScore);
    
    /* if(userScore > computerScore) {
        console.log("CONGRATS! You win the game");
    }
    else {
        console.log("SORRY! You lost the game");
    } */
}

function playRound(playerSelection, computerSelection) {
    switch (true) {
        case ((playerSelection === "Rock") && (computerSelection === "Rock")) :
            modalMText.textContent = "DRAW";
            modalSText.textContent = "CPU also chose Rock";
            return `DRAW!`;
            break;
        case ((playerSelection === "Paper") && (computerSelection === "Paper")) :
            modalMText.textContent = "DRAW";
            modalSText.textContent = "CPU also chose Paper";
            return `DRAW!`;
            break;
        case ((playerSelection === "Scissors") && (computerSelection === "Scissors")) :
            modalMText.textContent = "DRAW";
            modalSText.textContent = "CPU also chose Scissors";
            return `DRAW!`;
            break;
        case ((playerSelection === "Rock") && (computerSelection === "Paper")) :
            modalMText.textContent = "You Lost";
            modalSText.textContent = "CPU chose Paper";
            computerScore = computerScore + 1;
            cpuScoreTbl.textContent = computerScore;
            return `You LOSE! Paper beats Rock`;
            break;
        case ((playerSelection === "Rock") && (computerSelection === "Scissors")) :
            modalMText.textContent = "You WIN";
            modalSText.textContent = "CPU chose Scissors";
            userScore = userScore + 1;
            userScoreTbl.textContent = userScore;
            return `You WIN! Rock beats Scissors`;
            break;
        case ((playerSelection === "Paper") && (computerSelection === "Rock")) :
            modalMText.textContent = "You WIN";
            modalSText.textContent = "CPU chose Rock";
            userScore = userScore + 1;
            userScoreTbl.textContent = userScore;
            return `You WIN! Paper beats Rock`;
            break;
        case ((playerSelection === "Paper") && (computerSelection === "Scissors")) :
            modalMText.textContent = "You Lost";
            modalSText.textContent = "CPU chose Scissors";
            computerScore = computerScore + 1;
            cpuScoreTbl.textContent = computerScore;
            return `You LOSE! Scissors beat Paper`;
            break;
        case ((playerSelection === "Scissors") && (computerSelection === "Rock")) :
            modalMText.textContent = "You LOST";
            modalSText.textContent = "CPU chose Rock";
            computerScore = computerScore + 1;
            cpuScoreTbl.textContent = computerScore;
            return `You LOSE! Rock beats Scissors`;
            break;
        case ((playerSelection === "Scissors") && (computerSelection === "Paper")) :
            modalMText.textContent = "You WIN";
            modalSText.textContent = "CPU chose Paper";
            userScore = userScore + 1;
            userScoreTbl.textContent = userScore;
            return `You WIN! Scissors beat Paper`;
            break;
        default : 
            return `Please enter a valid input`;
    }
}

/* function getUserInput() {
    let userInput = (prompt("Select Rock, Paper or Scissors")).toString();
    userInput = userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
    return userInput;
} */

function computerPlay() {
    let comInput = ["Rock", "Paper", "Scissors"];
    let randomIndex = (Math.floor(Math.random() * 3));
    return comInput[randomIndex];
}

                         
