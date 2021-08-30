import takeUserInput from './cli.js';
import { userRightAnswerOutput, userWrongAnswerOutput } from './index.js';

// генерирует случайное целое число
const getRandom = (max) => Math.floor(Math.random() * max);

// генерация выражения для пользователя
const getExpression = () => {
    const expressionsSignArray = ['+', '-', '*'];
    const expressionNumber = getRandom(3);
    const firstNumber = getRandom(100);
    const secondNumber = getRandom(100);
    const expressionSign = expressionsSignArray[expressionNumber];
    const expression = `${firstNumber} ${expressionSign} ${secondNumber}`;
    return [firstNumber, secondNumber, expressionSign, expression];
};

const giveRightAnswer = (userName, endGameCounter = 3) => {
    let rightAnswerCounter = 0;
    let isRightAnswer = true;

    // проверка правильности ответа
    const checkUserAnswer = (result, answer) => {
        if (result === answer) {
            userRightAnswerOutput(answer);
            rightAnswerCounter += 1;
        } else {
            userWrongAnswerOutput(userName, answer, result);
            isRightAnswer = false;
        }
    };

    while (isRightAnswer) {
        const expression = getExpression();
        console.log(`Question: ${expression[3]}`);
        const answer = Number(takeUserInput());

        switch (expression[2]) {
        case '+':
        {
            const resultPlus = expression[0] + expression[1];
            checkUserAnswer(resultPlus, answer);
            break;
        }
        case '-':
        {
            const resultMinus = expression[0] - expression[1];
            checkUserAnswer(resultMinus, answer);
            break;
        }
        case '*':
        {
            const resultMultiplication = expression[0] * expression[1];
            checkUserAnswer(resultMultiplication, answer);
            break;
        }
        default:
            // do nothing;
            break;
        }

        if (rightAnswerCounter === endGameCounter) {
            isRightAnswer = false;
            console.log(`Congratulations, ${userName}!`);
        }
    }
};

export default giveRightAnswer;
