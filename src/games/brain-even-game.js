// eslint-disable-next-line import/no-cycle
import getRandom from '../asset-functions.js';
// eslint-disable-next-line import/no-cycle
import mainGameFunction from '../index.js';

// игра четное число или нет
const guessEvenOrNot = () => {
  const randomNumber = getRandom(1000);
  const question = randomNumber;
  const divisionRemainder = randomNumber % 2;
  const result = divisionRemainder === 0 ? 'yes' : 'no';
  return [question, result];
};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
  mainGameFunction(guessEvenOrNot, gameRules);
};

export default startGame;
