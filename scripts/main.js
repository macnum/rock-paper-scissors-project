let humanScore = 0;
let computerScore = 0;
let count = 0;
let showComputerChoice = null
const list = ['rock', 'paper', 'scissors']
let displayResult = ""
const MAX_ROUNDS = 5;
const score = document.querySelector('.score');




function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    showComputerChoice = list[randomNumber]
    return showComputerChoice
}

function getUserChoice(e) {
    return e.target.textContent.toLowerCase()

}




function updateScore() {
    score.textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        displayResult = ("You lose! Paper beats Rock");
        count++;
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        displayResult = ("You win! Rock beats Scissors");
        count++;
        humanScore++;
    }

    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        displayResult = ("You lose! scissors beats Paper");
        count++;
        computerScore++
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        displayResult = ("You win! Paper beats Rock");
        count++;
        humanScore++;
    }

    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        displayResult = ("You lose! Rock beats Scissors");
        count++;
        computerScore++
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        displayResult = ("You win! Scissors beats Paper");
        count++;
        humanScore++;
    }
    else {
        count++;
        displayResult = ("A draw");
    }

}





const humanSelection = getUserChoice;
const computerSelection = getComputerChoice;
let round = 0;

function playGame(e) {
    display.textContent = ""
    playRound(humanSelection(e), computerSelection());
    display.textContent = showComputerChoice;
    result.textContent = displayResult;

}


const btn = document.querySelector('.btn-container');
const display = document.querySelector('.display');
const result = document.querySelector('.result');

btn.addEventListener('click', (e) => {
    if (!e.target.matches('button')) return;

    if (count < MAX_ROUNDS - 1) {
        playGame(e);
        updateScore(); // if implemented
    } else {
        if (humanScore > computerScore) {
            result.textContent = "You win 🏆";

        } else if (humanScore < computerScore) {
            result.textContent = "You lose 🙁";

        } else {
            result.textContent = "It's a draw!";
        }
        count = 0;
        humanScore = 0;
        computerScore = 0;
        displayResult.textContent = ""
        updateScore(); // if implemented
    }
});