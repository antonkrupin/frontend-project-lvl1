import takeUserInput from './cli.js';
import { userRightAnswerOutput, userWrongAnswerOutput, getRandom } from './index.js';

let rightAnswerCounter = 0;
let isRightAnswer = true;

const isGameEnd = (userName, endGameCounter) => {
    if (rightAnswerCounter === endGameCounter) {
        isRightAnswer = false;
        console.log(`Congratulations, ${userName}!`);
    }
};

// проверка корректности ввода ответа
const isCorrectAnswer = (answer, userName) => {
    if (answer !== 'yes' && answer !== 'no') {
        console.log(`${answer} is wrong answer ;(. You need answer 'yes' or 'no'`);
        console.log(`Let\`s try again, ${userName}`);
        isRightAnswer = false;
        return false;
    }
    return true;
};

// проверка на правильность ответа
const checkUserAnswer = (userAnswer, defaultAnswer) => {
    if (userAnswer === defaultAnswer) {
        return true;
    }
    return false;
};

// проверка на 0
const isZeroDivision = (divisionRemainder, answer, userName) => {
    if (divisionRemainder === 0) {
        if (checkUserAnswer(answer, 'yes')) {
            userRightAnswerOutput(answer);
            rightAnswerCounter += 1;
        }
    } else {
        userWrongAnswerOutput(userName, answer, 'yes');
        isRightAnswer = false;
    }

    if (divisionRemainder !== 0) {
        if (checkUserAnswer(answer, 'no')) {
            userRightAnswerOutput(answer);
            rightAnswerCounter += 1;
        } else {
            userWrongAnswerOutput(userName, answer, 'no');
            isRightAnswer = false;
        }
    }
};

const guessEvenOrNot = (userName, endGameCounter = 3) => {
    while (isRightAnswer) {
        const randomNumber = getRandom(1000);
        console.log(`Question: ${randomNumber}`);
        const answer = takeUserInput();
        const divisionRemainder = randomNumber % 2;

        if (!isCorrectAnswer(answer, userName)) {
            break;
        }

        isZeroDivision(divisionRemainder, answer, userName);

        /* if (divisionRemainder === 0) {
            if (checkUserAnswer(answer, 'yes')) {
                userRightAnswerOutput(answer);
                rightAnswerCounter += 1;
            } else {
                userWrongAnswerOutput(userName, answer, 'yes');
                isRightAnswer = false;
            }
        }

        if (divisionRemainder !== 0) {
            if (checkUserAnswer(answer, 'no')) {
                userRightAnswerOutput(answer);
                rightAnswerCounter += 1;
            } else {
                userWrongAnswerOutput(userName, answer, 'no');
                isRightAnswer = false;
            }
        } */

        isGameEnd(userName, endGameCounter);
    }
};

export default guessEvenOrNot;
