'use strict';

let SLL = require('../assets/sll'), Stack = require('../assets/stack');



module.exports = (sll) => {
  if (!sll) return new Error('Validation Error: Argument Required');
  if (!(sll instanceof SLL)) return new Error('Validation Error: Argument Passed Is Not A Linked-List');
  if (!sll.head) return new Error('Validation Error: List Passed As Argument Is Empty');
  let copy = Object.assign(sll), stack = new Stack();
  stack.push(copy.findNthNode(1).val);
  copy.remove(1);
  for (let lts = copy.head; lts; lts = lts.next) {
    if (lts.val !== stack.top.val) stack.push(copy.findNthNode(1).val);
    copy.remove(1);
  }
  for (let stl = stack.top; stl; stl = stack.top) {
    copy.insertHead(stack.pop().val);    
  }
  return copy;
};