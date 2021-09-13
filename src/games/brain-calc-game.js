// eslint-disable-next-line import/no-cycle
import getRandom from '../asset-functions.js';
// eslint-disable-next-line import/no-cycle
import startGame from '../index.js';

const calculateExpression = (firstNumber, secondNumber, expressionSign) => {
  switch (expressionSign) {
    case '+': return String(firstNumber + secondNumber);
    case '-': return String(firstNumber - secondNumber);
    case '*': return String(firstNumber * secondNumber);
    default:
      throw new Error('Can`t calculate expression');
  }
};

const generateRound = () => {
  const expressionsSignArray = ['+', '-', '*'];
  const expressionNumber = getRandom(expressionsSignArray.length);
  const firstNumber = getRandom(100);
  const secondNumber = getRandom(100);
  const sign = expressionsSignArray[expressionNumber];
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const result = calculateExpression(firstNumber, secondNumber, sign);
  return [question, result];
};

const gameRules = 'What is the result of the expression?';

export default () => startGame(generateRound, gameRules);
