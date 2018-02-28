'use strict';

module.exports = n => {
  if (!n || typeof n !== 'number') return null;
  let cache = [0, 1];
  switch(n) {
  case(0): return 0;
  case(1): return 1;
  default: {
    for (let i = 2;i <= n; i++) {
      cache.push(cache[i-1]+cache[i-2]);
    }
    return cache[n];
  }
  }
};