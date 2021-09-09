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
import startGame from './index.js';

const getRandom = (max) => Math.floor(Math.random() * max);

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

export default getRandom;
