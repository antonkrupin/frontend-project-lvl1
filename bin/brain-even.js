#!/usr/bin/env node
import startGame, { greetUser, guessEvenOrNot } from '../src/index.js';

const userName = greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

startGame(userName, guessEvenOrNot);
