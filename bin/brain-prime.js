#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import startGame, { guessPrimeOrNot } from '../src/index.js';

const userName = greetUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

startGame(userName, guessPrimeOrNot);
