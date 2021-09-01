import takeUserInput from './cli.js';
import {
    userRightAnswerOutput, userWrongAnswerOutput, getRandom, isGameEnd,
} from './index.js';

let isRightAnswer = true;
let endOfGame = true;
let rightAnswerCounter = 0;

const generateProgression = (progressionStep, progressionSize) => {
    const progresionArray = [];
    const progressionFirstEl = getRandom(30);
    progresionArray.push(progressionFirstEl);
    for (let i = 0; i <= progressionSize; i += 1) {
        const elForAdd = progresionArray[i] + progressionSize;
        progresionArray.push(elForAdd);
    }
    return progresionArray;
};

const completeProgression = (userName, endGameCounter = 3) => {
    while (isRightAnswer && endOfGame) {

    }
};

export default completeProgression;
