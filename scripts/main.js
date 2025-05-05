let humanScore = 0;
let computerScore = 0;

const list = [ 'rock', 'paper', 'scissors']

function getComputerChoice() {
    const randomNumber =  Math.floor(Math.random() * 3);
    return list[randomNumber]
}

function getUserChoice() {
    const userChoice = prompt("Enter a choice rock | paper | choice" );
    return userChoice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice === 'rock' && computerChoice === 'paper'){
        console.log("You lose! Paper beats Rock");
          computerScore++;
    }else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        console.log("You win! Rock beats Paper");
       humanScore++;
    }
    
    else if (humanChoice === 'paper' && computerChoice === 'scissors'){
         console.log("You lose! scissors beats Paper");
          computerScore++
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock'){
         console.log("You win! Paper beats Rock");
            humanScore++;
    }

    else if (humanChoice === 'scissors' && computerChoice === 'rock'){
         console.log("You lose! Scissors beats Rock");
           computerScore++
    }
     else if (humanChoice === 'scissors' && computerChoice === 'rock'){
         console.log("You win! Scissors beats Paper");
          humanScore++;
    }
    else {
         console.log("A draw");
    }

}

const humanSelection = getUserChoice;
const computerSelection = getComputerChoice;
let round = 0;
function playGame() {
    while(round < 5){
          playRound(humanSelection(), computerSelection());
          round++;
    }
   
}
playGame();