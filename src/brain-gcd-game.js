import takeUserInput from './cli.js';
import { userRightAnswerOutput, userWrongAnswerOutput, getRandom } from './index.js';

const findNOD = (number1, number2) => {
    if (number2 === 0) {
        return number1;
    }
    return findNOD(number2, number1 % number2);
};

const giveNODResult = (userName, endGameCounter = 3) => {
    let isRightAnswer = true;
    let rightAnswerCounter = 0;

    while (isRightAnswer) {
        const firstNumber = getRandom(100);
        const secondNumber = getRandom(100);
        console.log(`Question: ${firstNumber} ${secondNumber}`);
        const answer = Number(takeUserInput());

        if (answer === findNOD(firstNumber, secondNumber)) {
            userRightAnswerOutput(answer);
            rightAnswerCounter += 1;
        } else {
            userWrongAnswerOutput(userName, answer, findNOD(firstNumber, secondNumber));
            isRightAnswer = false;
        }

        if (rightAnswerCounter === endGameCounter) {
            isRightAnswer = false;
            console.log(`Congratulations, ${userName}!`);
        }
    }
};

export default giveNODResult;
