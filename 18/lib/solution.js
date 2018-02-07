'use strict';

let Tree = require('./karytrees');


module.exports = (tree) => {
  if (!tree) return new Error('Input Required');
  if (!(tree instanceof Tree)) return new Error('Invalid Datatype Provided');
  if (!tree.root) return new Error('Empty Tree Provided, Requires Tree Containing Data');
  let node = tree.root;
  tree.breadthFirst(v => {
    if(v.children.length > node.children.length) node = v; // Big O: O(N^2)
  });
  return node;
};