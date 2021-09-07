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

/* const completeProgression = (userName, endGameCounter = 3) => {
  while (isRightAnswer && endOfGame) {
    const step = getRandom(15);
    const progression = generateProgression(step, 10);
    console.log(`Question: ${progression[0].join(' ')}`);
    const answer = Number(takeUserInput());
    if (answer === progression[1]) {
      userRightAnswerOutput(answer);
      rightAnswerCounter += 1;
    } else {
      userWrongAnswerOutput(userName, answer, progression[1]);
      isRightAnswer = false;
    }

    endOfGame = isGameEnd(rightAnswerCounter, endGameCounter, userName);
  }
};
*/
export default generateProgression;
