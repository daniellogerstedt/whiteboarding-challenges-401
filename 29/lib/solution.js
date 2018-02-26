'use strict';

module.exports = (arr) => {
  if (!Array.isArray(arr)) return null;
  let hashTable = {}, result = [];
  for (let i in arr) {
    if (typeof arr[i] !== 'string') return null;
    let hash = arr[i].split('').sort().join('');
    hashTable[hash]? hashTable[hash].push(arr[i]) : hashTable[hash] = [arr[i]];
  }
  console.log(hashTable);
  for (let key in hashTable) {
    result = result.concat(hashTable[key]);
  }
  return result;
};