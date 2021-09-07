#!/usr/bin/env node
import startGame, { greetUser, giveExpressionResult } from '../src/index.js';

const userName = greetUser();
console.log('What is the result of the expression?');

startGame(userName, giveExpressionResult);
