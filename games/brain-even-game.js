import takeUserInput from '../src/cli.js';
import getRandom from '../src/asset-functions.js';

const guessEvenOrNot = () => {
  const randomNumber = getRandom(1000);
  console.log(`Question: ${randomNumber}`);
  const answer = takeUserInput();
  const divisionRemainder = randomNumber % 2;
  const result = divisionRemainder === 0 ? 'yes' : 'no';
  return [answer, result];
};

export default guessEvenOrNot;
