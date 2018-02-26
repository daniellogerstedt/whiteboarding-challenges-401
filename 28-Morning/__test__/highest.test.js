'use strict';

const highest = require('../lib/highest');
const testZzza = ('aaaa ssss zzza nnnn mmmm hhhh azzz');
const testAzzz = ('aaaa ssss azzz nnnn mmmm hhhh zzza');
require('jest');

describe('Should return highest scoring words', () => {
  it('should return zzza even though azzz is present after it', () => {
    expect(highest(testZzza)).toBe('zzza');
  });

  it('should return azzz even though zzza is present after it', () => {
    expect(highest(testAzzz)).toBe('azzz');
  });
});