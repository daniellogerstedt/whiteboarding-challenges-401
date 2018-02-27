'use strict';

let sol = require('../lib/solution');

const arrOne = [1, 2, 3, 4, 5, 6], arrTwo = [3, 5, 6, 7], arrThree = [7, 8, 9, 10, 11, 12];
let inter = sol(arrOne, arrTwo), noInt = sol(arrOne, arrThree);


describe('Solution Whiteboard 31', () => {
  describe('Valid Inputs', () => {
    it('Should return an array of intersections if they exist', () => {
      expect(inter).toEqual([3, 5, 6]);
      expect(Array.isArray(inter)).toBeTruthy();
    });
    it('Should return an empty array if no intersections exist', () => {
      expect(noInt).toEqual([]);
      expect(Array.isArray(noInt)).toBeTruthy();
    });
  });
  describe('Invalid Inputs', () => {
    it('Should return null if no arguments are provided', () => {
      expect(sol(undefined, undefined)).toBeNull();
      expect(sol(arrOne, undefined)).toBeNull();
      expect(sol(undefined, arrTwo)).toBeNull();
    });
    it('Should return an array of intersections if they exist', () => {
      expect(sol('arrOne', arrTwo)).toBeNull();
      expect(sol(arrOne, 'arrTwo')).toBeNull();
      expect(sol('arrOne', 'arrTwo')).toBeNull();
    });
  });
});