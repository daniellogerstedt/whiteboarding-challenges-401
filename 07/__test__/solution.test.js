'use strict';

let isCirc = require('../lib/solution');
require('jest');
let circTest = { head: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null }}}}}
  , nonTest = { head: { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: null }}}}}
  , invalTest = {name: 'invalid'};
  
circTest.head.next.next.next.next = circTest.head.next;

describe('Solution Module', () => {
  describe('#isCirc', () => {
    it('Should return null if provided invalid input', () => {
      expect(isCirc()).toBeNull();
      expect(isCirc('invalid')).toBeNull();
    });
    it('Should return null if list contains invalid objects', () => {
      expect(isCirc(invalTest)).toBeNull();
    });
    it('Should return True for a circular object', () => {
      expect(isCirc(circTest)).toBe(true);
    });
    it('Should return False for a non circular object', () => {
      expect(isCirc(nonTest)).toBe(false);
    });
  });
});