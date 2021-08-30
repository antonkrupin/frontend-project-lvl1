#!/usr/bin/env node
import { greetUser } from '../src/index.js';
import giveExpressionResult from '../src/brain-calc-game.js';

const userName = greetUser();
console.log('What is the result of the expression?');

giveExpressionResult(userName);
