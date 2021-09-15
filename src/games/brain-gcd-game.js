import getRandom from '../utils.js';
import mainGameFunction from '../index.js';

const gameRules = 'Find the greatest common divisor of given numbers';

// нахождение наибольшего общего делителя
const findGCD = (number1, number2) => {
  if (number2 === 0) {
    return Math.abs(number1);
  }
  return findGCD(number2, number1 % number2);
};

const generateRound = () => {
  const firstNumber = getRandom(0, 100);
  const secondNumber = getRandom(0, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const result = findGCD(firstNumber, secondNumber);
  return [question, String(result)];
};

// сам бы я точно не смог догадаться
// что по итогу нужно что то такое
const startGame = () => {
  mainGameFunction(generateRound, gameRules);
};

export default startGame;
