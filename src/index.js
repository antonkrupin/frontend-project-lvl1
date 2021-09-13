import readlineSync from 'readline-sync';
import { userRightAnswerOutput, userWrongAnswerOutput } from './asset-functions.js';

const gameRoundCounter = 3;
// общая функция для старта игры
const mainGameFunction = (gameFunction, gameRules) => {
  let rightAnswersCounter = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
  for (let i = 0; i < gameRoundCounter; i += 1) {
    const result = gameFunction(userName);
    console.log(`Question: ${result[0]}`);
    const answer = readlineSync.question();
    if (answer === String(result[1])) {
      userRightAnswerOutput(answer);
    } else {
      userWrongAnswerOutput(userName, answer, result[1]);
      break;
    }
    rightAnswersCounter += 1;
    // test
  }
  if (rightAnswersCounter === gameRoundCounter) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default mainGameFunction;
