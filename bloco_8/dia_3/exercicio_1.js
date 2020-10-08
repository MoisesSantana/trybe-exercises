    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  return arrays.reduce((result, item) => result.concat(item), []);
}

// Dada uma matriz de matrizes, transforme em uma única matriz.

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);