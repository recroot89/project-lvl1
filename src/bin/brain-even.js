#!/usr/bin/node

import readlineSync from 'readline-sync';

console.log('Welcome to brain games!');
const actual = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${actual}!`);
