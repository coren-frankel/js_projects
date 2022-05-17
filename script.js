let playerSelection;
const textArray = ['rock', 'paper', 'scissors'];
const randomIndex = Math.floor(Math.random() * textArray.length);
const computerSelection = textArray[randomIndex];
function computerPlay() {
  return computerSelection;
}
console.log(computerPlay());
function submit() {
  playerSelection = document.getElementById("box").value.toLowerCase();
  console.log(playerSelection);
  playGame();
  function playGame(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert(draw);
    } else if ((playerSelection = 'rock') && (computerSelection = 'scissors')) {
        alert(winRBS);
    } else if ((playerSelection = 'paper') && (computerSelection = 'rock')) {
        alert(winPBR);
    } else if ((playerSelection = 'paper') && (computerSelection = 'scissors')) {
        alert(loseSBP);
    } else if ((playerSelection = 'scissors') && (computerSelection = 'rock')) {
        alert(loseRBS);
    } else if ((playerSelection = 'scissors') && (computerSelection = 'paper')) {
        alert(winSBP);
    } else if ((playerSelection = 'rock') && (computerSelection = 'paper')) {
        alert(losePBR);
    } else (playerSelection != ('rock' || 'paper' || 'scissors')) 
        alert(error);
  }
}
const draw = ('Draw! Try Again!');
const error = ('Error: Incompatible Entry');
const losePBR = ('You Lose! Paper beats Rock!');
const winRBS = ('You Win! Rock beats Scissors!');
const winPBR = ('You Win! Paper beats Rock!');
const loseSBP = ('You Lose! Scissors beats Paper!');
const loseRBS = ('You Lose! Rock beats Scissors!');
const winSBP = ('You Win! Scissors beats Paper!');
//Take the random selection from computerPlay and match it against playerSelection
//If x == y, then print 'Draw! Try Again!'
//Else if x = Rock && y = Paper, then print 'You Lose! Paper beats Rock!'
//Else if x = Rock && y = Scissors, then print 'You Win! Rock beats Scissors!'
//Else if x = Paper && y = Rock, then print 'You Win! Paper beats Rock!'
//Else if x = Paper && y = Scissors, then print 'You Lose! Scissors beats Paper!'
//Else if x = Scissors && y = Rock, then print 'You Lose! Rock beats Scissors!'
//Else if x = Scissors && y = Paper, then print 'You Win! Scissors beats Paper!'/


//Allow for user to type Rock, Paper, or Scissors, assigning the value to playerSelection
//Once the playerSelection box is filled the player clicks 'Submit' to continue.
//Upon clicking 'Submit' the entry is changed to lower case 
//Allow function computerPlay to randomly choose 'Rock' 'Paper' or 'Scissors' and return the result.


