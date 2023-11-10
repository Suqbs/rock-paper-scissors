let playerScore = 0;
let computerScore = 0;

function checkWinner() {
    if (Number(playerScore) === 5) {
        // Player wins
        result.textContent += `Game Over. YOU WIN!
        \n${playerScore} - ${computerScore}`;
        disableButtonsAfterGameOver();
    } else if (Number(computerScore) === 5) {
        // Computer wins
        result.textContent += `Game Over. COMPUTER WINS!
        \n${computerScore} - ${playerScore}`;
        disableButtonsAfterGameOver();
    } else {
        // Game continues
        result.textContent += `Game continues... You: ${playerScore}\nComputer: ${computerScore}`;
    }
}

function playRound(playerSelection, computerSelection) {
    result.textContent = ""; //reset every Round

    console.log(`Your choice: ${playerSelection}`);
    console.log(`Computer choice: ${computerSelection}`);
    if (playerSelection == computerSelection) {
        console.log("Draw");
        result.textContent = "It's a draw! ";
        return 0;
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        playerSelection == "scissors" && computerSelection == "paper") {
        console.log("You win.")
        result.textContent = "You win the round! ";
        return 1;
    }
    else {
        console.log("Computer wins.")
        result.textContent = "Computer win the round! ";
        return 2;
    }
}

function updateScore(roundWinner) {
    switch (roundWinner) {
        case 0:
            break;
        case 1:
            playerScore++;
            break;
        case 2:
            computerScore++;
            break;
    }
}

function getComputerChoice() {
    //0 : rock -- 1 : paper -- 2: scissors
    let randomNumber = getRandomInt(3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function disableButtonsAfterGameOver() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

//-- Creating Dom Elements --

const container = document.querySelector('.container');
const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const result = document.createElement('div');
rockBtn.textContent = 'Rock';
paperBtn.textContent = 'Paper';
scissorsBtn.textContent = 'Scissors';
result.textContent = 'Let\'s play a game. Click the buttons!';

container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);
container.appendChild(result);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//-- Handling Dom Elements

rockBtn.addEventListener('click', () => {
    const roundWinner = playRound('rock', getComputerChoice());
    updateScore(roundWinner);
    checkWinner();
});

paperBtn.addEventListener('click', () => {
    updateScore(playRound('paper', getComputerChoice()));
    checkWinner();
});

scissorsBtn.addEventListener('click', () => {
    updateScore(playRound('scissors', getComputerChoice()));
    checkWinner();
});



