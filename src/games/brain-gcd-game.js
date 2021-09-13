// eslint-disable-next-line import/no-cycle
import getRandom from '../asset-functions.js';
// eslint-disable-next-line import/no-cycle
import mainGameFunction from '../index.js';

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
  const result = findNOD(firstNumber, secondNumber);
  return [question, String(result)];
};

const gameRules = 'Find the greatest common divisor of given numbers';

const startGame = () => {
  mainGameFunction(giveNODResult, gameRules);
};

export default startGame;
