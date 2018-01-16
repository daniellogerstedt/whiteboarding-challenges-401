'use strict';

exports.highest = function (arr) {
  let max = 0, maxTwo = 0, verifyFlag = false;
  arr.forEach(cur => {if (typeof cur !== 'number') verifyFlag = true;});
  if (verifyFlag === true) return null;
  max = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(max), 1);
  maxTwo = Math.max.apply(null, arr);
  return {max: max, maxTwo: maxTwo};
};