#!/usr/bin/env node
import giveNODResult from '../src/brain-gcd-game.js';
import { greetUser } from '../src/index.js';

const userName = greetUser();
console.log('Find the greatest common divisor of given numbers');

giveNODResult(userName);
