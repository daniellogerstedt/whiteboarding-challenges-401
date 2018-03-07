'use strict';

module.exports = class BinaryTree {
  constructor () {
    this.root = null;
    this.LHeight = 0;
    this.RHeight = 0;
  }

  traverse (type, cb) {
    if (!this.root) return null;
    type = type.toLowerCase();
    switch (type) {
    case 'in' : return this.inOrder(this.root, cb);
    case 'pre' : return this.preOrder(this.root, cb);
    case 'post' : return this.postOrder(this.root, cb);
    }
  }

  inOrder (root, cb) {
    if (!root || !cb) return null;
    this.inOrder(root.left, cb);
    cb(root);
    this.inOrder(root.right, cb);
  }

  preOrder (root, cb) {
    if (!root || !cb) return null;
    cb(root);
    this.preOrder(root.left, cb);
    this.preOrder(root.right, cb);
  }

  postOrder (root, cb) {
    if (!root || !cb) return null;
    this.postOrder(root.left, cb);
    this.postOrder(root.right, cb);
    cb(root);
  }
};