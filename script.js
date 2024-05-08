const getComputerChoice = function () {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNum = Math.trunc(Math.random() * 3);
  return choices[randomNum];
};

const getHumanChoice = function () {
  const choice = Number(
    prompt('Enter one of the choice number:\n1. Rock\n2. Paper\n3.Scissors')
  );
};
getHumanChoice();
