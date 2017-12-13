#!/usr/bin/node

import game from './index';

const mission = 'What is the result of the expression?';
const getNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const getQuestion = () => {
  const sign = '+-*/'[getNumber(0, 3)];
  const num1 = getNumber(0, 99);
  const num2 = getNumber(0, 99);
  return { num1, num2, sign };
};

const correctAnswer = ({ num1, num2, sign }) => {
  switch (sign) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return Math.round((num1 / num2) * 100) / 100;
    default: break;
  }
  return false;
};

const questionToString = ({ num1, num2, sign }) => `${num1} ${sign} ${num2}`;

export default () => game(mission, getQuestion, correctAnswer, questionToString);
