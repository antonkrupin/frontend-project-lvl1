import readlineSync from 'readline-sync';

const gameRoundCounter = 3;

const mainGameFunction = (startGame, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
  for (let i = 0; i < gameRoundCounter; i += 1) {
    const result = startGame();
    console.log(`Question: ${result[0]}`);
    const userAnswer = readlineSync.question();
    if (userAnswer !== String(result[1])) {
      console.log(`Your answer: ${userAnswer}`);
      console.log(`${userAnswer} is wrong answer ;(. Correct was '${result[1]}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(`Your answer: ${userAnswer}`);
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default mainGameFunction;
