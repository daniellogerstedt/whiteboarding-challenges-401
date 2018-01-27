'use strict';


module.exports = (arr, val) => {
  if (!arr || !val) return null;
  if (!Array.isArray(arr) || typeof val !== 'number') return null;
  if (val < arr[0] || val > arr[arr.length - 1]) return null;

  // Variable Declarations
  let cur = Math.floor((arr.length - 1) / 2), half = Math.floor(arr.length / 4);

  for (let i in arr) {
    if (val > arr[cur]) cur = cur + half;
    if (val < arr[cur]) cur = cur - half;
    if (val === arr[cur]) return { value: val, index: cur };
    half = Math.ceil(half / 2);
  }
  return null;
};