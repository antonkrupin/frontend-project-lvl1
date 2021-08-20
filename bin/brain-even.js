#!/usr/bin/env node
import takeUserInput from '../src/cli.js';

const getRandom = (max) => Math.floor(Math.random() * max);

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${takeUserInput('May I have your name? ')}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let rightAnswerCounter = 0;
while (rightAnswerCounter < 3) {
    const randomNumber = getRandom(1000);
    console.log(`Question: ${randomNumber}`);
    const answer = takeUserInput();
    const divisionRemainder = randomNumber % 2;

    if ((answer === 'yes' && divisionRemainder === 0) || (answer === 'no' && divisionRemainder !== 0)) {
        console.log(`Your answer: ${answer}`);
        console.log('Correct!');
        rightAnswerCounter += 1;
    }

    if ((answer === 'no' && divisionRemainder === 0) || (answer === 'yes' && divisionRemainder !== 0)) {
        console.log(`${answer} is wrong answer ;(. Correct was another`);
        break;
    }
}
