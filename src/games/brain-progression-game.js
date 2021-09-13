// eslint-disable-next-line import/no-cycle
import getRandom from '../asset-functions.js';
// eslint-disable-next-line import/no-cycle
import mainGameFunction from '../index.js';

// генерация последовательности
const generateProgression = (progressionStep, progressionSize) => {
  const progresionArray = [];
  const progressionFirstEl = getRandom(15);
  const dottedElIndex = getRandom(progressionSize);
  progresionArray.push(progressionFirstEl);
  for (let i = 0; i <= progressionSize; i += 1) {
    const progressionEl = progresionArray[i] + progressionStep;
    progresionArray.push(progressionEl);
  }
  const elForGuess = progresionArray[dottedElIndex];
  progresionArray[dottedElIndex] = '..';
  return [progresionArray, elForGuess];
};

const generateRound = () => {
  const step = getRandom(15);
  const progression = generateProgression(step, 10);
  const question = progression[0];
  const result = progression[1];
  return [question, String(result)];
};

const gameRules = 'What is the result of the expression?';

const startGame = () => {
  mainGameFunction(generateRound, gameRules);
};

export default startGame;
