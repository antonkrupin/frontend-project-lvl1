import readlineSync from 'readline-sync';

// считывание ввода пользователя
const takeUserInput = (userQuestion) => {
  const input = readlineSync.question(userQuestion);
  return input;
};

export default takeUserInput;
