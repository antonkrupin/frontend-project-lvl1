#!/usr/bin/env node
import startGame from '../src/index.js';
import guessPrimeOrNot from '../games/brain-prime-game.js';

startGame(guessPrimeOrNot, 'Answer "yes" if given number is prime. Otherwise answer "no".');
