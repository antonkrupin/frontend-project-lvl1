import takeUserInput from '../src/cli.js';
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
  console.log(`Question: ${expression.expression()}`);
  const answer = Number(takeUserInput());

  switch (expression.sign) {
    case '+':
    {
      const resultPlus = expression.firstNumber + expression.secondNumber;
      return [answer, resultPlus];
    }
    case '-':
    {
      const resultMinus = expression.firstNumber - expression.secondNumber;
      return [answer, resultMinus];
    }
    case '*':
    {
      const resultMultiplication = expression.firstNumber * expression.secondNumber;
      return [answer, resultMultiplication];
    }
    default:
    // do nothing;
      break;
  }
};

export default giveExpressionResult;
