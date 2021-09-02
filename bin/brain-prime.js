#!/usr/bin/env node
import guessPrimeOrNot from '../src/brain-prime-game.js';
import { greetUser } from '../src/index.js';

const userName = greetUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

guessPrimeOrNot(userName);
