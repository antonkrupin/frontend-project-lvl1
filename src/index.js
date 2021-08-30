import takeUserInput from './cli.js';

// приветствие пользователя
const greetUser = () => {
    console.log('Welcome to the Brain Games!');
    const userName = takeUserInput('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName;
};

// вывод сообщения в случае верного ответа
const userRightAnswerOutput = (answer) => {
    console.log(`Your answer: ${answer}`);
    console.log('Correct!');
};

// вывод сообщения в случае не верного ответа
const userWrongAnswerOutput = (userName, userAnswer, correctAnswer) => {
    console.log(`${userAnswer} is wrong answer ;(. Correct was '${correctAnswer}'`);
    console.log(`Let\`s try again, ${userName}`);
};

export { greetUser, userRightAnswerOutput, userWrongAnswerOutput };
