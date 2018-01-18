'use strict';

exports.intersect = function(a1, a2) {
  if (!a1 || !a2) return null;
  if (!Array.isArray(a1) || !Array.isArray(a2)) return null;
  let retA = [];
  a1.map(v => {
    if (a2.includes(v) && !retA.includes(v)) retA.push(v);
  });
  return retA.length? retA : 'no matches';
};