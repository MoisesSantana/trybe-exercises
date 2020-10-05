const assert = require('assert');
// escreva a função removeMiddle aqui
function removeMiddle(words) {
  const indexOfExpectedWord = Math.floor(words.length / 2);
  const result = [words[indexOfExpectedWord]];
  words.splice(indexOfExpectedWord, 1);
  return result;
}

const words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
const expectedWords = ['mouse', 'giraffe', 'window', 'bottle'];
const expectedOutput = ['queen'];
const output = removeMiddle(words);

assert.deepEqual(output, expectedOutput);
assert.deepEqual(words, expectedWords);
