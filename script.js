const array = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice = array[Math.floor(Math.random() * array.length)];
    return computerChoice;
}

function getHumanChoice(){
    let humanChoice = prompt("Choose Rock, Paper or Scissors");
    if(array.includes(humanChoice.toLowerCase())){
        return humanChoice.toLowerCase();
    } else {
        getHumanChoice();
    }
}

function playRound(humanSelection, computerSelection){
    if(humanSelection == computerSelection){
        console.log(`It's a tie! You both chose ${humanSelection}`);
    } else if((humanSelection === 'rock' && computerSelection === 'scissors') ||
            (humanSelection === 'paper' && computerSelection === 'rock') ||
            (humanSelection === 'scissors' && computerSelection === 'paper')) {
        console.log(`You won this round! ${humanSelection} beats ${computerSelection}`)
        humanScore++;
    } else {
        console.log(`You lost this round! ${computerSelection} beats ${humanSelection}`)
        computerScore++;
    } 
}

function playGame(){
    let rounds = prompt("How many rounds would you like to play?");

    for(let i = 1; i <= rounds; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`Final score: \nPlayer's score: ${humanScore} \nComputer's score: ${computerScore}`)
    if(humanScore > computerScore){
        console.log("Congratulatons! You won!")
    } else if(computerScore > humanScore){
        console.log("Better luck next time! Computer won!")
    } else {
        console.log("We have a tie!")
    }
}

playGame();