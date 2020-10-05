const assert = require('assert');
// escreva a função wordLengths aqui

function wordLengths (words) {
  newArray = [];
  words.forEach (item => {
    newArray.push(item.length);
  });
  return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);