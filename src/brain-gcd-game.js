import takeUserInput from './cli.js';
import {
    userRightAnswerOutput, userWrongAnswerOutput, getRandom, isGameEnd,
} from './index.js';

let isRightAnswer = true;
let endOfGame = true;
let rightAnswerCounter = 0;

// нахождение наибольшего общего делителя
const findNOD = (number1, number2) => {
    if (number2 === 0) {
        return Math.abs(number1);
    }
    return findNOD(number2, number1 % number2);
};

const giveNODResult = (userName, endGameCounter = 3) => {
    while (isRightAnswer && endOfGame) {
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

        endOfGame = isGameEnd(rightAnswerCounter, endGameCounter, userName);
    }
};

export default giveNODResult;
