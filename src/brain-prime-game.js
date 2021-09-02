import takeUserInput from './cli.js';
import {
    userRightAnswerOutput, userWrongAnswerOutput, getRandom, isGameEnd,
} from './index.js';

let isRightAnswer = true;
let endOfGame = true;
let rightAnswerCounter = 0;

const guessPrimeOrNot = (userName, endGameCounter = 3) => {
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

export default guessPrimeOrNot;
