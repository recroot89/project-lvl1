#!/usr/bin/node

import game from './index';

const mission = 'Balance the given number.';
const getNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const result = [];
const balance = (list, buffer) => {
  if (list.length === 1) return list[0] - buffer;
  const sum = list.reduce((acc, element) => acc + element, 0) - buffer;
  const base = Math.floor(sum / list.length);
  return base === 0 ? result.concat(0, balance(list.slice(1), buffer - list[0]))
    : result.concat(base, balance(list.slice(1), (buffer + base) - list[0]));
};

const getQuestion = () => getNumber(100, 99999);

const correctAnswer = (num) => {
  const numAsList = num
    .toString()
    .split('')
    .map(element => Number(element));
  return balance(numAsList, 0).join('');
};

const questionToString = num => String(num);

export default () => game(mission, getQuestion, correctAnswer, questionToString);
