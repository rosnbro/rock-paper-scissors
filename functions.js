function computerSelection() {
    const compSelect = Math.floor(Math.random() * 3);            //selects a random integer from 0 to 2
    let comp = "";

    if (compSelect == 0) {
        comp += "rock";              //converts the computer selected integer into a choice of rock, paper, or scissors
    } else if (compSelect == 1) {
        comp += "paper";
    } else if (compSelect == 2) {
        comp += "scissors"
    }
    return comp;
}

function playerSelection() {
    let playSelect = window.prompt("Select one: Rock, Paper, or Scissors:");         //prompts user for their choice
    let play = playSelect.toLowerCase();
    return play;
}

function playRound() {
    let computer = computerSelection();
    let player = playerSelection();
    let winner = 0;

    if ((player == "rock" && computer == "rock") || 
        (player == "paper" && computer == "paper") ||
        (player == "scissors" && computer == "scissors")) {            //compares the selections of the player and computer
        winner = 0;
    } else 
    if ((player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")) {
        winner = 1;
    } else 
    if ((player == "rock" && computer == "paper") ||
        (player == "paper" && computer == "scissors") ||
        (player == "scissors" && computer == "rock")) {
        winner = 2;
    }
    return winner;
}

function game() {
    let wins = 0;
    let losses = 0;

    for (let i = 0; i < 5; i++) {
        let roundWin = playRound();

        if (roundWin == 0) {
            i--;                                        //keeps score of who wins each round, repeats in the case of a tie
            console.log("It's a tie.");
        } else if (roundWin == 1) {
            wins++;
            console.log("You win this round!");
        } else if (roundWin == 2) {
            losses++;
            console.log("You lost this round...")
        }
        if (wins == 3 || losses == 3) {
            break;                                      //ends the game after someone wins a best of five
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
