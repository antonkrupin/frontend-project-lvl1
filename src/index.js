import takeUserInput from './cli.js';

const greetUser = () => {
    console.log('Welcome to the Brain Games!');
    const userName = takeUserInput('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName;
};

export default greetUser;
