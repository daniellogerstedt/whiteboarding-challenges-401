'use strict';

module.exports = (arr) => {
  if (!arr || !Array.isArray(arr) || !Array.isArray(arr[0])) return null;
  let copy = new Array();
  for (let k in arr) copy[k] = new Array();
  for (let i in arr) {
    for (let j in arr[0]) {
      copy[i][arr.length-1-j] = arr[j][i];
    }
  }
  return copy;
};