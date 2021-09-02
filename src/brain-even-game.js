import takeUserInput from './cli.js';
import {
  userRightAnswerOutput, userWrongAnswerOutput, getRandom, isGameEnd,
} from './index.js';

let rightAnswerCounter = 0;
let endOfGame = true;
let isRightAnswer = true;

// проверка корректности ввода ответа
const isCorrectAnswer = (answer, userName) => {
  if (answer !== 'yes' && answer !== 'no') {
    console.log(`${answer} is wrong answer ;(. You need answer 'yes' or 'no'`);
    console.log(`Let\`s try again, ${userName}`);
    isRightAnswer = false;
    return false;
  }
  return true;
};

// проверка остатка от деления
const isZeroDivision = (divisionRemainder, answer, userName) => {
  if (divisionRemainder === 0 && answer === 'yes') {
    userRightAnswerOutput(answer);
    rightAnswerCounter += 1;
  } else if (divisionRemainder !== 0 && answer === 'no') {
    userRightAnswerOutput(answer);
    rightAnswerCounter += 1;
  } else {
    if (answer === 'yes') {
      userWrongAnswerOutput(userName, answer, 'no');
    } else {
      userWrongAnswerOutput(userName, answer, 'yes');
    }
    isRightAnswer = false;
  }
};

const guessEvenOrNot = (userName, endGameCounter = 3) => {
  while (isRightAnswer && endOfGame) {
    const randomNumber = getRandom(1000);
    console.log(`Question: ${randomNumber}`);
    const answer = takeUserInput();
    const divisionRemainder = randomNumber % 2;

    if (!isCorrectAnswer(answer, userName)) {
      break;
    }

    isZeroDivision(divisionRemainder, answer, userName);

    endOfGame = isGameEnd(rightAnswerCounter, endGameCounter, userName);
  }
};

export default guessEvenOrNot;
