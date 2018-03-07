'use strict';

module.exports = class TreeNode {
  constructor (val, L=null, R=null) {
    this.right = L;
    this.left = R;
    this.val = val;
  }
};