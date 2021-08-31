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
const checkUserAnswer = (userAnswer, defaultAnswer = 'yes') => {
    if (userAnswer === defaultAnswer) {
        return true;
    }
    return false;
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
        /* if (answer !== 'yes' && answer !== 'no') {
            console.log(`${answer} is wrong answer ;(. You need answer 'yes' or 'no'`);
            console.log(`Let\`s try again, ${userName}`);
            isRightAnswer = false;
        } */

        if (divisionRemainder === 0) {
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
        }

        isGameEnd(userName, endGameCounter);
        /*
        if ((checkUserAnswer(answer, 'no') && divisionRemainder === 0)
            || (checkUserAnswer(answer) && divisionRemainder !== 0)) {
            if (answer === 'yes') {
                userWrongAnswerOutput(userName, answer, 'no');
            } else {
                userWrongAnswerOutput(userName, answer, 'yes');
            }
            isRightAnswer = false;
        }

        if ((checkUserAnswer(answer) && divisionRemainder === 0)
            || (checkUserAnswer(answer, 'no') && divisionRemainder !== 0)) {
            userRightAnswerOutput(answer);
            rightAnswerCounter += 1;
            isRightAnswer = true;
        }
        */

        /* if (rightAnswerCounter === endGameCounter) {
            console.log(`Congratulations, ${userName}!`);
            isRightAnswer = false;
        } */
    }
};

export default guessEvenOrNot;
