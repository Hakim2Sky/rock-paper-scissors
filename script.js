
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
    // store the messages that will be displayed after each round
    let winMessage = `You win! ${playerSelection} beats ${computerSelection}`
    let loseMessage = `You lose! ${computerSelection} beats ${playerSelection}`
    // if loop comparing between user and computer choices and returning the winner
    if (playerSelection.toLowerCase() == "rock") {
        switch (true) {
            case (computerSelection == "Scissors"):
                console.log(winMessage)
                return 1;
                break;
            case (computerSelection == "Paper"):
                console.log(loseMessage)
                return -1;
                break;
            default :
            console.log()
                console.log("its a tie")
                return 0;
        }
    } else if (playerSelection.toLowerCase() == "paper") {
        switch (true) {
            case (computerSelection == "Rock"):
                console.log(winMessage)
                return 1;
                break;
            case (computerSelection == "Scissors"):
                console.log(loseMessage)
                return -1;
                break;
            default :
            console.log()
                console.log("its a tie")
                return 0;
        }
    } else if (playerSelection.toLowerCase() == "scissors"){
        switch (true) {
            case (computerSelection == "Paper"):
                console.log(winMessage)
                return 1;
                break;
            case (computerSelection == "Rock"):
                console.log(loseMessage)
                return -1;
                break;
            default :
            console.log()
                console.log("its a tie")
                return 0;
        }
    } else {
        console.log("something went wrong")
    }
}

// function controls 5 rounds game 
function game() {
    //create loop play rounds 5 times recording each round winner
    let score = 0;
    for (let i = 0; i < 5; i++) {
        let j = 0;
        while(j == 0) {
            const playerSelection = prompt("choose between Rock, Paper and Scissors: ");
            j = playRound(playerSelection, getComputerChoice());
            score += j;
        }
    }
    // display the winner of the highest score
    if (score > 0) {
        console.log("you are the winner!")
    } else{
        console.log("you lose")
    }
}

game();