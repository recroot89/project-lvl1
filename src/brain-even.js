#!/usr/bin/node

import game from './index';

const mission = 'Answer "yes" if number odd otherwise answer "no".';
const getNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;
const getQuestion = () => getNumber(0, 99);
const correctAnswer = value => (value % 2 === 0 ? 'yes' : 'no');
const questionToString = value => value;

export default () => game(mission, getQuestion, correctAnswer, questionToString);
