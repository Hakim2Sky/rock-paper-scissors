
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

const playerSelection = prompt("choose between Rock, Paper and Scissors: ");
const computerSelection = getComputerChoice();

// function that compares between player and computer choices and returns the winner
function playRound(playerSelection, computerSelection) {

    let winMessage = `You win! ${playerSelection} beats ${computerSelection}`
    let loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`

    if (playerSelection.toLowerCase() == "rock") {
        switch (true) {
            case (computerSelection == "Scissors"):
                return winMessage;
                break;
            case (computerSelection == "Paper"):
                return loseMessage;
                break;
            default :
                return "its a tie"
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        switch (true) {
            case (computerSelection == "Rock"):
                return winMessage;
                break;
            case (computerSelection == "Scissors"):
                return loseMessage;
                break;
            default :
                return "its a tie"
        }
    } else if (playerSelection.toLowerCase() == "scissors"){
        switch (true) {
            case (computerSelection == "Paper"):
                return winMessage;
                break;
            case (computerSelection == "Rock"):
                return loseMessage;
                break;
            default :
                return "its a tie"
        }
    } else {
        return "something went wrong"
    }
}
console.log(playRound(playerSelection, computerSelection))