'use strict';



module.exports = (tree) => {
  if (!tree) return new Error('Input Required');
  if (!(tree instanceof Object)) return new Error('Invalid Datatype Provided');
  if (!tree.root) return new Error('Empty Tree Provided, Requires Tree Containing Data');
  let arr = [];
  tree.breadthFirst(v => {
    console.log(v);
    if(v.children.length === 0) arr.push(v);
  });
  return arr;
};