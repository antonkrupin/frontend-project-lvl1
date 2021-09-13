// eslint-disable-next-line import/no-cycle
import getRandom from '../asset-functions.js';
// eslint-disable-next-line import/no-cycle
import mainGameFunction from '../index.js';

const isPrime = (number) => {
  if (number === 1) {
    return 'yes';
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const guessPrimeOrNot = () => {
  const question = getRandom(100);
  const result = isPrime(question);
  return [question, result];
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => {
  mainGameFunction(guessPrimeOrNot, gameRules);
};

export default startGame;
