console.log('Hello World!');

let computerScore = 0;
let humanScore = 0;


const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ");
    humanChoice = humanChoice.toLowerCase().trim();

    if (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
        alert("Please make a valid selection");
        return;
    }

    return humanChoice;
};

function playRound(humanChoice, computerChoice) {

    if (humanChoice == 'scissors' && computerChoice == 'paper') {
        alert("Player wins!")
        humanScore++;
    } else if (humanChoice == 'rock' && computerChoice == 'scissors') {
        alert("Player wins!")
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'rock') {
        alert("Player wins!")
        humanScore++;
    } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
        alert("Computer wins!")
        computerScore++;
    } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
        alert("Computer wins!")
        computerScore++;;
    } else if (humanChoice == 'rock' && computerChoice == 'paper') {
        alert("Computer wins!")
        computerScore++;
    } else {
        alert("It is a draw")
    }
};
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();


// playRound(humanSelection, computerSelection);

// while (true) {

for (let i = 0; i < 3; i++) {
    const humanSelection = getHumanChoice();
    if (humanSelection === null) break; // user clicked cancel

    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

    console.log(`Score:\nPlayer: ${humanScore}\nComputer: ${computerScore}`);

};
if (humanScore > computerScore) {
    console.log("PLayer is the winner")
} else if (humanScore < computerScore) {
    console.log("Computer is the winner")
} else {
    console.log("It is a draw");
}

