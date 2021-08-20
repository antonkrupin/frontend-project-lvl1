#!/usr/bin/env node
import takeUserInput from '../src/cli.js';

let rightAnswerCounter = 0;
const getRandom = (max) => Math.floor(Math.random() * max);

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${takeUserInput()}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (rightAnswerCounter <= 3) {
    const randomNumber = getRandom(1000);
    console.log(randomNumber);
    const answer = takeUserInput();
    if (answer === 'yes' && randomNumber % 2 === 0) {
        console.log('Your answer: yes');
        console.log('Correct!');
        rightAnswerCounter += 1;
    } else if (answer === 'no' && randomNumber % 2 !== 0) {
        console.log('Your answer: no');
        console.log('Correct!');
        rightAnswerCounter += 1;
    }
}
