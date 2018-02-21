'use strict';

let sol = require('../lib/solution');
require('jest');

const input = [[1,2,3],[4,5,6],[7,8,9]];
const correct = [[7,4,1],[8,5,2],[9,6,3]];
const result = sol(input);
const floatIn = [[1.1, 2.2, 3.3], [4.4, 5.5, 6.6], [7.7, 8.8, 9.9]];
const floatCor = [[7.7, 4.4, 1.1], [8.8, 5.5, 2.2], [9.9, 6.6, 3.3]];
const floatRes = sol(floatIn);

describe('Solution Tests', () => {
  describe('Valid Inputs', () => {
    it('Should return a valid array for a valid input', () => {
      expect(result).toEqual(correct);
    });
    it('Should return a valid array for a valid input', () => {
      expect(floatRes).toEqual(floatCor);
    });
  });
  describe('Invalid Inputs', () => {
    it('Should return null for any input that is not an array', () => {
      expect(sol(1)).toBeNull();
    });
    it('Should return null for any input that is properly formatted', () => {
      expect(sol([1,2,3])).toBeNull();
    });
  });
});