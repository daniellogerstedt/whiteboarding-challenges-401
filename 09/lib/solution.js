'use strict';

module.exports = (list, n) => {
  if (n !== 0 && !n || typeof n !== 'number') return null;
  if (!(list instanceof Object) || !list.head) return null;
  let count = 1, retObj = list.head;
  for (let itr = list.head; itr.next; itr = itr.next) count++;
  if (count < n || n < 0) return null;
  for (let i = 1; i < count - n; i++) retObj = retObj.next;  
  return retObj;
};