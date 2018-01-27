'use strict';

let Nd = require('./nd');

module.exports = class {
  constructor(maxSize=1048) {
    this.top = null;
    this.maxSize = maxSize;
    this.size = 0;
  }

  push(val) {
    if(this.size === this.maxSize) throw new Error('Max Stack Exceeded');
    let node = new Nd(val);
    node.next = this.top;
    this.top = node;
    this.size++;
    return this;
  }

  pop() {
    let item = this.top;
    this.top = item.next;
    item.next = null;
    this.size--;
    return item;
  }

  peek() {
    return this.top;
  }
};