function getComputerChoice() {
    let random = Math.random();

    let choice = (random <= 0.3) ? "rock" :
        (random > 0.3 && random < 0.6) ? "paper" :
            (random > 0.6 && random <= 1) ? "scissors" : "not valid selection"
    return choice
};

const selected = document.querySelectorAll('.btns')

console.log(selected);
function getHumanChoice() {

    let input = selected.forEach(button => button.addEventListener('click', () => {
        console.log(button.value);
    }));
    return input;
};

let computerScore = 0;
let humanScore = 0;

function playGame() {

    function playRound(human, computer) {
        human = human.toLowerCase();
        computer = computer.toLowerCase();

        console.log(human);
        console.log(computer);

        if (human == 'scissors' && computer == 'paper') {
            console.log("You win! Scissors beats Paper!")
            humanScore++;
        } else if (human == 'rock' && computer == 'scissors') {
            console.log("You win! Rock beats Scissors")
            humanScore++;
        } else if (human == 'paper' && computer == 'rock') {
            console.log("You win! Paper beats Rock")
            humanScore++;
        } else if (human == 'paper' && computer == 'scissors') {
            console.log("You lose! Scissors beats Paper!")
            computerScore++;
        } else if (human == 'scissors' && computer == 'rock') {
            console.log("You lose! Scissors beats Rock!")
            computerScore++;
        } else if (human == 'rock' && computer == 'paper') {
            console.log("You lose! Rock beats Paper!")
            computerScore++;
        } else {
            console.log("It is a draw")
        }
    };
    for (let i = 0; i <= 5; i++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        if (humanChoice === null) {
            console.log("User cancelled the prompt.");
            return null; // or handle it however you like
        };
        if (humanChoice != 'paper' && humanChoice != 'rock' && humanChoice != 'scissors') {
            console.log("Play round again!");
            i--;
            continue;
        }

        playRound(humanChoice, computerChoice);

    }
    if (humanScore > computerScore) {
        console.log("You win");
    } else if (computerScore > humanScore) {
        console.log("Computer win");
    } else {
        console.log("Harder Luck next time");
    }


};

playGame();





