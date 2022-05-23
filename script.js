//Allow function computerPlay to randomly choose 'Rock' 'Paper' or 'Scissors'
function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    let computerRandom = choice[Math.floor(Math.random() * choice.length)];
    return computerRandom;
}
//Provide error message when something other than rock, paper, or scissors is typed or they are misspelled
const error = "Your entry didn't work, refer to the prompt instructions to make sure you won't lose another turn!";
function soloPlay() {
    const playerEntry = prompt("Type Rock, Paper, or Scissors:", "1,2,3, shoot...");
    const playerCase = playerEntry.toLowerCase();
    //Allow for user to type Rock, Paper, or Scissors 
    //Once the playerSelection box is filled the player clicks 'Submit' to continue.
    //Upon clicking 'Submit' the entry is changed to lower case 
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
let playerScore = 0;
let computerScore = 0;
//Set starting scores at 0
function game() { 
//Create game function that uses playRound function 5 times
    for (let i = 0; i < 5; i++) {
    //Use loop to keep track of 5 rounds scores
        let playerSelection = soloPlay();
        //Assign the value submitted to playerSelection
        let computerSelection = computerPlay();
        //Return the result of computerPlay and assign it to computerSelection
        function playRound(playerSelection, computerSelection) {
        //Take the random selection from computerPlay and match it against playerSelection
            if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
                ++playerScore;//If player wins, 1 point gained
                return `You Win! Rock beats Scissors!`;
                //Else if x = Rock && y = Scissors, then print 'You Win! Rock beats Scissors!'
            } else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
                ++playerScore;//Else if x = Paper && y = Rock, then print 'You Win! Paper beats Rock!'
                return `You Win! Paper beats Rock!`; 
            } else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
                ++computerScore;//If player loses, computer gains 1 point
                return `You Lose! Scissors beats Paper!`;
                //Else if x = Paper && y = Scissors, then print 'You Lose! Scissors beats Paper!'
            } else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
                ++computerScore;//Else if x = Scissors && y = Rock, then print 'You Lose! Rock beats Scissors!'
                return `You Lose! Rock beats Scissors!`;
            } else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
                ++playerScore;//Else if x = Scissors && y = Paper, then print 'You Win! Scissors beats Paper!'
                return `You Win! Scissors beats Paper!`;
            } else if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
                ++computerScore;//Else if x = Rock && y = Paper, then print 'You Lose! Paper beats Rock!'
                return `You Lose! Paper beats Rock!`;
            } else if (playerSelection == computerSelection) {
                i--;//If Draw or Error, no points gained
                return `Draw! Try Again!`;//If x == y, then print 'Draw! Try Again!'
            } else {
                i--;//Develop way to disregard Draw and Error for loop
                return error;//Anything else will return error message
            }
        }
        switch (i <= 4) {
            case (i < 5):
                console.log(computerSelection);
                console.log(playerSelection);
                console.log(playRound(playerSelection, computerSelection));
                break; 
            default:
                return `Game Over${gap}Home:${playerScore}${gap}Away:${computerScore}`;
        }
    }
    let gap = "\r\n";
    let grats = (playerScore > computerScore) ? 'Won the Game' : 'Suck at Life'
    //Deliver You Win or You Lose game message
    alert(`Game Over${gap}Home:${playerScore}${gap}Away:${computerScore}${gap}Congratulations, you ${grats}!`);
}
game();