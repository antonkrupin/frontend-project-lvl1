// eslint-disable-next-line import/no-cycle
import { userRightAnswerOutput, userWrongAnswerOutput } from './index.js';

// проверка остатка от деления
const isZeroDivision = (divisionRemainder, answer, userName) => {
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
};

export default isZeroDivision;
