// eslint-disable-next-line import/no-cycle
import getRandom from '../asset-functions.js';

// eslint-disable-next-line consistent-return
const calculateExpression = (firstNumber, secondNumber, expressionSign) => {
  switch (expressionSign) {
    case '+':
    {
      const resultPlus = firstNumber + secondNumber;
      return String(resultPlus);
    }
    case '-':
    {
      const resultMinus = firstNumber - secondNumber;
      return String(resultMinus);
    }
    case '*':
    {
      const resultMultiplication = firstNumber * secondNumber;
      return String(resultMultiplication);
    }
    default:
    // do nothing;
      break;
  }
};

const giveExpressionResult = () => {
  const expressionsSignArray = ['+', '-', '*'];
  const expressionNumber = getRandom(expressionsSignArray.length);
  const firstNumber = getRandom(100);
  const secondNumber = getRandom(100);
  const sign = expressionsSignArray[expressionNumber];
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const result = calculateExpression(firstNumber, secondNumber, sign);
  return [question, result];
};

export default giveExpressionResult;
