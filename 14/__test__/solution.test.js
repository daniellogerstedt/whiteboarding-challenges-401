'use strict';

const solution = require('../lib/solution');
const SLL = require('../assets/sll');
require('jest');

let validTest1 = new SLL(), validTest2 = new SLL(), invalidTest = new SLL();
validTest1.insertHead(1).insertHead(2).insertHead(2).insertHead(3);
validTest2.insertHead(1).insertHead(2).insertHead(3).insertHead(4);


describe('UnDupe Challenge - Whiteboard 14', () => {
  describe('Valid Inputs', () => {
    it('It should return a list with the duplicates removed if there are duplicates', () => {
      expect(solution(validTest1).lLen).toBe(3);
      expect(solution(validTest1)).toBeInstanceOf(SLL);
    });
    it('It should return a copy of the list unaltered if there are no duplicates', () => {
      expect(solution(validTest2).lLen).toBe(4);
      expect(solution(validTest2)).toBeInstanceOf(SLL);
    });
  });
  describe('Invalid Inputs', () => {
    it('It should return an error (requires argument) if no arguments are provided', () => {
      expect(solution()).toBeInstanceOf(Error);
      expect(solution().message).toMatch(/Required/);
    });
    it('It should return an error (requires SLL as input) if not provided a list', () => {
      expect(solution('invalidtype')).toBeInstanceOf(Error);
      expect(solution('invalidtype').message).toMatch(/Linked-List/);
    });
    it('It should return an error (cannot operate on empty list) if SLL is empty', () => {
      expect(solution(invalidTest)).toBeInstanceOf(Error);
      expect(solution(invalidTest).message).toMatch(/Empty/);
    });
  });
});