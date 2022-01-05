let score = [0, 0];
let roundWiner;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const results = document.querySelector('.results');
const roundWin = document.createElement('div');
const gameWin = document.createElement('div');
const restartPrompt = document.createElement('div');
const restartButton = document.createElement('button');

rockButton.addEventListener('click', () => start("rock"));
paperButton.addEventListener('click', () => start("paper"));
scissorsButton.addEventListener('click', () => start("scissors"));
restartButton.addEventListener('click', () => restart());


function computerSelection() {
    const compSelect = Math.floor(Math.random() * 3);            //selects a random integer from 0 to 2
    if (compSelect == 0) {
        return "rock";              //converts the computer selected integer into a choice of rock, paper, or scissors
    } else if (compSelect == 1) {
        return "paper";
    } else if (compSelect == 2) {
        return "scissors"
    }
}

function playRound(player) {
    let computer = computerSelection();

    if ((player == "rock" && computer == "rock") || 
        (player == "paper" && computer == "paper") ||
        (player == "scissors" && computer == "scissors")) {            //compares the selections of the player and computer
        roundWiner = "tie";
    } else 
    if ((player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")) {
        roundWiner = "player";
        score[0]++;
    } else 
    if ((player == "rock" && computer == "paper") ||
        (player == "paper" && computer == "scissors") ||
        (player == "scissors" && computer == "rock")) {
        roundWiner = "computer";
        score[1]++
    }
    console.log(roundWiner);
}

function start(player) {
    playRound(player);
    if (score[0] >= 5 || score[1] >= 5) {
        end();
    }

}

function end() {
    if (score[0] == 5) {
        gameWin.textContent = "You have emerged triumphant you glorious son of a gun.";
    } else {
        gameWin.textContent = "Mission failed. We'll get 'em next time."
    }
    restartPrompt.classList.add("restartPrompt");
    restartPrompt.textContent = "More hostiles incoming! Engage?";
    restartButton.classList.add("restartButton");
    restartButton.textContent = "Oh yeah."
    results.appendChild(gameWin);
    results.appendChild(restartPrompt);
    results.appendChild(restartButton);
}

function restart() {
    score = [0, 0];
    let children = results.firstElementChild;
    while (children) {
        children.remove();
        children = results.firstElementChild;
    }
}