#!/usr/bin/node

import readlineSync from 'readline-sync';

console.log('Welcome to brain games!');
const actual = readlineSync.question('May I have your name?: ');
console.log(`Hello, ${actual}!`);

let acc = 0;
while (acc < 3) {
  const num = Math.round(Math.random() * 100);
  console.log(`Question: ${num}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const correctAnswer = num % 2 === 0 ? 'yes' : 'no';

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    acc += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    break;
  }
}
if (acc === 3) {
  console.log(`Congratulations, ${actual}!`);
} else {
  console.log(`Let's try again, ${actual}!`);
}
