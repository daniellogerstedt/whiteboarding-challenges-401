'use strict';

let nd = require('../solution');
require('jest');

describe('solution module', function () {
  describe('#halfway', function () {
    it('should verify a valid input or return null',function () {
      expect(nd.halfway()).toBeNull();
      expect(nd.halfway([])).toBeNull();
    });
    it('should return null for an object that is not a linked list', function () {
      expect(nd.halfway({})).toBeNull();
      expect(nd.halfway({name: 'dog'})).toBeNull();
    });
    it('should return a valid node object for a valid linked list', function () {
      expect(nd.halfway({head: {value: 'dog', next: null}})).toEqual({value: 'dog', next: null});
      expect(nd.halfway({ head: { value: 14, next: { value: 'dog', next: { value: 'cat', next: { value: 22, next: null } } } } })).toEqual({ value: 'dog', next: { value: 'cat', next: { value: 22, next: null }}});
    });
  });
});