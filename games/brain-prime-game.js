import getRandom from '../src/asset-functions.js';

const isPrime = (number) => {
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

export default guessPrimeOrNot;
