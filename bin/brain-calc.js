#!/usr/bin/env node
import { greetUser } from '../src/index.js';
import giveExpressionResult from '../src/brain-calc-game.js';

const userName = greetUser();
console.log('What is the result of the expression?');

<<<<<<< HEAD
// greetUser(userName);
=======
giveExpressionResult(userName);
>>>>>>> edf39373fab5e4e61fa3143b8176076d4c3f4e29
