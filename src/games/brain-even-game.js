// eslint-disable-next-line import/no-cycle
import getRandom from '../asset-functions.js';

// игра четное число или нет
const guessEvenOrNot = () => {
  const randomNumber = getRandom(1000);
  const question = randomNumber;
  const divisionRemainder = randomNumber % 2;
  const result = divisionRemainder === 0 ? 'yes' : 'no';
  return [question, result];
};

export default guessEvenOrNot;
