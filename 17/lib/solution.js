'use strict';

let Tree = require('./karytrees');


module.exports = (tree) => {
  if (!tree) return new Error('Input Required');
  if (!(tree instanceof Tree)) return new Error('Invalid Datatype Provided');
  if (!tree.root) return new Error('Empty Tree Provided, Requires Tree Containing Data');
  let sum = 0;
  tree.breadthFirst(v => {
    sum += v.val; // Big O: O(N^2)
  });
  return sum;
};