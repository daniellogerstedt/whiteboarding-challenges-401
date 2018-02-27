'use strict';

module.exports = (arrOne, arrTwo) => {
  if (!arrOne || !arrTwo) return null; // Big O Notation: O(1) Invalid Input
  if (!Array.isArray(arrOne) || !Array.isArray(arrTwo)) return null; // Big O Notation: O(1) Invalid Input
  const ht = {};
  arrOne.map(v => ht[v]=true);
  return arrTwo.filter(v => { // Big O Notation: O(2n) Normal Execution
    if (ht[v]) {
      ht[v] = false;
      return true;
    }
    return false;
  });
};