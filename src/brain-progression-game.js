// eslint-disable-next-line import/no-cycle
import { getRandom } from './index.js';

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

export default generateProgression;
