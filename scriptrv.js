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
choiceMade.style.display = 'none';

function getComputerChoice() {
    let choice = choices[Math.floor(Math.random() * choices.length)]
    console.log(choice);
    return choice
};

function determineWinner(human, computer) {
    human = human.toLowerCase();
    computer = computer.toLowerCase();
    if ((human == 'scissors' && computer == 'paper') || (human == 'rock' && computer == 'scissors') || (human == 'paper' && computer == 'rock')) {
        humanScore++;
        humScore.innerHTML = humanScore
    } else if ((human == 'paper' && computer == 'scissors') || (human == 'scissors' && computer == 'rock') || (human == 'rock' && computer == 'paper')) {
        computerScore++;
        compScore.textContent = computerScore
    } else {
        // compScore.textContent = "It is a draw!"
    };



    restartBtn.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;
        humScore.textContent = humanScore;
        compScore.textContent = computerScore;
        conclusion.textContent = '';
    });

    choiceMade.style.display = 'block';
    restartBtn.style.display = 'block';

    choiceMade.textContent = `You chose ${human}, computer chose ${computer}.`;

    if (humanScore >= 3 || computerScore >= 3) {

        if (humanScore > computerScore) {
            conclusion.textContent = "You win the game!"
        } else {
            conclusion.textContent = "Computer wins the game!";
        }
        humanScore = 0;
        computerScore = 0;
        alert("🔄 Game reset. Play again!");
        compScore.textContent = computerScore;
        humScore.textContent = humanScore;
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
