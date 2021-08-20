import readlineSync from 'readline-sync';

const takeUserInput = () => {
  const input = readlineSync.question('May I have your name? ');
  return input;
};
export default takeUserInput;
