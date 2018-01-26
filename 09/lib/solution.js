'use strict';

module.exports = (list, n) => {
  if (n !== 0 && !n || typeof n !== 'number') return null; // O(1) Invalid Input (Best Case)
  if (!(list instanceof Object) || !list.head) return null; // O(1) Invalid Input (Best Case)
  let count = 1, retObj = list.head;
  for (let itr = list.head; itr.next; itr = itr.next) count++;
  if (count < n || n < 0) return null;
  for (let i = 1; i < count - n; i++) retObj = retObj.next;  
  return retObj; // O(2n) Normal Operation (Worst Case)
};