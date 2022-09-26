
const rockBtn = document.querySelector('.rock-btn');
const paperBtn = document.querySelector('.paper-btn');
const scissorsBtn = document.querySelector('.scissors-btn');
const resultDisplay = document.querySelector(".result");
let playerScore = 0;
let computerScore = 0;
const playerResult = document.querySelector(".player-score");
const computerResult = document.querySelector(".computer-score");
const winner = document.querySelector(".winner");

//function that generates random choice between "Rock, Paper and Scissors"
function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
    }
}

// function that compares between player and computer choices and returns the winner
function playRound(playerSelection, computerSelection) {
    const winMessage =  `Round Winner: The Player ${playerSelection} beats ${computerSelection}`;
    const loseMessage = `Round Winner: The Computer ${computerSelection} beats ${playerSelection}`;
    const tieMessage = "its a tie";

    if (playerSelection === "Rock") {
        switch (true) {
            case (computerSelection === "Paper"):
                resultDisplay.textContent = loseMessage;
                return "lose";
            case (computerSelection === "Scissors"):
                resultDisplay.textContent = winMessage;
                return "win";
            default:
                resultDisplay.textContent = tieMessage;
        }
    } else if (playerSelection === "Paper") {
        switch (true) {
            case (computerSelection === "Scissors"):
                resultDisplay.textContent = loseMessage;
                return "lose";
            case (computerSelection === "Rock"):
                resultDisplay.textContent = winMessage;
                return "win";
            default:
                resultDisplay.textContent = tieMessage;
        }
    } else {
        switch (true) {
            case (computerSelection === "Rock"):
                resultDisplay.textContent = loseMessage;
                return "lose";
            case (computerSelection === "Paper"):
                resultDisplay.textContent = winMessage;
                return "win";
            default:
                resultDisplay.textContent = tieMessage;
        }
    }
}

// Control The Game and Display the Winner
function game(playerSelection, computerSelection) {
    // condition to stop the game if either player won
    if (playerScore === 5 || computerScore === 5) return;

    // running each round and update the players score
    if (playRound(playerSelection, computerSelection) === "win") {
        playerScore++;
        playerResult.textContent = "The Player Score: " + playerScore;
    } else if (playRound(playerSelection, computerSelection) === "lose") {
        computerScore++;
        computerResult.textContent = "The Computer Score: " + computerScore;
    } else {
        return;
    }

    // display the winner of the highest score
    if (playerScore === 5) winner.textContent = "Match Winner: The Player";
    else if (computerScore === 5) winner.textContent = "Match Winner: The COMPUTER";
}
    

// start the game
rockBtn.addEventListener("click", () => game('Rock', getComputerChoice()));
paperBtn.addEventListener("click", () => game('Paper', getComputerChoice()));
scissorsBtn.addEventListener("click", () => game('Scissors', getComputerChoice()));
 