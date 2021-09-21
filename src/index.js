import readlineSync from 'readline-sync';

const gameRoundCounter = 3;

const mainGameFunction = (gameFunction, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
  for (let i = 0; i < gameRoundCounter; i += 1) {
    const result = gameFunction();
    console.log(`Question: ${result[0]}`);
    const answer = readlineSync.question();
    if (answer !== String(result[1])) {
      console.log(`Your answer: ${answer}`);
      console.log(`${answer} is wrong answer ;(. Correct was '${result[1]}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(`Your answer: ${answer}`);
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default mainGameFunction;
