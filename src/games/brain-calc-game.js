import getRandom from '../utils.js';
import mainGameFunction from '../index.js';

const gameRules = 'What is the result of the expression?';

const calculateExpression = (firstNumber, secondNumber, expressionSign) => {
  switch (expressionSign) {
    case '+': return firstNumber + secondNumber;
    case '-': return firstNumber - secondNumber;
    case '*': return firstNumber * secondNumber;
    default:
      throw new Error('Can`t calculate expression');
  }
};

const generateRound = () => {
  const expressionsSignArray = ['+', '-', '*'];
  const expressionNumber = getRandom(0, expressionsSignArray.length - 1);
  const firstNumber = getRandom(0, 100);
  const secondNumber = getRandom(0, 100);
  const sign = expressionsSignArray[expressionNumber];
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const result = calculateExpression(firstNumber, secondNumber, sign);
  return [question, result];
};

const startGame = () => {
  mainGameFunction(generateRound, gameRules);
};

export default startGame;
