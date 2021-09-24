import readlineSync from 'readline-sync';

const roundCount = 3;

export default (startGame, gameRules) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = startGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question();
    console.log(`Your answer: ${userAnswer}`);
    if (userAnswer !== answer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
