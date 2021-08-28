#!/usr/bin/env node
import greetUser from '../src/index.js';

const userName = greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

greetUser(userName);
