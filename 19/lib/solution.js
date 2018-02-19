'use strict';

let Tree = require('./karytrees');
let SLL = require('./sll');

module.exports = (tree) => {
  if (!tree) return new Error('Input Required');
  if (!(tree instanceof Tree)) return new Error('Invalid Datatype Provided');
  if (!tree.root) return new Error('Empty Tree Provided, Requires Tree Containing Data');
  let arr = [], list = new SLL();
  tree.breadthFirst(v => {
    arr.push(v.val);
  });
  arr.sort((a, b) => b - a);
  arr.map(v => list.insertHead(v));
  return list;
};