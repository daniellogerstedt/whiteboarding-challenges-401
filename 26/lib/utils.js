'use strict';

module.exports = {
  map: (arr, cb) => {
    if (!arr || !Array.isArray(arr)) return null;
    if (!cb || typeof cb !== 'function') return new Array(...arr);
    let copy = new Array(...arr);
    for (let i in copy) copy[i] = cb(copy[i], i, copy);
    return copy;
  },
  filter: (arr, cb) => {
    if (!arr || !Array.isArray(arr)) return null;
    if (!cb || typeof cb !== 'function') return new Array(...arr);
    let final = [], copy = new Array(...arr);
    for (let i in copy) if (cb(copy[i], i, copy)) final.push(copy[i]);
    return final;
  },
  reduce: (arr, cb, acc) => {
    if (!arr || !Array.isArray(arr)) return null; 
    if (!cb) cb = (a, b) => a + b;
    if (typeof cb !== 'function') return null;
    if (!acc) acc = 0;
    let copy = new Array(...arr);
    for (let i in copy) acc = cb(acc, copy[i], i, copy);
    return acc;
  },
};