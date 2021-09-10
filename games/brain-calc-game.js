// eslint-disable-next-line import/no-cycle
import getRandom from '../src/asset-functions.js';

// генерация выражения для пользователя
const generateExpression = () => {
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
const giveExpressionResult = () => {
  const expression = generateExpression();
  const question = expression.expression();
  switch (expression.sign) {
    case '+':
    {
      const resultPlus = expression.firstNumber + expression.secondNumber;
      return [question, String(resultPlus)];
    }
    case '-':
    {
      const resultMinus = expression.firstNumber - expression.secondNumber;
      return [question, String(resultMinus)];
    }
    case '*':
    {
      const resultMultiplication = expression.firstNumber * expression.secondNumber;
      return [question, String(resultMultiplication)];
    }
    default:
    // do nothing;
      break;
  }
};

export default giveExpressionResult;
