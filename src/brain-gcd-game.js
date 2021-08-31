import takeUserInput from './cli.js';

const giveNODResult = (userName, endGameCounter = 3) => {
    const answer = takeUserInput();
    console.log(answer);
};

export default giveNODResult;
