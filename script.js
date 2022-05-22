//Allow function computerPlay to randomly choose 'Rock' 'Paper' or 'Scissors' and return the result
function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    let computerRandom = choice[Math.floor(Math.random() * choice.length)];
    return computerRandom;
}
//Allow for user to type Rock, Paper, or Scissors, assigning the value to playerSelection
//Once the playerSelection box is filled the player clicks 'Submit' to continue.
//Upon clicking 'Submit' the entry is changed to lower case 
const error = "Your entry does not work, please refresh page and try again!";
function soloPlay() {
    const playerEntry = prompt("Choose Rock, Paper, or Scissors:", "1,2,3, shoot...");
    const playerCase = playerEntry.toLowerCase();
    switch(playerCase) {
        case "rock":
            return playerCase;
            break;
        case "paper":
            return playerCase;
            break;
        case "scissors":
            return playerCase;
            break;
        default:
            alert(error);
    }
}

function playRound(playerSelection, computerSelection) {
//Take the random selection from computerPlay and match it against playerSelection
//If x == y, then print 'Draw! Try Again!'
//Else if x = Rock && y = Paper, then print 'You Lose! Paper beats Rock!'
//Else if x = Rock && y = Scissors, then print 'You Win! Rock beats Scissors!'
//Else if x = Paper && y = Rock, then print 'You Win! Paper beats Rock!'
//Else if x = Paper && y = Scissors, then print 'You Lose! Scissors beats Paper!'
//Else if x = Scissors && y = Rock, then print 'You Lose! Rock beats Scissors!'
//Else if x = Scissors && y = Paper, then print 'You Win! Scissors beats Paper!'
//Anything else will return error message
    if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
        playerScore++; 
        return 'You Win! Rock beats Scissors!';
    } else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
        playerScore++;
        return 'You Win! Paper beats Rock!'; 
    } else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
        computerScore++;
        return 'You Lose! Scissors beats Paper!';
    } else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
        computerScore++;
        return 'You Lose! Rock beats Scissors!';
    } else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
        playerScore++;
        return 'You Win! Scissors beats Paper!';
    } else if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
        computerScore++;
        return 'You Lose! Paper beats Rock!';
    } else if (playerSelection == computerSelection) {
        return 'Draw! Try Again!';
    } else {
        return error;
    }
}
let playerSelection = soloPlay();
let computerSelection = computerPlay();
//Create game function that uses playRound function 5 times
//Use loop to keep track of 5 rounds scores
//If player wins, 1 point gained
//If player loses, computer gains 1 point
//If Draw, no points gained
//After 5 rounds compare values  
//Deliver You Win or You Lose game message

var playerScore = 0;
var computerScore = 0;

let result = (playerScore > computerScore) ? 'Win': 'Lose';
let score = `Player 1: {playerScore} Computer: {computerScore}, You {result}!`
function game() { 
    for (let i = 0; i < 5; i++) {
        if (i <= 4) {
            computerPlay;
            console.log(computerSelection);
            prompt;
            soloPlay;
            console.log(playerSelection);
            playRound(playerSelection, computerSelection);
            console.log(playRound());
        } else {
        console.log("Game Over");
        return score;
        }
    }
}
game();