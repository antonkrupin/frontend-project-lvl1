import takeUserInput from './cli.js';
import { userRightAnswerOutput, userWrongAnswerOutput, getRandom } from './index.js';

const findNOD = (number1, number2) => {
    let nod = 1;
    let nodCounter = number1;
    if (number1 > number2) {
        nodCounter = number2;
    }

    for (let i = 1; i <= nodCounter; i += 1) {
        if (number1 % i === 0 && number2 % i === 0) {
            nod = i;
        }
    }

    return nod;
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
