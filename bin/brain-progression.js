#!/usr/bin/env node
import { greetUser } from '../src/index.js';

const userName = greetUser();
console.log('What is the result of the expression?');
console.log(userName);
