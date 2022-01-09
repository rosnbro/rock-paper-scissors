//variable & constant declarations

let score = [0, 0];
let roundWinner;

const buttons = document.querySelector('.buttons');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const results = document.querySelector('.results');
const roundResults = document.querySelector('.ticker');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const roundWin = document.querySelector('.roundWin');
const overlay = document.querySelector('.overlay');
const gameWin = document.createElement('div');
const restartPrompt = document.createElement('div');
const restartButton = document.createElement('button');
const instructions = document.createElement('div');

//interactive elements

rockButton.addEventListener('click', () => start("rock"));
paperButton.addEventListener('click', () => start("paper"));
scissorsButton.addEventListener('click', () => start("scissors"));
restartButton.addEventListener('click', () => restart());
overlay.addEventListener('click', () => {
    overlay.style.display = "none"
    overlay.firstElementChild.remove();
});

window.onload = intro();

//introduces the user to the game premise

function intro() {
    instructions.innerHTML = "<p>We are at war!</p><p>Enemy forces have sent one of their three specialized attack groups to destroy us- codenamed: Rock, Paper, and Scissors.</p> <p>You must choose the correct unit to counter their attack.- Paper beats Rock, Scissors beat Paper, & Rock beats Scissors.</p><p>Securing victory in five battles should be enough to win the war.</p><p>Good luck.</p>";
    instructions.classList.add("instructions");
    overlay.appendChild(instructions);
    overlay.style.display = "block";
}

//generates a random integer from 0 to 2 and converts that value into rock, paper, or scissors

function computerSelection() {
    const compSelect = Math.floor(Math.random() * 3);
    if (compSelect == 0) {
        return "rock";
    } else if (compSelect == 1) {
        return "paper";
    } else if (compSelect == 2) {
        return "scissors"
    }
}

//compares the selections of the player and computer and presents the winner of each round

function playRound(player) {
    let computer = computerSelection();

    if ((player == "rock" && computer == "rock") || 
        (player == "paper" && computer == "paper") ||
        (player == "scissors" && computer == "scissors")) {
        roundWinner = "Tie.";
    } else 
    if ((player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")) {
        roundWinner = "You won this round!";
        score[0]++;
    } else 
    if ((player == "rock" && computer == "paper") ||
        (player == "paper" && computer == "scissors") ||
        (player == "scissors" && computer == "rock")) {
        roundWinner = "You lost. Get it together.";
        score[1]++
    }
    roundWin.innerHTML = `${roundWinner} <br>Your opponent struck with ${computer}.`;
    roundResults.insertBefore(roundWin, computerScore);
}

//starts each round, checks the score for a winning condition, and displays score

function start(player) {
    playRound(player);
    if (score[0] >= 5 || score[1] >= 5) {
        end();
    }
    playerScore.textContent = `${score[0]}`;
    computerScore.textContent = `${score[1]}`;
}

//displays end of game content, prompts user for reset

function end() {
    if (score[0] == 5) {
        gameWin.textContent = "You have emerged triumphant, glorious victor!";
    } else {
        gameWin.innerHTML = "Mission failed. <br>We'll get 'em next time."
    }
    restartPrompt.classList.add("restartPrompt");
    restartButton.classList.add("restartButton");
    gameWin.classList.add("gameWin");

    restartPrompt.textContent = "More hostiles incoming! Engage?";
    restartButton.textContent = "Oh yeah.";

    overlay.appendChild(gameWin);
    results.appendChild(restartPrompt);
    results.appendChild(restartButton);

    buttons.style.display = "none";
    results.style.display = "flex";
    overlay.style.display = "block";
}

//resets game score and removes end game content

function restart() {
    score = [0, 0];
    playerScore.textContent = `${score[0]}`;
    computerScore.textContent = `${score[1]}`;

    let children = results.firstElementChild;
    while (children) {
        children.remove();
        children = results.firstElementChild;
    }
    results.style.display = "none";
    buttons.style.display = "flex";
}