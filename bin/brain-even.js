#!/usr/bin/env node
import guessEvenOrNot from '../src/brain-even-game.js';
import greetUser from '../src/index.js';

const userName = greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

guessEvenOrNot(userName);
