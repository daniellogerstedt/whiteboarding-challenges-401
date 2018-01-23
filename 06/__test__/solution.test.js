'use strict';

let lp = require('../lib/solution');

describe('Solution', function () {
  describe('#loop', function () {
    it('should return null on no input', function() {
      expect(lp.loop()).toBeNull();
      expect(lp.loop(1)).toBeNull();
    });
    it('should return null on invalid input', function () {
      expect(lp.loop('invalid', () => null)).toBeNull();
      expect(lp.loop(-25, 'invalid')).toBeNull();
    });
    it('should run callback n times on valid input', function () {
      let count = 0;
      lp.loop(5, () => {count++;});
      expect(count).toBe(5);
    });
  });
});