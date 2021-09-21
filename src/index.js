import readlineSync from 'readline-sync';

const gameRoundCounter = 3;

const mainGameFunction = (startGame, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
  for (let i = 0; i < gameRoundCounter; i += 1) {
    const [question, answer] = startGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question();
    if (userAnswer !== String(answer)) {
      console.log(`Your answer: ${userAnswer}`);
      console.log(`${userAnswer} is wrong answer ;(. Correct was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log(`Your answer: ${userAnswer}`);
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default mainGameFunction;
