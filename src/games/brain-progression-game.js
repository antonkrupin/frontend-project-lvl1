// eslint-disable-next-line import/no-cycle
import getRandom from '../asset-functions.js';
// eslint-disable-next-line import/no-cycle
import mainGameFunction from '../index.js';

// генерация последовательности
const generateProgression = (progressionStep, progressionSize, firstElement = 5) => {
  const progresionArray = [];
  const progressionFirstEl = firstElement;
  const hiddenIndex = getRandom(progressionSize);
  progresionArray.push(progressionFirstEl);
  for (let i = 0; i <= progressionSize; i += 1) {
    const progressionEl = progresionArray[i] + progressionStep;
    progresionArray.push(progressionEl);
  }
  const elForGuess = progresionArray[hiddenIndex];
  progresionArray[hiddenIndex] = '..';
  return [progresionArray, elForGuess];
};

const generateRound = () => {
  const progressionSize = 10;
  const step = getRandom(15);
  const firstElement = getRandom(15);
  const progression = generateProgression(step, progressionSize, firstElement);
  const question = progression[0];
  const result = progression[1];
  return [question, String(result)];
};

const gameRules = 'What is the result of the expression?';

const startGame = () => {
  mainGameFunction(generateRound, gameRules);
};

export default startGame;
