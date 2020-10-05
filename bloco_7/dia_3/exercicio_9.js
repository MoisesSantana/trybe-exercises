const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (words, expectedWord) => {
  let result;
  words.forEach ((item, index) => {
    if (item === expectedWord) {
      result = index;
    }
  });
  if (result === undefined) {
    result = -1;
  }
  return result;
}


let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);
