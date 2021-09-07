#!/usr/bin/env node
import startGame, { greetUser, guessPrimeOrNot } from '../src/index.js';

const userName = greetUser();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

startGame(userName, guessPrimeOrNot);
