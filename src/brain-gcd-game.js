import takeUserInput from './cli.js';
import { userRightAnswerOutput, userWrongAnswerOutput, getRandom } from './index.js';

let isRightAnswer = true;
let rightAnswerCounter = 0;

const findNOD = (number1, number2) => {
    if (number2 === 0) {
        return Math.abs(number1);
    }
    return findNOD(number2, number1 % number2);
};

const isGameEnd = (userName, endGameCounter) => {
    if (rightAnswerCounter === endGameCounter) {
        isRightAnswer = false;
        console.log(`Congratulations, ${userName}!`);
    }
};

const giveNODResult = (userName, endGameCounter = 3) => {
    while (isRightAnswer && endGameCounter !== 0) {
        const firstNumber = getRandom(100);
        const secondNumber = getRandom(100);
        console.log(`Question: ${firstNumber} ${secondNumber}`);
        const answer = Number(takeUserInput());
        const result = findNOD(firstNumber, secondNumber);

        if (answer === result) {
            userRightAnswerOutput(answer);
            rightAnswerCounter += 1;
        } else {
            userWrongAnswerOutput(userName, answer, result);
            isRightAnswer = false;
        }

        isGameEnd(userName, endGameCounter);
    }
};

export default giveNODResult;
