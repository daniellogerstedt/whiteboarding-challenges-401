'use strict';

let anagrams = require('../lib/solution');

let test1 = anagrams(['acre','act','tac','care','cat','race']);

describe('Anagrams Whiteboard 29', () => {
  describe('Valid input', () => {
    it('Should return an array', () => {
      expect(test1).toBeInstanceOf(Array);
    });
    it('Should contain the anagrams correctly positioned together', () => {
      expect(test1).toEqual(['acre','care','race','act','tac','cat']);
    });
  });
  describe('Invalid input', () => {
    it('Should return null for anything other than an array', () => {
      expect(anagrams('invalid')).toBeNull();
    });
    it('Should return null for any array containing index values other than strings', () => {
      expect(anagrams(['acre', 'act', 'tac', 1, 'cat', 'race'])).toBeNull();
    });
  });
});