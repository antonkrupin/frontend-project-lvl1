import getRandom from '../utils.js';
import invokeGameFunction from '../index.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandom(0, 100);
  const result = isPrime(question) ? 'yes' : 'no';
  return [question, result];
};

const startGame = () => {
  invokeGameFunction(generateRound, gameRules);
};

export default startGame;
