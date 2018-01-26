'use strict';

// Test Dependencies

const SLL = require('../lib/sll');
const ND = require('../lib/nd');
const solution = require('../lib/solution')
require('jest');

// Test Variables

let test1 = new SLL(), test2 = new SLL();
test1.insertHead(1);
test1.insertHead(2);
test1.insertHead(3);
test2.insertHead(1);
test2.insertHead(2);
test2.insertHead(3);

// Tests
describe('Find Nth From Last', function () {
  describe('#findNthFromLastNode', function () {
    it('Should return null for any non numeric input', function () {
      expect(solution('', 1)).toBeNull();
      expect(solution(test1, 'stuff')).toBeNull();
    });
    it('Should return a valid node from the requested location', function () {
      expect(solution(test1, 1)).toBe(test1.head.next);
      expect(solution(test2, 0)).toBe(test2.head.next.next);
    });
    it('Should return null for a numeric input greater than the list length or less than one where one is the first node', function () {
      expect(solution(test1, 20)).toBeNull();
      expect(solution(test2, -1)).toBeNull();
    });
  });
});