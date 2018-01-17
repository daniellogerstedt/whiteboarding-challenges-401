'use strict';

exports.reCars = function reCars(obj){
  if (!obj || !obj.value || typeof obj.value !== 'number') return null;
  return obj.next? obj.value + reCars(obj.next) : obj.value;
};

exports.cars = function (obj){
  if (!obj || !obj.value || typeof obj.value !== 'number') return null;
  var total = 0, flag = true;
  while (flag === true){
    total += obj.value;
    if (obj.next && typeof obj.next.value === 'number') obj = obj.next;
    else flag = false;
  }
  return total;
};