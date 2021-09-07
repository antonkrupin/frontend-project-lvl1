// import readlineSync from 'readline-sync';
import { greetUser, userRightAnswerOutput, userWrongAnswerOutput } from './cli.js';
// генерирует случайное целое число
export const getRandom = (max) => Math.floor(Math.random() * max);

// проверка правильности ответа
/* export const checkUserAnswer = (result, answer, userName) => {
  if (result === answer) {
    userRightAnswerOutput(answer);
    return true;
  }
  userWrongAnswerOutput(userName, answer, result);
  return false;
}; */

const gameRoundCounter = 3;
// общая функция для старта игры
const startGame = (gameFunction, gameQuestion) => {
  let rightAnswersCounter = 0;
  const userName = greetUser();
  console.log(gameQuestion);
  for (let i = 0; i < gameRoundCounter; i += 1) {
    const result = gameFunction(userName);
    if (result[0] === result[1]) {
      userRightAnswerOutput(result[1]);
    } else {
      userWrongAnswerOutput(userName, result[0], result[1]);
      break;
    }
    rightAnswersCounter += 1;
  }
  if (rightAnswersCounter === gameRoundCounter) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
