import takeUserInput from './cli.js';
import { getRandom } from './index.js';

// нахождение наибольшего общего делителя
const findNOD = (number1, number2) => {
  if (number2 === 0) {
    return Math.abs(number1);
  }
  return findNOD(number2, number1 % number2);
};

const giveNODResult = () => {
  const firstNumber = getRandom(100);
  const secondNumber = getRandom(100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = Number(takeUserInput());
  const result = findNOD(firstNumber, secondNumber);
  return [answer, result];
};

export default giveNODResult;
