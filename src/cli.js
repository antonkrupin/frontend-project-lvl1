import readlineSync from 'readline-sync';

const takeUserInput = (userQuestion) => {
  const input = readlineSync.question(userQuestion);
  return input;
};

export default takeUserInput;
