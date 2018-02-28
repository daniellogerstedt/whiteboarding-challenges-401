'use strict';

const sol = require('../lib/solution');
require('jest');

describe('Solution Solution - Do not do this', () => {
  describe('Valid Inputs', () => {
    it('Should return a number', () => {
      expect(typeof sol(4)).toBe('number');
    });
    it('Should return the correct number', () => {
      expect(sol(4)).toBe(3);
    });
  });
  describe('Invalid Inputs', () => {
    it('Should return null for no input', () => {
      expect(sol()).toBeNull();
    });
    it('Should return null for a non numeric input', () => {
      expect(sol('invalid')).toBeNull();
    });
  });
});