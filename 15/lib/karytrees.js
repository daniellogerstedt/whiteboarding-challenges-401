'use strict';

const Queue = require('./queue');

const TreeNode = class {
  constructor(val) {
    this.val = val;
    this.children = [];
  }

};

module.exports = class { // K-Ary Tree Constructor
  constructor() {
    this.root = null;
  }

  breadthFirst(callback) {
    let current;
    let q = new Queue();
    q.enqueue(this.root);
    while (q.front) {
      current = q.dequeue();

      callback(current.val);
      current.val.children.map(c => q.enqueue(c));
    }
  }

  insert(val, parent) {
    let tn = new TreeNode(val);

    if (!this.root) {
      this.root = tn;
      return;
    }

    this.breadthFirst(node => {
      if (parent === node.val) {
        node.children.push(tn);
        return;
      }
    });
  }

  removeByVal(val) {
    if (this.root.val === val) {
      this.root = null;
      return;
    }
    this.breadthFirst(node => {
      node.children.map((c, i) => {
        if (c.val === val) node.children.splice(i, 1);
      });
      return;
    });

  }

};