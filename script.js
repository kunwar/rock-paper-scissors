const choices = ['rock', 'paper', 'scissors'];

const btnRock = document.querySelector('#btnrock');
const btnPaper = document.querySelector('#btnpaper');
const btnScissors = document.querySelector('#btnscissors');

const getComputerChoice = function () {
  const randomNum = Math.trunc(Math.random() * 3);
  return choices[randomNum];
};

const getHumanChoice = function (btnId) {
  if (btnId == 'btnrock') {
    return 'rock';
  } else if (btnId == 'btnpaper') {
    return 'paper';
  } else if (btnId == 'btnscissors') {
    return 'scissors';
  }
};

let humanScore = 0;
let computerScore = 0;
let resultString = '';

const playRound = function (e) {
  const humanChoice = getHumanChoice(e.target.id);
  const computerChoice = getComputerChoice();
  if (humanChoice == computerChoice) {
    resultString = `You both chose ${humanChoice}. It's a draw`;
  } else if (humanChoice == 'paper') {
    if (computerChoice == 'rock') {
      humanScore++;
      resultString = 'You win! Paper beats rock.';
    } else if (computerChoice == 'scissors') {
      computerScore++;
      resultString = 'You lose! Scissors beat paper.';
    }
  } else if (humanChoice == 'scissors') {
    if (computerChoice == 'rock') {
      computerScore++;
      resultString = 'You lose! Rock beats scissors.';
    } else if (computerChoice == 'paper') {
      humanScore++;
      resultString = 'You win! Scissors beat paper.';
    }
  } else if (humanChoice == 'rock') {
    if (computerChoice == 'paper') {
      computerScore++;
      resultString = 'You lose! Paper beats rock.';
    } else if (computerChoice == 'scissors') {
      humanScore++;
      resultString = 'You win! Rock beats scissors.';
    }
  }
  document.querySelector('#labelResult').textContent = resultString;
  document.querySelector(
    '#lblHumanScore'
  ).textContent = `Your Score: ${humanScore}`;
  document.querySelector(
    '#lblComputerScore'
  ).textContent = `Computer's Score: ${computerScore}`;
};

btnRock.addEventListener('click', playRound);
btnPaper.addEventListener('click', playRound);
btnScissors.addEventListener('click', playRound);

// for (let i = 0; i < 5; i++) {
//   let humanSelection = getHumanChoice();
//   let computerSelection = getComputerChoice();
//   console.log(playRound(humanSelection, computerSelection));
// }

console.log('------ Final score -------');
console.log(`You: ${humanScore}  Computer: ${computerScore}`);
console.log(
  `The winner is: ${humanScore > computerScore ? 'You' : 'Computer'}`
);
