#!/usr/bin/env node
import takeUserInput from '../src/cli.js';

const getRandom = (max) => Math.floor(Math.random() * max);

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${takeUserInput()}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
console.log(getRandom(1000));
