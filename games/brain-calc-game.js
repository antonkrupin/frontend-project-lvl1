// eslint-disable-next-line import/no-cycle
import getRandom from '../src/asset-functions.js';

// генерация выражения для пользователя
export const generateExpression = () => {
  const expressionsSignArray = ['+', '-', '*'];
  const expressionNumber = getRandom(expressionsSignArray.length);
  const expression = {
    firstNumber: getRandom(100),
    secondNumber: getRandom(100),
    sign: expressionsSignArray[expressionNumber],
    expression() {
      return `${expression.firstNumber} ${expression.sign} ${expression.secondNumber}`;
    },
  };
  return expression;
};

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
  // const expression = generateExpression();
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  // eslint-disable-next-line max-len
  const result = calculateExpression(firstNumber, secondNumber, sign);
  return [question, result];
};

export default giveExpressionResult;
