#!/usr/bin/env node
import { greetUser } from '../src/cli.js';
import startGame, { completeProgression } from '../src/index.js';

const userName = greetUser();
console.log('What is the result of the expression?');

startGame(userName, completeProgression);
