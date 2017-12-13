#!/usr/bin/node

import game from './index';

const mission = 'Find the greatest common divisor of given numbers.';
const getNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const getQuestion = () => {
  const num1 = getNumber(1, 99);
  const num2 = getNumber(1, 99);
  return { num1, num2 };
};

const correctAnswer = ({ num1, num2 }) => {
  if (num1 === 1 || num2 === 1) {
    return 1;
  }
  const greatNum = num1 > num2 ? num1 : num2;
  const smallNum = num1 > num2 ? num2 : num1;
  const gcd = (count) => {
    if (count < 2) {
      return 1;
    }
    if (greatNum % count === 0 && smallNum % count === 0) {
      return count;
    }
    return gcd(count - 1);
  };
  return gcd(smallNum);
};

const questionToString = ({ num1, num2 }) => `${num1} ${num2}`;

export default () => game(mission, getQuestion, correctAnswer, questionToString);
