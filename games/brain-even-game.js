// import takeUserInput from '../src/cli.js';
// eslint-disable-next-line import/no-cycle
import getRandom from '../src/asset-functions.js';

const guessEvenOrNot = () => {
  const randomNumber = getRandom(1000);
  const question = randomNumber;
  // console.log(`Question: ${randomNumber}`);
  // const answer = takeUserInput();
  const divisionRemainder = randomNumber % 2;
  const result = divisionRemainder === 0 ? 'yes' : 'no';
  return [question, result];
};

export default guessEvenOrNot;
