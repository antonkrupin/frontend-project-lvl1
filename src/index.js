import takeUserInput from './cli.js';
import findNOD from './brain-gcd-game.js';

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

// проверка окончания игры
export const isGameEnd = (counter, endGameCounter, userName) => {
  if (counter === endGameCounter) {
    console.log(`Congratulations, ${userName}!`);
    return false;
  }
  return true;
};

export const giveNODResult = (userName) => {
  const firstNumber = getRandom(100);
  const secondNumber = getRandom(100);
  console.log(`Question: ${firstNumber} ${secondNumber}`);
  const answer = Number(takeUserInput());
  const result = findNOD(firstNumber, secondNumber);
  if (answer === result) {
    userRightAnswerOutput(answer);
    return true;
  }
  userWrongAnswerOutput(userName, answer, result);
  return false;
};

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
