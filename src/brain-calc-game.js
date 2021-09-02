import takeUserInput from './cli.js';
import {
  userRightAnswerOutput, userWrongAnswerOutput, getRandom, isGameEnd,
} from './index.js';

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

let rightAnswerCounter = 0;
let endOfGame = true;
let isRightAnswer = true;

// проверка правильности ответа
const checkUserAnswer = (result, answer, userName) => {
  if (result === answer) {
    userRightAnswerOutput(answer);
    rightAnswerCounter += 1;
  } else {
    userWrongAnswerOutput(userName, answer, result);
    isRightAnswer = false;
  }
};

const giveExpressionResult = (userName, endGameCounter = 3) => {
  while (isRightAnswer && endOfGame) {
    const expression = generateExpression();
    console.log(`Question: ${expression.expression()}`);
    const answer = Number(takeUserInput());

    switch (expression.sign) {
      case '+':
      {
        const resultPlus = expression.firstNumber + expression.secondNumber;
        checkUserAnswer(resultPlus, answer, userName);
        break;
      }
      case '-':
      {
        const resultMinus = expression.firstNumber - expression.secondNumber;
        checkUserAnswer(resultMinus, answer, userName);
        break;
      }
      case '*':
      {
        const resultMultiplication = expression.firstNumber * expression.secondNumber;
        checkUserAnswer(resultMultiplication, answer, userName);
        break;
      }
      default:
        // do nothing;
        break;
    }

    endOfGame = isGameEnd(rightAnswerCounter, endGameCounter, userName);
  }
};

export default giveExpressionResult;
