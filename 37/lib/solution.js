'use strict';

let SLL = require('./sll');

module.exports = tree => {
  if (!tree || typeof tree !== 'object' || Array.isArray(tree)) return null;
  let answer = new SLL, tempArr = [];
  tree.traverse('pre', nd => tempArr.push(nd.val));
  tempArr.sort((a,b) => a < b? 1 : a === b? 0 : -1);
  tempArr.map(v => answer.insertHead(v));
  return answer;
};


