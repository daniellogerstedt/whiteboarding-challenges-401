'use strict';

let binary = require('../lib/solution');
let arr = [0,1,2,3,4,5,6,7,8,9,11];

describe('Whiteboard 10 Solution', () => {
  describe('#binary search', () => {
    describe('Invalid Input Tests', () => {
      it('Should return null if not provided input', () => {
        expect(binary()).toBeNull();
      });
      it('Should return null if provided invalid input', () => {
        expect(binary('stuff', 'that is invalid')).toBeNull();
      });
      it('Should return null if the requested value is outside the numeric range of the array', () => {
        expect(binary(arr, 500)).toBeNull();
      });
    });
    describe('Valid Input Tests', () => {
      it('Should return a valid object instance if the value is found in the array', () => {
        expect(binary(arr, 4)).toBeInstanceOf(Object);
      });
      it('Should return a valid output object with the correct values if the value is found', () => {
        expect(binary(arr, 4)).toEqual({value: 4, index: 4});
      });
    });
  });
});