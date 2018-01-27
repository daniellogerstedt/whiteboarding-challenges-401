'use strict';

module.exports = class {
  constructor (val) {
    if (!val) return null;
    this.val = val;
    this.next = null;
  }
};