#!/usr/bin/env node
import { takeUserInput, getRandom } from '../src/cli.js';

// const getRandom = (max) => Math.floor(Math.random() * max);

console.log('Welcome to the Brain Games!');
const userName = takeUserInput('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let rightAnswerCounter = 0;
let isRightAnswer = true;

while (isRightAnswer) {
    const randomNumber = getRandom(1000);
    console.log(`Question: ${randomNumber}`);
    const answer = takeUserInput();
    const divisionRemainder = randomNumber % 2;

    if (answer !== 'yes' || answer !== 'no') {
        console.log(`${answer} is wrong answer ;(.`);
        console.log(`Let\`s try again, ${userName}`);
        isRightAnswer = false;
    }

    if ((answer === 'no' && divisionRemainder === 0)
        || (answer === 'yes' && divisionRemainder !== 0)) {
        if (answer === 'yes') {
            console.log(`${answer} is wrong answer ;(. Correct was 'no'`);
            console.log(`Let\`s try again, ${userName}`);
            isRightAnswer = false;
        }
        console.log(`${answer} is wrong answer ;(. Correct was 'yes'`);
        console.log(`Let\`s try again, ${userName}`);
        isRightAnswer = false;
    }

    if ((answer === 'yes' && divisionRemainder === 0)
        || (answer === 'no' && divisionRemainder !== 0)) {
        console.log(`Your answer: ${answer}`);
        console.log('Correct!');
        rightAnswerCounter += 1;
        isRightAnswer = true;
    }

    if (rightAnswerCounter === 3) {
        console.log(`Congratulations, ${userName}!`);
        isRightAnswer = false;
    }
}
