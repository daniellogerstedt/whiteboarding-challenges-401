'use strict';

module.exports = (arr) => {
  if (!arr) return null; // O(1) Invalid Input (Best Case)
  if (!Array.isArray(arr)) return null; // O(1) Invalid Input (Best Case)
  let exists = [];
  for (let j = 0; j < arr.length; j++) exists[arr[j]] = true;
  for (let i = 1; i <= 100; i++) if (!exists[i]) return i; // O(n) Normal Operation (Worst Case)
};