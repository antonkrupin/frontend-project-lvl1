// eslint-disable-next-line import/no-cycle
import getRandom from '../src/asset-functions.js';

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

const completeProgression = () => {
  const step = getRandom(15);
  const progression = generateProgression(step, 10);
  const question = progression[0];
  // console.log(`Question: ${progression[0].join(' ')}`);
  // const answer = Number(takeUserInput());
  const result = progression[1];
  return [question, String(result)];
};

export default completeProgression;
