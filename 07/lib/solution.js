'use strict';

module.exports = list => {
  if (!list || typeof list !== 'object' || Array.isArray(list)) return null;
  if (!list.head && !list.next) return null;
  let copy = Object.assign(list);
  while (copy) {
    if (copy.seen) return true;
    else copy.seen = true;
    copy = copy.next || copy.head;
  }
  return false;
};