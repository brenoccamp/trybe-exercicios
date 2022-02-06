const readline = require('readline-sync');


const prizeDrawFeedback = () => {
  const aleatoryNumber = Math.floor(Math.random() * 11);

  const numberInputedByUser = readline.questionInt("Tell me an integer between 0 and 10 to know if it's the number I'm thinking:");

  if (Number(numberInputedByUser) === aleatoryNumber) return console.log(aleatoryNumber, 'Congratulations, right number!');
  if (Number(numberInputedByUser) !== aleatoryNumber) return console.log(`Oops, not this time. The number was ${aleatoryNumber}`);
}

const runGame = () => {
  prizeDrawFeedback();

  const playAgain = readline.question('Do you want to play again? Type "y" for yes or anything else for no:')
  console.log(playAgain);
  if (playAgain !== 'y' && playAgain !== 'Y') {
    return console.log('Ok, until next time!');
  }

  runGame();
}

runGame();