'use strict';

let solution = require('./solution');
require('jest');

describe('Solution Module', function(){
  describe('#intersect method', function(){
    it('should verify whether arguments were passed and return null if not', function(){
      expect(solution.intersect()).toBeNull();
      expect(solution.intersect([])).toBeNull();
    });
    it('should verify whether arguments were valid and return null if not', function(){
      expect(solution.intersect('stuff', 'and things')).toBeNull();
      expect(solution.intersect([44, 44, 44], 44)).toBeNull();
    });
    it('should accept valid arguments with intersection and return intersections', function(){
      expect(solution.intersect([1, 2, 3, 4, 5], [1, 3, 6, 7, 8, 9, 10])).toEqual([1, 3]);
      expect(solution.intersect(['Hector', 'Ed', 'Kevin', 'Jim'], ['Jeff', 'Koko', 'Ed', 'Hector', 'Tim'])).toEqual(['Hector', 'Ed']);
    });
    it('should accept valid arguments with no intersections and return "no matches"', function(){
      expect(solution.intersect(['cat', 'rabbit'],['dog', 'elephant'])).toBe('no matches');
      expect(solution.intersect([1, 1, 1, 1, 1],[2, 2, 2, 2, 2])).toBe('no matches');
    });
  });
});