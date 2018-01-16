'use strict';

function values (arr) {
  return {
    highest: Math.max(...arr),
    lowest: Math.min(...arr),
    average: arr.reduce((a, b) => a + b)/arr.length(),
  };
}

values(/* insert array here */);
