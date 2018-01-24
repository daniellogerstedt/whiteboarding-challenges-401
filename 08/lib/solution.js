'use strict';

const SLL = require('./sll');

module.exports = (list1, list2) => {
  if (!list1 || !list2) return null; /* O(1) Invalid Arguments (Best Case) */
  if (!(list1 instanceof SLL) || !(list2 instanceof SLL)) return null; /* O(1) Invalid Arguments (Best Case) */
  let valArr = [], retList = new SLL;
  for (let fir = list1.head; fir; fir = fir.next) valArr[fir.value]? valArr[fir.value]++ : valArr[fir.value] = 1;
  for (let sec = list2.head; sec; sec = sec.next) if(valArr[sec.value]) retList.insertHead(sec.value);
  return retList; /* O(2n) Intended Operation (Worst Case) */
};