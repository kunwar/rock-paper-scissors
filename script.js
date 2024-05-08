const choices = ['rock', 'paper', 'scissors'];

const getComputerChoice = function () {
  const randomNum = Math.trunc(Math.random() * 3);
  console.log(choices[randomNum]);
  return choices[randomNum];
};

const getHumanChoice = function () {
  const choice = Number(
    prompt('Enter one of the choice number:\n1. Rock\n2. Paper\n3. Scissors')
  );
  console.log(choices[choice - 1]);
  return choices[choice - 1];
};

const playGame = function () {
  let humanScore = 0;
  let computerScore = 0;

  const playRound = function (humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      return `You both chose ${humanChoice}. It's a draw`;
    } else if (humanChoice == 'paper') {
      if (computerChoice == 'rock') {
        humanScore++;
        return 'You win! Paper beats rock.';
      } else if (computerChoice == 'scissors') {
        computerScore++;
        return 'You lose! Scissors beat paper.';
      }
    } else if (humanChoice == 'scissors') {
      if (computerChoice == 'rock') {
        computerScore++;
        return 'You lose! Rock beats scissors.';
      } else if (computerChoice == 'paper') {
        humanScore++;
        return 'You win! Scissors beat paper.';
      }
    } else if (humanChoice == 'rock') {
      if (computerChoice == 'paper') {
        computerScore++;
        return 'You lose! Paper beats rock.';
      } else if (computerChoice == 'scissors') {
        humanScore++;
        return 'You win! Rock beats scissors.';
      }
    }
  };
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(playRound(humanSelection, computerSelection));
  }
  console.log('------ Final score -------');
  console.log(`You: ${humanScore}  Computer: ${computerScore}`);
  console.log(
    `The winner is: ${humanScore > computerScore ? 'You' : 'Computer'}`
  );
};

playGame();
