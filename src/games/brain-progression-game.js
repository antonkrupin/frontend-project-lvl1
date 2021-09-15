import getRandom from '../utils.js';
import mainGameFunction from '../index.js';

const gameRules = 'What is the result of the expression?';

// генерация последовательности
const generateProgression = (progressionStep, progressionSize, firstElement = 5, hiddenIndex) => {
  const progresionArray = [];
  progresionArray.push(firstElement);
  for (let i = 0; i <= progressionSize; i += 1) {
    const progressionEl = progresionArray[i] + progressionStep;
    progresionArray.push(progressionEl);
  }
  progresionArray[hiddenIndex] = '..';
  return [progresionArray];
};

const generateRound = () => {
  const progressionSize = 10;
  const step = getRandom(0, 15);
  const firstElement = getRandom(0, 15);
  const hiddenIndex = getRandom(0, progressionSize);
  const progression = generateProgression(step, progressionSize, firstElement, hiddenIndex);
  const question = progression[0];
  const result = firstElement + (hiddenIndex * step);
  return [String(question).replace(/,/g, ' '), result];
};

const startGame = () => {
  mainGameFunction(generateRound, gameRules);
};

export default startGame;
