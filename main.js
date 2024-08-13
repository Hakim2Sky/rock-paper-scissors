function getComputerChoice() {
    let num = Math.random();
    if(num >= .66) {
        return "rock";
    } else if(num >= .33) {
        return "paper";
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("enter your choice:", "rock").toLowerCase();
    while(humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        humanChoice = prompt("enter a valid choice:").toLowerCase();
    }
    return humanChoice;
}

function playGame() {
    let humanScore = 0,
    computerScore = 0;

    function playRound(botChoice, humanChoice) {
        console.log(botChoice)
        if(botChoice === "rock" && humanChoice === "paper" || botChoice === "paper" && humanChoice === "scissors" || botChoice === "scissors" && humanChoice === "rock") {
            console.log(`You Win! ${humanChoice} beats ${botChoice}`);
            humanScore += 1;
        } else if (humanChoice === "rock" && botChoice === "paper" || humanChoice === "paper" && botChoice === "scissors" || humanChoice === "scissors" && botChoice === "rock") {
            console.log(`You lose:( ${botChoice} beats ${humanChoice}`);
            computerScore += 1;
        } else {
            console.log("its a TIE");
        }
    }

    for (let i = 0; i < 5; i++) {
        playRound(getComputerChoice(), getHumanChoice());
    }

    if(humanScore > computerScore) {
        console.log("you Win the Game!")
    } else if(computerScore > humanScore) {
        console.log("you Lose the Game!")
    } else {
        console.log("its a TIE")
    }
}

