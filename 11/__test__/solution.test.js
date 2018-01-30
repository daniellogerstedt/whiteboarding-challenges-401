'use strict';

const missing = require('../lib/solution');
require('jest');

let arr = [];
for (let i = 1; i < 100; i++) {
  if (i !== 45) arr.push(i);
}

describe('Missing Number Whiteboard 11', () => {
  describe('#missing', () => {
    it('It should return null if no input is given', () => {
      expect(missing()).toBeNull();
    });
    it('It should return null if the input is not an array', () => {
      expect(missing('invalid input')).toBeNull();
    });
    it('It should return the missing number when provided valid input', () => {
      expect(missing(arr)).toBe(45);
    });
  });
});