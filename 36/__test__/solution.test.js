'use strict';

let sol = require('../lib/solution');
require('jest');

let treeA = { root: { left: { left: null, right: null }, right: { left: null, right: { left: null, right: null } } } };
let treeB = { root: { left: { left: null, right: null }, right: { left: null, right: { left: null, right: null } } } };
let treeC = { root: { left: { left: null, right: null }, right: { left: null, right: null } } };
let validTrue = sol(treeA, treeB), validFalse = sol(treeA, treeC);

console.log('validTrue', validTrue);
console.log('validFalse', validFalse);

describe('Solution Tests - Whiteboard 36', () => {
  describe('Valid Inputs', () => {
    it('Return True for two trees with the same structure', () => {
      expect(validTrue).toBeTruthy();
    });
    it('Return False for two trees with different structures', () => {
      expect(validFalse).toBeFalsy();
    });
  });
  describe('Invalid Inputs', () => {
    it('Return null for no input', () => {
      expect(sol()).toBeNull();
      expect(sol(treeA)).toBeNull();
      expect(sol(undefined, treeB)).toBeNull();
    });
    it('Return null for invalid inputs', () => {
      expect(sol('treeA', 'treeB')).toBeNull();
      expect(sol(treeA, 'treeB')).toBeNull();
      expect(sol('treeA', treeB)).toBeNull();
    });
  });
});