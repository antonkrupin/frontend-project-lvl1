import takeUserInput from './cli.js';
import { getRandom } from './index.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const guessPrimeOrNot = () => {
  const number = getRandom(100);
  console.log(`Question: ${number}`);
  const answer = takeUserInput();
  const result = isPrime(number);
  return [answer, result];
};

export default guessPrimeOrNot;
