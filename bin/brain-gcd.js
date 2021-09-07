#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import startGame, { giveNODResult } from '../src/index.js';

const userName = greetUser();
console.log('Find the greatest common divisor of given numbers');

startGame(userName, giveNODResult);
