const computerChoiceText = document.getElementById("computerChoiceText");
const playerScoreText    = document.getElementById("playerScoreText");
const computerScoreText  = document.getElementById("computerScoreText");
const message            = document.getElementById("message");
const newGameButton      = document.getElementById("newGameButton");
const buttonRock         = document.getElementById("buttonRock");
const buttonPaper        = document.getElementById("buttonPaper");
const buttonScissors     = document.getElementById("buttonScissors");

const rock     = 0;
const paper    = 1;
const scissors = 2;

let playerScore    = 0;
let computerScore  = 0;
let playerChoice   = 0;
let computerChoice = 0;
let maxWins        = 5;

// Return random interval including the min and max
function randomIntFromInterval(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function nameFromNumber(inputNumber)
{
    return (inputNumber == 0 ? "Rock" : inputNumber == 1 ? "Paper" : "Scissors");
}

function setButtonsDisabled(inputBoolean)
{
    buttonRock.disabled = inputBoolean;
    buttonPaper.disabled = inputBoolean;
    buttonScissors.disabled = inputBoolean;
}

function computerChoose()
{
    computerChoice = randomIntFromInterval(0,2);
    computerChoiceText.innerText = nameFromNumber(computerChoice);
}

function endGame(winner)
{
    setButtonsDisabled(true);
    newGameButton.style.visibility = "visible";
    message.innerText = message.innerText + " " + winner + " wins!";
}

function checkScore(winner)
{
    if(playerScore >= Math.ceil(maxWins/2) || computerScore >= Math.ceil(maxWins/2))
        endGame(winner);
    else
        message.innerText = message.innerText + " " + winner + " gains a point.";
}

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