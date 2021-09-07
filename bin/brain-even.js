#!/usr/bin/env node
import startGame from '../src/index.js';
import guessEvenOrNot from '../src/brain-even-game.js';

startGame(guessEvenOrNot, 'Answer "yes" if the number is even, otherwise answer "no".');
