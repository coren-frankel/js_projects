//Allow function computerPlay to randomly choose 'Rock' 'Paper' or 'Scissors'
function computerPlay() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    let computerRandom = choice[Math.floor(Math.random() * choice.length)];
    return computerRandom;
};
var result = document.querySelector('#result'), result1 = document.querySelector('#result1');
var score = document.querySelector('#score');
var playerScore = 0; 
var computerScore = 0;//Set starting scores at 0
const reset = document.querySelector('button');

function again(){
    playerScore = 0, computerScore = 0;//Set starting scores at 0
    result.textContent = "Let's Play! Click on the image that corresponds to your choice!";
    score.textContent = `Home: ${playerScore} | Away: ${computerScore}`;
    reset.textContent = 'Reset';
    reset.setAttribute('style', 'width: 60px; background-color: white; color: skyblue;');
    score.setAttribute('style', "height: 20px, width: 150px;")
    result1.textContent = "First to 5 wins!";
}
again();
reset.addEventListener('click', again());

const imgs = document.querySelectorAll('img');//DOM Methods to digest the click events
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
//DOM Methods update the user

function checkScore() {
    const con = (playerScore > computerScore) ? 'Congratulations' : 'Wow';
    const grats = (playerScore > computerScore) ? 'Win' : 'Suck at This';
    (playerScore > computerScore) ? score.setAttribute('style', "height: 70px; width: 200px;") :
        score.setAttribute('style', "height: 70px; width: 200px;");
    score.textContent = `Game Over! ${con}, You ${grats}!`;
    const final = document.createElement('p');
    final.textContent += `Home: ${playerScore} | Away: ${computerScore}`;
    score.appendChild(final);
    reset.textContent = 'Play Again?';
    reset.setAttribute('style', 'width: 120px; background-color: red; color: white;');
    };


function game() {//Create game function that uses playRound multiple times
    for (var i = 0; i < 1; i++){//Use loop to keep track of game until someone scores 5
        var computerSelection = computerPlay();
        //Return the result of computerPlay and assign it to computerSelection
        var playerSelection = '';
        function playRound(playerSelection, computerSelection) {
            //Take the random selection from computerPlay and match it against playerSelection
            if ((playerSelection === 'Rock') && (computerSelection === 'Scissors')) {
                ++playerScore, i--;//If player wins, 1 point gained
                score.textContent = `Home: ${playerScore} | Away: ${computerScore}`;
                result.textContent = `You played ${playerSelection} against the Computer's ${computerSelection}`;
                return result1.textContent = `You Win! Rock beats Scissors!`;
                //Else if x = Rock && y = Scissors, print 'You Win! Rock beats Scissors!'
            } else if ((playerSelection === 'Paper') && (computerSelection === 'Rock')) {
                ++playerScore, i--;//Else if x = Paper && y = Rock, print 'You Win! Paper beats Rock!'
                score.textContent = `Home: ${playerScore} | Away: ${computerScore}`;  
                result.textContent = `You played ${playerSelection} against the Computer's ${computerSelection}`;
                return result1.textContent = `You Win! Paper beats Rock!`; 
            } else if ((playerSelection === 'Paper') && (computerSelection === 'Scissors')) {
                ++computerScore, i--;//If player loses, computer gains 1 point
                score.textContent = `Home: ${playerScore} | Away: ${computerScore}`;  
                result.textContent = `You played ${playerSelection} against the Computer's ${computerSelection}`;
                return result1.textContent = `You Lose! Scissors beats Paper!`;
                //Else if x = Paper && y = Scissors, then print 'You Lose! Scissors beats Paper!'
            } else if ((playerSelection === 'Scissors') && (computerSelection === 'Rock')) {
                ++computerScore, i--;//Else if x = Scissors && y = Rock, print 'You Lose! Rock beats Scissors!'
                score.textContent = `Home: ${playerScore} | Away: ${computerScore}`;   
                result.textContent = `You played ${playerSelection} against the Computer's ${computerSelection}`;
                return result1.textContent = `You Lose! Rock beats Scissors!`;
            } else if ((playerSelection === 'Scissors') && (computerSelection === 'Paper')) {
                ++playerScore, i--;//Else if x = Scissors && y = Paper, print 'You Win! Scissors beats Paper!'
                score.textContent = `Home: ${playerScore} | Away: ${computerScore}`;    
                result.textContent = `You played ${playerSelection} against the Computer's ${computerSelection}`;
                return result1.textContent =  `You Win! Scissors beats Paper!`;
            } else if ((playerSelection === 'Rock') && (computerSelection === 'Paper')) {
                ++computerScore, i--;//Else if x = Rock && y = Paper, print 'You Lose! Paper beats Rock!'
                score.textContent = `Home: ${playerScore} | Away: ${computerScore}`;   
                result.textContent = `You played ${playerSelection} against the Computer's ${computerSelection}`;
                return result1.textContent = `You Lose! Paper beats Rock!`;
            } else if (playerSelection === computerSelection) {
                i--;//If Draw or Error, no points gained
                result.textContent = `You played ${playerSelection} against the Computer's ${computerSelection}`;//If x == y, print 'Draw! Try Again!'
                return result1.textContent = "Draw! Try Again!";
            }
            
        };
        //Allow for user to click an image to choose Rock, Paper, or Scissors 
        imgs.forEach((img) => {//Use the .forEach method to iterate through each img
            //For each one we add a 'click' listener 
            img.addEventListener('click', (e) => {playerSelection = e.target.id,
                playRound(playerSelection, computerPlay());
                img.setAttribute('style', 'border-color: red;');
                setTimeout(function() {
                    img.setAttribute('style', 'border-color: white;')}, 100)
                if ((computerScore == 5) || (playerScore == 5)) {
                    ++i, checkScore();
                }})
        }); //Once the player clicks an image, the playerSelection is made and assigned with playRound.
        
        
    }
};
game();