import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-cycle
import { userRightAnswerOutput, userWrongAnswerOutput } from './asset-functions.js';

const gameRoundCounter = 3;
// общая функция для старта игры
const startGame = (gameFunction, gameRules) => {
  let rightAnswersCounter = 0;
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRules);
  for (let i = 0; i < gameRoundCounter; i += 1) {
    const result = gameFunction(userName);
    if (typeof (result[0]) !== 'object') {
      console.log(`Question: ${result[0]}`);
    } else {
      console.log(`Question: ${result[0].join(' ')}`);
    }
    const answer = readlineSync.question();
    if (answer === result[1]) {
      userRightAnswerOutput(answer);
    } else {
      userWrongAnswerOutput(userName, answer, result[1]);
      break;
    }
    rightAnswersCounter += 1;
  }
  if (rightAnswersCounter === gameRoundCounter) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
