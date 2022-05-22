//Allow function computerPlay to randomly choose 'Rock' 'Paper' or 'Scissors' and return the result
function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    let computerRandom = choice[Math.floor(Math.random() * choice.length)];
    return computerRandom;
}
//Allow for user to type Rock, Paper, or Scissors, assigning the value to playerSelection
//Once the playerSelection box is filled the player clicks 'Submit' to continue.
//Upon clicking 'Submit' the entry is changed to lower case 
const error = "Your entry didn't work, refer to the prompt instructions to make sure you won't lose another turn!";
function soloPlay() {
    const playerEntry = prompt("Type Rock, Paper, or Scissors:", "1,2,3, shoot...");
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

//Create game function that uses playRound function 5 times
//Use loop to keep track of 5 rounds scores
//If player wins, 1 point gained
//If player loses, computer gains 1 point
//If Draw or Error, no points gained**Develop way to disregard Draw and Error for loop
//After 5 rounds print "game over" and compare scores
//Deliver You Win or You Lose game message
let playerScore = 0;
let computerScore = 0;
function game() { 
    
    for (let i = 0; i < 5; i++) {
        let result = (playerScore > computerScore) ? 'Win': 'Lose';
        let gap = "\r\n";
        let score = `${gap}You: ${playerScore}${gap}Computer: ${computerScore}${gap}You ${result}!`;
        let gameOver = `Game Over: ${score}`;
        let s = computerScore + playerScore;
        let playerSelection = soloPlay();
        let computerSelection = computerPlay();
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
                    i--;
                    return 'Draw! Try Again!';
                } else {
                    i--;
                    return error;
                }
        }
        if (i < 5) {
            console.log(computerSelection);
            console.log(playerSelection);
            console.log(playRound(playerSelection, computerSelection));
        } else if (s == 5) {
            alert(gameOver);
            console.log(gameOver);
        }
    }
}
game();
