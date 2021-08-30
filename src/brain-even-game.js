import takeUserInput from './cli.js';
import { userRightAnswerOutput, userWrongAnswerOutput } from './index.js';

// генерирует случайное целое число
const getRandom = (max) => Math.floor(Math.random() * max);

// проверка на правильность ответа
const checkUserAnswer = (userAnswer, defaultAnswer = 'yes') => {
    if (userAnswer === defaultAnswer) {
        return true;
    }
    return false;
};

const guessEvenOrNot = (userName, endGameCounter = 3) => {
    let rightAnswerCounter = 0;
    let isRightAnswer = true;

    while (isRightAnswer) {
        const randomNumber = getRandom(1000);
        console.log(`Question: ${randomNumber}`);
        const answer = takeUserInput();
        const divisionRemainder = randomNumber % 2;

        if (answer !== 'yes' && answer !== 'no') {
            console.log(`${answer} is wrong answer ;(. You need answer 'yes' or 'no'`);
            console.log(`Let\`s try again, ${userName}`);
            isRightAnswer = false;
        }

        if ((checkUserAnswer(answer, 'no') && divisionRemainder === 0)
            || (checkUserAnswer(answer) && divisionRemainder !== 0)) {
            if (answer === 'yes') {
                userWrongAnswerOutput(userName, answer, 'no');
                isRightAnswer = false;
            } else {
                userWrongAnswerOutput(userName, answer, 'yes');
                isRightAnswer = false;
            }
        }

        if ((checkUserAnswer(answer) && divisionRemainder === 0)
            || (checkUserAnswer(answer, 'no') && divisionRemainder !== 0)) {
            userRightAnswerOutput(answer);
            rightAnswerCounter += 1;
            isRightAnswer = true;
        }

        if (rightAnswerCounter === endGameCounter) {
            console.log(`Congratulations, ${userName}!`);
            isRightAnswer = false;
        }
    }
};

export default guessEvenOrNot;
