import getRandom from '../utils.js';
import invokeGameFunction from '../index.js';

const gameRules = 'What is the result of the expression?';

const generateProgression = (progressionStep, progressionSize, firstElement, hiddenIndex) => {
  const progresionArray = [];
  for (let i = 0; i < progressionSize; i += 1) {
    const progressionEl = firstElement + progressionStep * i;
    progresionArray.push(progressionEl);
  }
  progresionArray[hiddenIndex] = '..';
  return progresionArray.join(' ');
};

const generateRound = () => {
  const progressionSize = 10;
  const step = getRandom(0, 15);
  const firstElement = getRandom(0, 15);
  const hiddenIndex = getRandom(0, progressionSize);
  const progression = generateProgression(step, progressionSize, firstElement, hiddenIndex);
  const question = progression;
  const result = firstElement + (hiddenIndex * step);
  return [question, result];
};

const startGame = () => {
  invokeGameFunction(generateRound, gameRules);
};

export default startGame;
