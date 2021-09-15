import getRandom from '../utils.js';
import mainGameFunction from '../index.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

// игра четное число или нет
const isEven = (number) => {
  const result = (number % 2) === 0;
  return result;
};

const generateRound = () => {
  const randomNumber = getRandom(0, 1000);
  const question = randomNumber;
  const result = isEven(randomNumber) ? 'yes' : 'no';
  return [question, result];
};

const startGame = () => {
  mainGameFunction(generateRound, gameRules);
};

export default startGame;
