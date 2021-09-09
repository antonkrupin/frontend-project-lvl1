#!/usr/bin/env node
import startGame from '../src/index.js';
import giveNODResult from '../games/brain-gcd-game.js';

startGame(giveNODResult, 'Find the greatest common divisor of given numbers');
