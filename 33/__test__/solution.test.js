'use strict';

let sol = require('../lib/solution');
require('jest');
let valid = sol(3,3);

describe('Solution Whiteboard 33', () => {
  describe('Valid Input', () => {
    it('It should return a number',() => {
      expect(typeof valid).toEqual('number');
    });
    it('It should return the correct number',() => {
      expect(valid).toEqual(9);
    });
  });
  describe('Invalid Input', () => {
    it('It should return null for invalid input type', () => {
      expect(sol('string', 3)).toBeNull();
      expect(sol(3, { object: 'string'})).toBeNull();
      expect(sol('string', { object: 'string'})).toBeNull();
    });
    it('It should return null for no input', () => {
      expect(sol()).toBeNull();
      expect(sol(3)).toBeNull();
      expect(sol(undefined, 3)).toBeNull();
    });
  });
});