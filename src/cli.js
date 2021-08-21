import readlineSync from 'readline-sync';

const takeUserInput = (userQuestion) => {
    const input = readlineSync.question(userQuestion);
    return input;
};

const getRandom = (max) => Math.floor(Math.random() * max);

export { takeUserInput, getRandom };
