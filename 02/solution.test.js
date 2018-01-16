'use strict';

let solution = require('./solution');
require('jest');

describe('Solution to whiteboarding 02', function(){
  describe('#highest', function(){
    it('verifies the argument passed to the method is an array containing only numbers', function(){
      expect(solution.highest({})).toBe(null);
      expect(solution.highest('somestring')).toBe(null);
      expect(solution.highest()).toBe(null);
      expect(solution.highest(3)).toBe(null);
      expect(solution.highest([1, 'dog', 3, 5])).toBe(null);
    });
    it('verifies the argument passed to the method contains atleast 2 numbers', function(){
      expect(solution.highest([1])).toBe(null);
      expect(solution.highest([])).toBe(null);
    });
    it('verifies the returned values are the highest in the array passed as an argument', function(){
      expect(solution.highest([3, 17])).toEqual({max: 17, maxTwo: 3});
      expect(solution.highest([1, 3, 4, 2, 5, 7, 8, 6, 9])).toEqual({max: 9, maxTwo: 8});
    });
  });
});