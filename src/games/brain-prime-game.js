import getRandom from '../asset-functions.js';
import mainGameFunction from '../index.js';

const isPrime = (number) => {
  if (number === 1) {
    return true;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandom(100);
  const result = isPrime(question) ? 'yes' : 'no';
  return [question, result];
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = () => {
  mainGameFunction(generateRound, gameRules);
};

export default startGame;
