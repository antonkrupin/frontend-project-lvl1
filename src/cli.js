import readlineSync from 'readline-sync';

// приветствие пользователя
const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export default greetUser;
