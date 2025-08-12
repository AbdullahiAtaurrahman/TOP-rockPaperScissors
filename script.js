let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('.btns');
const choiceMade = document.querySelector('.choice')
const compScore = document.querySelector('#compScore')
const humScore = document.querySelector('#humanScore')
const conclusion = document.querySelector('.conclusion')
const restartBtn = document.querySelector('#restartBtn');
const choices = ['rock', 'paper', 'scissors'];
restartBtn.style.display = 'none';
restartBtn.textContent = 'Restart game';
choiceMade.style.display = 'none';
restartBtn.addEventListener('click', () => {
    humanScore = 0;
    computerScore = 0;
    humScore.textContent = humanScore;
    compScore.textContent = computerScore;
    conclusion.textContent = '';
});
function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)]
    return choice
};
function determineWinner(human, computer) {
    human = human.toLowerCase();
    computer = computer.toLowerCase();
    if ((human == 'scissors' && computer == 'paper') || (human == 'rock' && computer == 'scissors') || (human == 'paper' && computer == 'rock')) {
        humanScore++;
        humScore.textContent = humanScore
    } else if ((human == 'paper' && computer == 'scissors') || (human == 'scissors' && computer == 'rock') || (human == 'rock' && computer == 'paper')) {
        computerScore++;
        compScore.textContent = computerScore
    }
    choiceMade.style.display = 'block';
    restartBtn.style.display = 'block';
    choiceMade.textContent = `You chose ${human}, computer chose ${computer}.`;

    if (humanScore >= 3 || computerScore >= 3) {

        if (humanScore > computerScore) {
            conclusion.textContent = "You win the game!"
        } else {
            conclusion.textContent = "Computer wins the game!";
        }
        computerScore = 0;
        humanScore = 0;
        compScore.textContent = computerScore;
        humScore.textContent = humanScore;
        choiceMade.textContent = '';

        restartBtn.style.display = 'none';
    }
};
function getHumanChoice() {
    buttons.forEach(button => button.addEventListener('click', () => {
        let choice = button.value;
        let computerChoice = getComputerChoice();
        determineWinner(choice, computerChoice);
    }));
}

getHumanChoice()
