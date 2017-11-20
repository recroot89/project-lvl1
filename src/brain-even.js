#!/usr/bin/node

import game from './index';

const question = () => () => Math.round(Math.random() * 100);
const correctAnswer = (value) => () => value % 2 === 0 ? 'yes' : 'no';

export default () => game(question, correctAnswer);
