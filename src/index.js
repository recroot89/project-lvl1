#!/usr/bin/node
import readlineSync from 'readline-sync';

export default (mission, getQuestion, getCorrectAnswer, questionToString) => {
  console.log('Welcome to brain games!');
  console.log(mission);
  const actual = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${actual}!`);

  let acc = 0;
  while (acc < 3) {
    const question = getQuestion();
    const stringQuestion = questionToString(question);
    console.log(`Question: ${stringQuestion}`);
    const answer = getCorrectAnswer(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(answer)) {
      console.log('Correct!');
      acc += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      break;
    }
  }
  if (acc === 3) {
    console.log(`Congratulations, ${actual}!`);
  } else {
    console.log(`Let's try again, ${actual}!`);
  }
};
