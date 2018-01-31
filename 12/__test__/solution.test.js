'use strict';

const Node = require('../lib/nd');
const StaQueue = require('../lib/solution');
require('jest');

let test = new StaQueue()


describe('Staqueue', () => {
  describe('#enQ', () => {
    it('Should add a valid Node object to the enqueue stack', () => {
      test.enQ(1);
      expect(test.entry.top).toBeInstanceOf(Node);
    });
    it('Should add the correct value to the Nodes that are added to the queue', () => {
      expect(test.entry.top.val).toBe(1);
    });
    it('Should increment the total number of nodes inside the stack when enQ is used', () => {
      test.enQ(2);
      test.enQ(3);
      expect(test.entry.size).toBe(3);
    });
    it('Should enqueue the items correctly in the entry stack', () => {
      expect(test.entry.top.val).toBe(3);
    });
  });
  describe('#deQ', () => {
    it('Should return a valid Node object', () => {
      this.nd = test.deQ();
      expect(this.nd).toBeInstanceOf(Node);
    });
    it('Should return an object from the front of the queue', () => {
      expect(this.nd.val).toBe(1);
    });
    it('Should return objects from the front of the list even after another item has been placed in the entry to the queue', () => {
      test.enQ(4);
      this.nd = test.deQ();
      expect(this.nd.val).toBe(2);
    });
    it('Should return null if no items are in either the entry or exit stack of the queue', () => {
      test.deQ();
      test.deQ();
      test.deQ();
      this.nd = test.deQ();
      expect(this.nd).toBeNull();
    });
  });
});