'use strict';

let fibR = module.exports = (n) => {
  if (!n || typeof n !== 'number') return null;
  switch (n) {
  case (0): return 0;
  case (1): return 1;
  default: {
    return fibR(n-1) + fibR(n-2);
  }
  }
};