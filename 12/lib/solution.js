'use strict';

const Stack = require('./Stack');

module.exports = class Staqueue {
  constructor () {
    this.entry = new Stack();
    this.exit = new Stack();
    this.size = 0;
    return this;
    // O(1) All Operations (All Cases)
  }

  enQ (val) {
    this.entry.push(val);
    this.size++;
    return this;
    // O(1) All Operations (All Cases)
  }

  deQ () {
    if (this.size === 0) return null; // O(n) Empty Queue (Best Case)
    if (this.exit.size === 0) {
      let count = this.entry.size;
      for (let i = 0; i !== count; i++) this.exit.push(this.entry.pop().val);
    }
    this.size--;
    return this.exit.pop(); 
    // O(1) Operation where exit stack already has items (Best Case) 
    // O(n) Operation where exit stack started empty and was filled (Worst Case)
  }
};