'use strict';

module.exports = list => {
  if (!list || typeof list !== 'object' || Array.isArray(list)) return null; /* Big O: O(1) */
  if (!list.head && !list.next) return null; /* Big O: O(1) */
  let copy = Object.assign(list);
  while (copy) {
    if (copy.seen) return true; /* Big O: O(n) */
    else copy.seen = true;
    copy = copy.next || copy.head;
  }
  return false; /* Big O: O(n) */
};