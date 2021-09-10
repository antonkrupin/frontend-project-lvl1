// eslint-disable-next-line import/no-cycle
import getRandom from '../src/asset-functions.js';

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
  const question = [firstNumber, secondNumber];
  // console.log(`Question: ${firstNumber} ${secondNumber}`);
  // const answer = Number(takeUserInput());
  const result = findNOD(firstNumber, secondNumber);
  return [question, String(result)];
};

export default giveNODResult;
