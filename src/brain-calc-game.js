import takeUserInput from './cli.js';

// генерирует случайное целое число
const getRandom = (max) => Math.floor(Math.random() * max);

// вывод сообщения в случае не верного ответа
const userWrongAnswerOutput = (userName, userAnswer, correctAnswer = 'no') => {
    console.log(`${userAnswer} is wrong answer ;(. Correct was '${correctAnswer}'`);
    console.log(`Let\`s try again, ${userName}`);
};

// генерация выражения для пользователя
const getExpression = () => {
    const expressionsArray = ['+', '-', '*'];
    const expressionNumber = getRandom(3);
    const firstNumber = getRandom(100);
    const secondNumber = getRandom(100);
    const expression = `${firstNumber} ${expressionsArray[expressionNumber]} ${secondNumber}`;
    return [firstNumber, secondNumber, expression, expressionsArray[expressionNumber]];
};

const giveRightAnswer = (userName, endGameCounter = 3) => {
    let rightAnswerCounter = 0;
    let isRightAnswer = true;

    while (isRightAnswer) {
        const expression = getExpression();
        console.log(`Question: ${expression[2]}`);
        const answer = Number(takeUserInput());

        switch (expression[3]) {
        case '+':
        {
            const resultPlus = expression[0] + expression[1];
            if (resultPlus === answer) {
                console.log(`Your answer: ${answer}`);
                console.log('Correct!');
                rightAnswerCounter += 1;
            } else {
                userWrongAnswerOutput(userName, answer, resultPlus);
                isRightAnswer = false;
            }
            break;
        }
        case '-':
        {
            const resultMinus = expression[0] - expression[1];
            if (resultMinus === answer) {
                console.log(`Your answer: ${answer}`);
                console.log('Correct!');
                rightAnswerCounter += 1;
            } else {
                userWrongAnswerOutput(userName, answer, resultMinus);
                isRightAnswer = false;
            }
            break;
        }
        case '*':
        {
            const resultMultiplication = expression[0] * expression[1];
            if (resultMultiplication === answer) {
                console.log(`Your answer: ${answer}`);
                console.log('Correct!');
                rightAnswerCounter += 1;
            } else {
                userWrongAnswerOutput(userName, answer, resultMultiplication);
                isRightAnswer = false;
            }
            break;
        }
        default:
            console.log('test');
        }

        if (rightAnswerCounter === endGameCounter) {
            isRightAnswer = false;
            console.log(`Congratulations, ${userName}!`);
        }
    }
};

export default giveRightAnswer;
