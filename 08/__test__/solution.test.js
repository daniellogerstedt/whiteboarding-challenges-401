'use strict';

// Test Dependencies
const SLL = require('../lib/sll'), inList = require('../lib/solution');
require('jest');

// Test List Instantiation/Construction

let list1 = new SLL(), list2 = new SLL(), list3 = new SLL();
list1.insertHead(1);
list1.insertHead(2);
list1.insertHead(3);
list2.insertHead(4);
list2.insertHead(5);
list3.insertHead(3);

// Solution Testing

describe('Solution Module', () => {
  describe('#inList', () => {
    it('Should return null if not given input', () => {
      expect(inList()).toBeNull();
    });
    it('Should return null if not provided valid SLL objects', () => {
      expect(inList({head:null}, list1)).toBeNull();
    });
    it('Should return an empty SLL list if no intersections exist', () => {
      expect(inList(list1, list2)).toEqual({head: null, lLen: 0});
    });
    it('Should return a SLL list of intersections', () => {
      expect(inList(list1, list3)).toEqual({head: {value: 3, next: null}, lLen: 1});
    });
  });
});