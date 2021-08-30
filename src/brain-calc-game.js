import takeUserInput from './cli.js';
import { userRightAnswerOutput, userWrongAnswerOutput, getRandom } from './index.js';

// генерация выражения для пользователя
const getExpression = () => {
    const expressionsSignArray = ['+', '-', '*'];
    const expressionNumber = getRandom(3);
    const expression = {
        firstNumber: getRandom(100),
        secondNumber: getRandom(100),
        sign: expressionsSignArray[expressionNumber],
        expression() {
            return `${this.firstNumber} ${this.sign} ${this.secondNumber}`;
        },
    };
    return expression;
};

const giveExpressionResult = (userName, endGameCounter = 3) => {
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
        console.log(`Question: ${expression.expression()}`);
        const answer = Number(takeUserInput());

        switch (expression.sign) {
        case '+':
        {
            const resultPlus = expression.firstNumber + expression.secondNumber;
            checkUserAnswer(resultPlus, answer);
            break;
        }
        case '-':
        {
            const resultMinus = expression.firstNumber - expression.secondNumber;
            checkUserAnswer(resultMinus, answer);
            break;
        }
        case '*':
        {
            const resultMultiplication = expression.firstNumber * expression.secondNumber;
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

export default giveExpressionResult;
