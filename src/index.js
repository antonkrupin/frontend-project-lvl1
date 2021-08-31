import takeUserInput from './cli.js';

// приветствие пользователя
export const greetUser = () => {
    console.log('Welcome to the Brain Games!');
    const userName = takeUserInput('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName;
};

// вывод сообщения в случае верного ответа
export const userRightAnswerOutput = (answer) => {
    console.log(`Your answer: ${answer}`);
    console.log('Correct!');
};

// вывод сообщения в случае не верного ответа
export const userWrongAnswerOutput = (userName, userAnswer, correctAnswer) => {
    console.log(`${userAnswer} is wrong answer ;(. Correct was '${correctAnswer}'`);
    console.log(`Let\`s try again, ${userName}`);
};

// генерирует случайное целое число
export const getRandom = (max) => Math.floor(Math.random() * max);

export const isGameEndTest = (counter, userName, endGameCounter) => {
    if (counter === endGameCounter) {
        console.log(`Congratulations, ${userName}!`);
        return false;
    }
    return true;
};
