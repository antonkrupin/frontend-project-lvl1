#!/usr/bin/env node
import startGame from '../src/index.js';
import completeProgression from '../games/brain-progression-game.js';

startGame(completeProgression, 'What is the result of the expression?');
