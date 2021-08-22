#!/usr/bin/env node
import takeUserInput from '../src/cli.js';
import guessEvenOrNot from '../src/brain-even-game.js';

console.log('Welcome to the Brain Games!');
const userName = takeUserInput('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

guessEvenOrNot(userName);
