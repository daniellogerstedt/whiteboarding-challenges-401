'use strict';

exports.highest = function (arr) {
  if (!arr || !Array.isArray(arr) || arr.length < 2) return null;
  for (let i in arr) if (typeof arr[i] !== 'number') return null;
  let max = 0, maxTwo = 0;
  max = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(max), 1);
  maxTwo = Math.max.apply(null, arr);
  return {max: max, maxTwo: maxTwo};
};