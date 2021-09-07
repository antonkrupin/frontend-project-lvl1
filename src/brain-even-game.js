import { getRandom } from './index.js';
import takeUserInput from './cli.js';

// проверка остатка от деления
/* const isZeroDivision = (divisionRemainder, answer, userName) => {
  if (divisionRemainder === 0 && answer === 'yes') {
    userRightAnswerOutput(answer);
    return true;
  } if (divisionRemainder !== 0 && answer === 'no') {
    userRightAnswerOutput(answer);
    return true;
  }
  if (answer === 'yes') {
    userWrongAnswerOutput(userName, answer, 'no');
  } else {
    userWrongAnswerOutput(userName, answer, 'yes');
  }
  return false;
}; */

const guessEvenOrNot = () => {
  const randomNumber = getRandom(1000);
  console.log(`Question: ${randomNumber}`);
  const answer = takeUserInput();
  const divisionRemainder = randomNumber % 2;
  const result = divisionRemainder === 0 ? 'yes' : 'no';
  return [answer, result];
};

export default guessEvenOrNot;
