let humanScore = 0;
let computerScore = 0;
let showComputerChoice = null
const list = ['rock', 'paper', 'scissors']
let displayResult = ""


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    showComputerChoice = list[randomNumber]
    return showComputerChoice
}

function getUserChoice(e) {
    return e.target.className

}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'paper') {
        displayResult = ("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        displayResult = ("You win! Rock beats Scissors");
        humanScore++;
    }

    else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        displayResult = ("You lose! scissors beats Paper");
        computerScore++
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        displayResult = ("You win! Paper beats Rock");
        humanScore++;
    }

    else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        displayResult = ("You lose! Rock beats Scissors");
        computerScore++
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        displayResult = ("You win! Scissors beats Paper");
        humanScore++;
    }
    else {
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
    playGame(e)
})


