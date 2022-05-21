//Allow function computerPlay to randomly choose 'Rock' 'Paper' or 'Scissors' and return the result
const choice = ['rock', 'paper', 'scissors'];
function computerPlay() {
    let computerRandom = choice[Math.floor(Math.random() * choice.length)];
    return computerRandom;
}
const computerSelection = computerPlay();
console.log(computerSelection)

//Take the random selection from computerPlay and match it against playerSelection
//If x == y, then print 'Draw! Try Again!'
//Else if x = Rock && y = Paper, then print 'You Lose! Paper beats Rock!'
//Else if x = Rock && y = Scissors, then print 'You Win! Rock beats Scissors!'
//Else if x = Paper && y = Rock, then print 'You Win! Paper beats Rock!'
//Else if x = Paper && y = Scissors, then print 'You Lose! Scissors beats Paper!'
//Else if x = Scissors && y = Rock, then print 'You Lose! Rock beats Scissors!'
//Else if x = Scissors && y = Paper, then print 'You Win! Scissors beats Paper!'
function playRound(playerSelection, computerSelection) {
    if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
        playerScore += 1;
        return 'You Win! Rock beats Scissors!';
    } else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
        playerScore += 1;
        return 'You Win! Paper beats Rock!'; 
    } else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
        computerScore += 1; 
        return 'You Lose! Scissors beats Paper!';
    } else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
        computerScore += 1;
        return 'You Lose! Rock beats Scissors!';
    } else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
        playerScore += 1;
        return 'You Win! Scissors beats Paper!';
    } else if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
        computerScore += 1;
        return 'You Lose! Paper beats Rock!';
    } else if (playerSelection == computerSelection) {
        return 'Draw! Try Again!';
    } else {
        return error;
    }
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
const playerSelection = soloPlay();
console.log(playerSelection)
console.log(playRound(playerSelection, computerSelection));

//Create game function that uses playRound function 5 times
//Use loop to keep track of 5 rounds scores
//If player wins, 1 point gained
//If player loses, computer gains 1 point
//If Draw, no points gained
//After 5 rounds compare values  
//Deliver You Win or You Lose game message

let playerScore = 0;
let computerScore = 0;

function game(playRound) {
    let x = playerScore;
    let y = computerScore;
    for (let i = 0; i < 5; i++) {
        if ((x + y) > 4) {
            return score;
        } else {
            playRound();
        }
    }
    let result = (x > y) ? 'Win': 'Lose';
    score = `Player 1: {playerScore} Computer: {computerScore}, You {result}!`
}
game();