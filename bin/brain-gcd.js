#!/usr/bin/env node
import startGame, { greetUser, giveNODResult } from '../src/index.js';

const userName = greetUser();
console.log('Find the greatest common divisor of given numbers');

startGame(userName, giveNODResult);
