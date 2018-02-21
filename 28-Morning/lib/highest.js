'use strict';

module.exports = (str) => {
  if (!str || typeof str !== 'string') return null;
  let arr = str.split(' '), score = 0, curr = 0, word = '';
  for (let i in arr) {
    curr = 0;
    for (let j in arr[i].split('')) {
      curr += (arr[i].charCodeAt(j) - 96);
    }
    if (curr > score) {
      score = curr;
      word = arr[i];
    }
  }
  return word;
};