#!/usr/bin/env node
import takeUserInput from '../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${takeUserInput('May I have your name? ')}!`);
