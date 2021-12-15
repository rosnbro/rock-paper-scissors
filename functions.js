function computerSelection() {
    const computer = Math.floor(Math.random() * 3);
    return computer;
}

function playerSelection() {
    let selection = window.prompt("Select one: Rock, Paper, or Scissors:");
    let player = 0;

    if (selection.toLowerCase === "rock") {
        player = 0;
    } else if (selection.toLowerCase === "paper") {
        player = 1;
    } else (selection.toLowerCase === "scissors"); {
        player = 2;
    }
    return player;
}

function playRound() {
    let computer = computerSelection();
    let player = playerSelection();
    let winnner = 0;

    if (player == 0) {
        if (computer == 0) {
            winner = 0;
        } else if (computer == 1) {
            winner = 2;
        } else if (computer == 2) {
            winner = 1;
        }
    } else if (player == 1) {
        if (computer == 0) {
            winner = 1;
        } else if (computer == 1) {
            winner = 0;
        } else if (computer == 2) {
            winner = 2;
        }
    } else if (player == 2) {
        if (computer == 0) {
            winner = 2;
        } else if (computer == 1) {
            winner = 1;
        } else if (computer == 2) {
            winner = 0;
        }
    }
    return winner;
}

function game() {
    let wins = 0;
    let losses = 0;

    for (let i = 0; i < 5; i++) {
        let roundWin = playRound();

        if (roundWin == 0) {
            i--;
            console.log("It's a tie.");
        } else if (roundWin == 1) {
            wins++;
            console.log("You win this round!");
        } else if (roundWin == 2) {
            losses++;
            console.log("You lost this round...")
        }
        if (wins == 3 || losses == 3) {
            break;
        }
    }

    if (wins == 3) {
        return "Congratulations! You win!";
    } else {
        return "You lost the game!";
    }
}

console.log("Rock, Paper, Scissors! Best of five:");
let outcome = game();
console.log(outcome);
