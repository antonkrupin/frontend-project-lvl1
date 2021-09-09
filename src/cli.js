import readlineSync from 'readline-sync';

// считывание ввода пользователя
const takeUserInput = (userQuestion) => {
  const input = readlineSync.question(userQuestion);
  return input;
};

// приветствие пользователя (то что оставить)
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
  console.log(`Let's try again, ${userName}!`);
};

export default takeUserInput;
