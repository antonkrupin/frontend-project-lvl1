import takeUserInput from './cli.js';
import {
    userRightAnswerOutput, userWrongAnswerOutput, getRandom, isGameEnd,
} from './index.js';

let isRightAnswer = true;
let endOfGame = true;
let rightAnswerCounter = 0;

const generateProgression = (progressionStep, progressionSize) => {
    const progresionArray = [];
    const progressionFirstEl = getRandom(15);
    const dottedEl = getRandom(progressionSize);
    progresionArray.push(progressionFirstEl);
    for (let i = 0; i <= progressionSize; i += 1) {
        const elForAdd = progresionArray[i] + progressionStep;
        progresionArray.push(elForAdd);
    }
    const elForGuess = progresionArray[dottedEl];
    progresionArray[dottedEl] = '..';
    return [progresionArray, elForGuess];
};

const completeProgression = (userName, endGameCounter = 3) => {
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

export default completeProgression;
