/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
'use strict';

const generateKey = (length, possible) => {
  let base = possible.length;
  let key = '';
  for (let i = 0; i < length; i++) {
    let i = Math.floor(Math.random() * base);
    key += possible[i];
  }
  return key;
};

module.exports = { generateKey };
