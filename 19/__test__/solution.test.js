'use strict';

const sol = require('../lib/solution');
const Tree = require('../lib/karytrees');
const SLL = require('../lib/sll');
require('jest');

let testTree = new Tree();
testTree.insert(1);
testTree.insert(2, 1);
testTree.insert(3, 1);
testTree.insert(4, 3);
testTree.insert(5, 3);
testTree.insert(6, 3);
testTree.insert(7, 4);

let valid = sol(testTree);
let noinput = sol();
let invalid = sol('invalid');
let empty = sol(new Tree());

describe('Solution Tests', () => {
  describe('Valid Inputs', () => {
    it('Should return a node', () => {
      expect(valid).toBeInstanceOf(SLL);
    });
    it('Should return the correct node', () => {
      expect(valid.head.val).toBe(1);
      expect(valid.head.next.next.next.next.next.next.val).toBe(7);
    });
  });
  describe('Invalid Inputs', () => {
    it('Should return an error if an empty tree is provided', () => {
      expect(empty.message).toMatch(/Empty/);
    });
    it('Should return an error if an incorrect datatype is provided', () => {
      expect(invalid.message).toMatch(/Invalid/);
    });
    it('Should return an error if no input is provided', () => {
      expect(noinput.message).toMatch(/Input/);
    });
  });
});