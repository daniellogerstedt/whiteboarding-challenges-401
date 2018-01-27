'use strict';

let stackVer = require('../lib/solution');
let vStr = '{}{}{}{}{}{}{}{}{}{}{}{{}}{{}}{{{}}}{{{{}}}}{}';
let iStr = '{{{{{fsdafdsafdsafdsafdasf}}}}}}dfsafdas{}dsf{}';
let nStr = 'skajfdkslafjdskalfjdksalfjdksalfjdskalfjdsalfjd';

describe('Solution Module', () => {
  describe('#stack verification', () => {
    it('Should return null on no input', () => {
      expect(stackVer()).toBeNull();
    });
    it('Should return null for invalid input', () => {
      expect(stackVer(9)).toBeNull();
    });
    it('Should return null for a string containing no brackets', () => {
      expect(stackVer(nStr)).toBeNull();
    });
    it('Should return true for a correctly formatted string containing brackets', () => {
      expect(stackVer(vStr)).toEqual(true);
    });
    it('Should return false for an incorrectly formatted string containing brackets', () => {
      expect(stackVer(iStr)).toEqual(false);
    });
  });
  
});