#!/usr/bin/env node
import guessEvenOrNot from '../src/brain-even-game.js';
import { greetUser } from '../src/index.js';

const userName = greetUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

guessEvenOrNot(userName);
