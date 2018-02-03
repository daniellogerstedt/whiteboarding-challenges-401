'use strict';

const sol = require('../lib/solution');
const Tree = require('../lib/karytrees');
require('jest');

let testTree = new Tree();
testTree.insert(1);
testTree.insert(2, 1);
testTree.insert(3, 1);
testTree.insert(4, 3);
testTree.insert(5, 3);
testTree.insert(6, 5);

let valid = sol(testTree);
let noinput = sol();
let invalid = sol('invalid');
let empty = sol(new Tree());

describe('Solution Tests', () => {
  describe('Valid Inputs', () => {
    it('Should return an array', () => {
      expect(Array.isArray(valid)).toBeTruthy();
    });
    it('Should return an array containing 3 items', () => {
      expect(valid.length).toBe(3);
    });
    it('Should return an array containing the correct nodes (val)', () => {
      expect(valid[0].val).toBe(2);
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