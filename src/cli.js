import readlineSync from 'readline-sync';

export const takeUserInput = () => {
    const input = readlineSync.question('May I have your name? ');
    return input;
};

export default takeUserInput;