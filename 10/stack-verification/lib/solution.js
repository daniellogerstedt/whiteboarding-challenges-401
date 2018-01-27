'use strict';

let Stack = require('./stack');

module.exports = str => {
  if (!str || typeof str !== 'string') return null;
  let stack = new Stack(), flag = false;
  for (let i = 0; i < str.length; i++){
    switch (str[i]) {
    
    case '{':
      stack.push(true);
      flag = true;
      break;
    case '}':
      switch (stack.size) {
      case (0):
        return false;
      default:
        stack.pop();
      }
    }
  }
  return flag === true? true : null;
};