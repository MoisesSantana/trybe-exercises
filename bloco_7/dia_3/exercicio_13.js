const assert = require('assert');

function secondThirdSmallest(array) {
  const results = [];
  for (let index = 0; index < array.length; index += 1) {
    array.forEach ((item, index) => {
      let aux = 0;
      if (item > array[index + 1]) {
        aux = array[index + 1];
        array[index + 1] = array[index];
        array[index] = aux;
      }
    });
  }
  results.push(array[1]);
  results.push(array[2]);
  return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result);
