'use strict';

exports.halfway = (list) => {
  if (!list || !list.head) return null;
  let counter = 1, node = list.head;
  for (var itr = list.head; itr.next; itr = itr.next) counter++;
  counter = Math.ceil(counter/2);
  console.log(counter);
  for (var loc = 0; loc < counter; loc++){
    console.log(node, counter);
    if (loc === counter - 1) return node;
    node = node.next;
  }
};