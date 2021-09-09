#!/usr/bin/env node
import startGame from '../src/index.js';
import giveExpressionResult from '../games/brain-calc-game.js';

startGame(giveExpressionResult, 'What is the result of the expression?');
