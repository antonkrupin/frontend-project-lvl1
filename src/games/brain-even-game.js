import getRandom from '../utils.js';
import mainGameFunction from '../index.js';

// игра четное число или нет
const isEven = (number) => {
  const result = (number % 2) === 0;
  return result;
};

const generateRound = () => {
  const randomNumber = getRandom(1000);
  const question = randomNumber;
  const result = isEven(randomNumber) ? 'yes' : 'no';
  return [question, result];
};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
  mainGameFunction(generateRound, gameRules);
};

export default startGame;
