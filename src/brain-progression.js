#!/usr/bin/node

import game from './index';

const mission = 'What number is missing in this progression?';
const getNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const getQuestion = () => {
  const result = [];
  const step = getNumber(1, 10);
  const index = getNumber(0, 9);
  const getProgression = (value) => {
    if (result.length > 10) {
      return result;
    }
    result[result.length] = value;
    return getProgression(value + step);
  };
  const progression = getProgression(getNumber(0, 9), step);
  return { progression, index };
};

const correctAnswer = ({ progression, index }) => progression[index];

const questionToString = ({ progression, index }) => {
  const str = [].concat(progression);
  str[index] = '..';
  return str.join(' ');
};

export default () => game(mission, getQuestion, correctAnswer, questionToString);
