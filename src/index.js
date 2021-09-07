// import readlineSync from 'readline-sync';
import { greetUser, userRightAnswerOutput, userWrongAnswerOutput } from './cli.js';
// генерирует случайное целое число
export const getRandom = (max) => Math.floor(Math.random() * max);

// проверка правильности ответа
export const checkUserAnswer = (result, answer, userName) => {
  if (result === answer) {
    userRightAnswerOutput(answer);
    return true;
  }
  userWrongAnswerOutput(userName, answer, result);
  return false;
};

// игра где нужно определить четный элемент или нет
// eslint-disable-next-line consistent-return
/* export const guessEvenOrNot = (userName) => {
  const randomNumber = getRandom(1000);
  console.log(`Question: ${randomNumber}`);
  const answer = takeUserInput();
  const divisionRemainder = randomNumber % 2;

  return isZeroDivision(divisionRemainder, answer, userName);
}; */

// игра где нужно указать резульат выражения
// eslint-disable-next-line consistent-return
/* export const giveExpressionResult = (userName) => {
  const expression = generateExpression();
  console.log(`Question: ${expression.expression()}`);
  const answer = Number(takeUserInput());

  switch (expression.sign) {
    case '+':
    {
      const resultPlus = expression.firstNumber + expression.secondNumber;
      return checkUserAnswer(resultPlus, answer, userName);
    }
    case '-':
    {
      const resultMinus = expression.firstNumber - expression.secondNumber;
      return checkUserAnswer(resultMinus, answer, userName);
    }
    case '*':
    {
      const resultMultiplication = expression.firstNumber * expression.secondNumber;
      return checkUserAnswer(resultMultiplication, answer, userName);
    }
    default:
    // do nothing;
      break;
  }
}; */

// игра где нужно указать пропущенный элемент прогрессии
/* export const completeProgression = () => {
  const step = getRandom(15);
  const progression = generateProgression(step, 10);
  console.log(`Question: ${progression[0].join(' ')}`);
  const answer = Number(takeUserInput());
  const result = progression[1];
  return [answer, result];
}; */

// игра где нужно найти наибольший общий делитель
/* export const giveNODResult = () => {
  const firstNumber = getRandom(100);
  const secondNumber = getRandom(100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = Number(takeUserInput());
  const result = findNOD(firstNumber, secondNumber);
  return [answer, result];
}; */

/*
const guessPrimeOrNot = () => {
  const number = getRandom(100);
  console.log(`Question: ${number}`);
  const answer = takeUserInput();
  const result = isPrime(number);
  return [answer, result];
};
*/
const gameRoundCounter = 3;
// общая функция для старта игры
const startGame = (gameFunction, gameQuestion) => {
  let rightAnswersCounter = 0;
  const userName = greetUser();
  console.log(gameQuestion);
  for (let i = 0; i < gameRoundCounter; i += 1) {
    const result = gameFunction(userName);
    if (result[0] === result[1]) {
      userRightAnswerOutput(result[1]);
    } else {
      userWrongAnswerOutput(userName, result[0], result[1]);
      break;
    }
    rightAnswersCounter += 1;
  }
  if (rightAnswersCounter === gameRoundCounter) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default startGame;
