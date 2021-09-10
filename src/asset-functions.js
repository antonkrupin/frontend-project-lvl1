// eslint-disable-next-line import/no-cycle
import giveExpressionResult from '../games/brain-calc-game.js';
// eslint-disable-next-line import/no-cycle
import giveNODResult from '../games/brain-gcd-game.js';
// eslint-disable-next-line import/no-cycle
import guessPrimeOrNot from '../games/brain-prime-game.js';
// eslint-disable-next-line import/no-cycle
import completeProgression from '../games/brain-progression-game.js';
// eslint-disable-next-line import/no-cycle
import guessEvenOrNot from '../games/brain-even-game.js';
// eslint-disable-next-line import/no-cycle
import startGame from './index.js';

export const startFuckingGame = (gameName, gameRules) => {
  const functionsObject = {
    giveNODResult,
    giveExpressionResult,
    guessPrimeOrNot,
    completeProgression,
    guessEvenOrNot,
  };
  startGame(functionsObject[gameName], gameRules);
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

const getRandom = (max) => Math.floor(Math.random() * max);

export default getRandom;
