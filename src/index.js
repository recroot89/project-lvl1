#!/usr/bin/node
import readlineSync from 'readline-sync';

export default (gameQuestion, correctAnswer) => {
  console.log('Welcome to brain games!');
  console.log('Answer "yes" if number odd otherwise answer "no".');
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);

  let acc = 0;
  while (acc < 3) {
    const question = gameQuestion()();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer(question)()) {
      console.log('Correct!');
      acc += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(question)()}'.`);
      break;
    }
  }
  if (acc === 3) {
    console.log(`Congratulations, ${actual}!`);
  } else {
    console.log(`Let's try again, ${actual}!`);
  }
};
