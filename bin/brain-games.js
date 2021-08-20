#!/usr/bin/env node
import readlineSync from 'readline-sync';
import takeUserInput from '../src/cli.js';

console.log('Welcome to the Brain Games!');
console.log(`Hello ${takeUserInput()}`);
