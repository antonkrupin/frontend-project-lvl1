#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import startGame, { guessEvenOrNot } from '../src/index.js';

const userName = greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

startGame(userName, guessEvenOrNot);
