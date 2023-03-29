// Define element variables
const computerChoiceText = document.getElementById("computerChoiceText");
const playerScoreText    = document.getElementById("playerScoreText");
const computerScoreText  = document.getElementById("computerScoreText");
const message            = document.getElementById("message");
const newGameButton      = document.getElementById("newGameButton");
const buttonRock         = document.getElementById("buttonRock");
const buttonPaper        = document.getElementById("buttonPaper");
const buttonScissors     = document.getElementById("buttonScissors");

// Define move numbers and related variables
const rock         = 0;
const paper        = 1;
const scissors     = 2;
let playerChoice   = 0;
let computerChoice = 0;

// Define score-related variables
const maxMoves     = 5;
let playerScore    = 0;
let computerScore  = 0;

// Inclusive of min and max
function randomIntFromInterval(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Take a move type as input and return the move name as a string
function nameFromNumber(inputNumber)
{
    return (inputNumber == 0 ? "Rock" : inputNumber == 1 ? "Paper" : "Scissors");
}

// Enable or disable input buttons
function setButtonsDisabled(inputBoolean)
{
    buttonRock.disabled     = inputBoolean;
    buttonPaper.disabled    = inputBoolean;
    buttonScissors.disabled = inputBoolean;
}

// Computer makes their move
function computerChoose()
{
    computerChoice = randomIntFromInterval(0,2);
    computerChoiceText.innerText = nameFromNumber(computerChoice);
}

// Disable input buttons and display the victory message
function endGame(winner)
{
    setButtonsDisabled(true);
    newGameButton.style.visibility = "visible";
    message.innerText = message.innerText + " " + winner + " wins!";
}

// Handle win, lose, and tie conditions
function winMatch()
{
    playerScore++;
    playerScoreText.innerText = playerScore;
    message.innerText = nameFromNumber(playerChoice) + " beats " + nameFromNumber(computerChoice) + "!";
    checkScore("Player");
}

function loseMatch()
{
    computerScore++;
    computerScoreText.innerText = computerScore;
    message.innerText = nameFromNumber(computerChoice) + " beats " + nameFromNumber(playerChoice) + "!";
    checkScore("Computer");
}

function tieMatch()
{
    message.innerText = "It's a tie!";
}

// End game if someone's score reaches 3
function checkScore(winner)
{
    if(playerScore >= Math.ceil(maxMoves/2) || computerScore >= Math.ceil(maxMoves/2))
        endGame(winner);
    else
        message.innerText = message.innerText + " " + winner + " gains a point.";
}

function evaluateMatch(inputPlayerChoice)
{
    // Set global choice variables
    playerChoice = inputPlayerChoice;
    computerChoose();
    
    // Determine the match winner
    if((playerChoice + 2) % 3 == computerChoice)
        winMatch();
    else if((playerChoice + 1) % 3 == computerChoice)
        loseMatch();
    else
        tieMatch();
}

// Set up conditions for a new game to start
function newGame()
{
    playerScore = 0;
    computerScore = 0;
    playerScoreText.innerText = 0;
    computerScoreText.innerText = 0;
    computerChoiceText.innerText = "...";
    message.innerText = "Awaiting first move...";
    newGameButton.style.visibility = "hidden";
    setButtonsDisabled(false);
}

newGame();
