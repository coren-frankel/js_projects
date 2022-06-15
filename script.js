//Allow function computerPlay to randomly choose 'Rock' 'Paper' or 'Scissors'
function computerPlay() {
    const choice = ['rock', 'paper', 'scissors'];
    let computerRandom = choice[Math.floor(Math.random() * choice.length)];
    return computerRandom;
}

const imgs = document.querySelectorAll('img');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let result = document.querySelector('#result');
let score = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;
//Set starting scores at 0
function game() { 
//Create game function that uses playRound function 5 times
    for (let i = 0; i < 5; i++) {
    //Use loop to keep track of 5 rounds scores
        let computerSelection = computerPlay();
        let playerSelection = '';
        //Return the result of computerPlay and assign it to computerSelection
        function playRound(playerSelection, computerSelection) {
        //Take the random selection from computerPlay and match it against playerSelection
            if ((playerSelection == 'rock') && (computerSelection == 'scissors')) {
                ++playerScore;//If player wins, 1 point gained
                result = `You Win! Rock beats Scissors!`;
                //Else if x = Rock && y = Scissors, then print 'You Win! Rock beats Scissors!'
            } else if ((playerSelection == 'paper') && (computerSelection == 'rock')) {
                ++playerScore;//Else if x = Paper && y = Rock, then print 'You Win! Paper beats Rock!'
                result = `You Win! Paper beats Rock!`; 
            } else if ((playerSelection == 'paper') && (computerSelection == 'scissors')) {
                ++computerScore;//If player loses, computer gains 1 point
                result = `You Lose! Scissors beats Paper!`;
                //Else if x = Paper && y = Scissors, then print 'You Lose! Scissors beats Paper!'
            } else if ((playerSelection == 'scissors') && (computerSelection == 'rock')) {
                ++computerScore;//Else if x = Scissors && y = Rock, then print 'You Lose! Rock beats Scissors!'
                result = `You Lose! Rock beats Scissors!`;
            } else if ((playerSelection == 'scissors') && (computerSelection == 'paper')) {
                ++playerScore;//Else if x = Scissors && y = Paper, then print 'You Win! Scissors beats Paper!'
                result =  `You Win! Scissors beats Paper!`;
            } else if ((playerSelection == 'rock') && (computerSelection == 'paper')) {
                ++computerScore;//Else if x = Rock && y = Paper, then print 'You Lose! Paper beats Rock!'
                result = `You Lose! Paper beats Rock!`;
            } else if (playerSelection == computerSelection) {
                i--;//If Draw or Error, no points gained
                result = `Draw! Try Again!`;//If x == y, then print 'Draw! Try Again!'
            }
        }
        function play(e) {
            playerSelection = `${img.id}`;
            console.log(playerSelection);
            console.log(playRound(playerSelection, computerSelection));
            //playRound();
        }
        imgs.forEach((img) => {
            img.addEventListener('click', play)}); // we use the .forEach method to iterate through each img
        // and for each one we add a 'click' listener  
        //Allow for user to click an image to choose Rock, Paper, or Scissors 
        //Once the player clicks an image, the playerSelection is made and assigned with playRound.

        let gap = "/r/n";
        let grats = (playerScore > computerScore) ? 'Won the Game' : 'Suck at Life'
        //Deliver You Win or You Lose game message
        switch (i <= 4) {
            case (i < 5):
                score = `Home:${playerScore}${gap}Away:${computerScore}`;
                result = `You played ${playerSelection} against the Computer's ${computerSelection}${gap}${playRound(playerSelection, computerSelection)}`;
            default:
                score = `Home:${playerScore}${gap}Away:${computerScore}`;
                result = `Game Over${gap}Congratulations, you ${grats}!`
        }
    }
};
game();