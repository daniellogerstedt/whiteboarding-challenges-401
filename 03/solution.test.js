'use strict';

let train = require('./solution');
require('jest');

describe('Solution', function(){
  describe('#cars', function(){
    it('should return null for any input that is not an object', function(){
      expect(train.cars([])).toBe(null);
      expect(train.cars()).toBe(null);
    });
    it('should return null for any object containing incorrect values of required properties', function(){
      expect(train.cars({name: 'tim'})).toBe(null);
      expect(train.cars({value: 'cat', next: 'dog'})).toBe(null);
    });
    it('should return a valid integer sum of passengers for correctly built trains', function(){
      expect(train.cars({value: 2, next: {value: 3, next: null}})).toBe(5);
      expect(train.cars({value: 4, next: {value: 2, next: {value: 3, next: null}}})).toBe(9);
    });
  });
  describe('#reCars', function(){
    it('should return null for any input that is not an object', function(){
      expect(train.reCars([])).toBe(null);
      expect(train.reCars()).toBe(null);
    });
    it('should return null for any object containing incorrect values of required properties', function(){
      expect(train.reCars({name: 'tim'})).toBe(null);
      expect(train.reCars({value: 'cat', next: 'dog'})).toBe(null);
    });
    it('should return a valid integer sum of passengers for correctly built trains', function(){
      expect(train.reCars({value: 2, next: {value: 3, next: null}})).toBe(5);
      expect(train.reCars({value: 4, next: {value: 2, next: {value: 3, next: null}}})).toBe(9);
    });
  });
});