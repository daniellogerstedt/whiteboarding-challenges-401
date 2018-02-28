'use strict';

const rec = require('../lib/recursive');
require('jest');

describe('Recursive Solution - Do not do this', () => {
  describe('Valid Inputs', () => {
    it('Should return a number', () => {
      expect(typeof rec(4)).toBe('number');
    });
    it('Should return the correct number', () => {
      expect(rec(4)).toBe(3);
    });
  });
  describe('Invalid Inputs', () => {
    it('Should return null for no input', () => {
      expect(rec()).toBeNull();
    });
    it('Should return null for a non numeric input', () => {
      expect(rec('invalid')).toBeNull();
    });
  });
});