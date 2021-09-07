import takeUserInput from './cli.js';
import findNOD from './brain-gcd-game.js';
// eslint-disable-next-line import/no-cycle
import generateProgression from './brain-progression-game.js';
// eslint-disable-next-line import/no-cycle
import generateExpression from './brain-calc-game.js';
import isPrime from './brain-prime-game.js';
// eslint-disable-next-line import/no-cycle
import isZeroDivision from './brain-even-game.js';

// приветствие пользователя
export const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = takeUserInput('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// вывод сообщения в случае верного ответа
export const userRightAnswerOutput = (answer) => {
  console.log(`Your answer: ${answer}`);
  console.log('Correct!');
};

// вывод сообщения в случае не верного ответа
export const userWrongAnswerOutput = (userName, userAnswer, correctAnswer) => {
  console.log(`${userAnswer} is wrong answer ;(. Correct was '${correctAnswer}'`);
  console.log(`Let's try again, ${userName}!`);
};

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
export const guessEvenOrNot = (userName) => {
  const randomNumber = getRandom(1000);
  console.log(`Question: ${randomNumber}`);
  const answer = takeUserInput();
  const divisionRemainder = randomNumber % 2;

  return isZeroDivision(divisionRemainder, answer, userName);
};

// игра где нужно указать резульат выражения
// eslint-disable-next-line consistent-return
export const giveExpressionResult = (userName) => {
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
};

// игра где нужно указать пропущенный элемент прогрессии
export const completeProgression = (userName) => {
  const step = getRandom(15);
  const progression = generateProgression(step, 10);
  console.log(`Question: ${progression[0].join(' ')}`);
  const answer = Number(takeUserInput());
  const result = progression[1];
  return checkUserAnswer(result, answer, userName);
};

// игра где нужно найти наибольший общий делитель
export const giveNODResult = (userName) => {
  const firstNumber = getRandom(100);
  const secondNumber = getRandom(100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = Number(takeUserInput());
  const result = findNOD(firstNumber, secondNumber);
  return checkUserAnswer(result, answer, userName);
};

// игра где нужно определить является ли число простым
export const guessPrimeOrNot = (userName) => {
  const number = getRandom(100);
  console.log(`Question: ${number}`);
  const answer = takeUserInput();
  const result = isPrime(number);
  return checkUserAnswer(result, answer, userName);
};

// общая функция для старта игры
const startGame = (userName, gameFunction, endGameCounter = 3) => {
  let rightAnswerCounter = 0;
  let isRightAnswer = true;

  while (isRightAnswer) {
    const result = gameFunction(userName);
    if (result) {
      rightAnswerCounter += 1;
    } else {
      isRightAnswer = false;
    }

    if (rightAnswerCounter === endGameCounter) {
      console.log(`Congratulations, ${userName}!`);
      isRightAnswer = false;
    }
  }
};

export default startGame;
