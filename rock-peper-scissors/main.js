// will randomly return rock,paper,scissors
getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors'];
  const randomInt = Math.floor(Math.random() * choices.length);
  return choices[randomInt];
};
// values: “rock”, “paper” or “scissors”.

// handles the human choice.
getHumanChoice = () => {
  const useChoice = prompt('enter either rock,paper or scissors:');

  return useChoice;
};

console.log(getHumanChoice());

// making this function case sensitives
humanScore = (useChoice) => {
  if (typeof useChoice !== 'string' || useChoice.length === 0) {
    return useChoice;
  }

  return useChoice.charAt(0).toUpperCase() + useChoice.slice(1).toLowerCase();
};

// the logic to play the entire game
playGame = () => {
  // Declare the players score variables
  let humanScore = 0;
  let computerScore = 0;

  //the logic to play a single round
  playRound = (humanChoice, computerChoice) => {
    //playing logic
    if (humanChoice === computerChoice) {
      return `it's a tia`;
    } else if (
      (humanChoice === 'rock' && computerChoice === 'scissors') ||
      (humanChoice === 'paper' && computerChoice === 'rock') ||
      (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
      return `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
  };

  //looping rounds fro more plays
  for (let rounds = 1; rounds <= 5; rounds++) {
    console.log(`rounds ${rounds}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`user choice ${humanSelection}`);
    console.log(`computer choice ${computerSelection}`);

    // adding increment to any winner.
    const Winner = playRound(humanSelection, computerSelection);
    if (Winner === 'user') {
      humanScore++;
      console.log('you win this round!');
    } else if (Winner === 'computer') {
      computerScore++;
      console.log('computer win this round!');
    } else {
      console.log('this game is a tie!');
    }
  }

  // check  for the final  winner.
  console.log(
    `Final Score:\nUser: ${humanSelection} \nComputer:${computerSelection}`
  );
  if (humanScore > computerScore) {
    console.log('you are the overall winner!');
  } else if (computerScore > humanScore) {
    console.log('computer is the overall winner!');
  } else {
    console.log('the game is a tie!');
  }
};

playGame();
