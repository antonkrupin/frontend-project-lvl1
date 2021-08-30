#!/usr/bin/env node
import greetUser from '../src/index.js';
import giveRightAnswer from '../src/brain-calc-game.js';

const userName = greetUser();
console.log('What is the result of the expression?');

giveRightAnswer(userName);
