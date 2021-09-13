import getRandom from '../asset-functions.js';
import mainGameFunction from '../index.js';

// нахождение наибольшего общего делителя
const findGCD = (number1, number2) => {
  if (number2 === 0) {
    return Math.abs(number1);
  }
  return findGCD(number2, number1 % number2);
};

const generateRound = () => {
  const firstNumber = getRandom(100);
  const secondNumber = getRandom(100);
  const question = [firstNumber, secondNumber];
  const result = findGCD(firstNumber, secondNumber);
  return [question, String(result)];
};

const gameRules = 'Find the greatest common divisor of given numbers';

const startGame = () => {
  mainGameFunction(generateRound, gameRules);
};

export default startGame;
